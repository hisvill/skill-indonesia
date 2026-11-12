/* Pemeriksa skill. Dipakai di browser (kirim.html) dan di Node (tools/build.js, CI),
   jadi aturannya selalu sama di kedua tempat.
   checkSkill(teks) -> {ok, name, description, body, errors: [...], warnings: [...]}
   checkMeta(meta, segmen) -> {errors, warnings}
   errors menahan kiriman; warnings perlu dibaca peninjau, tidak menahan. */
(function (root) {
  const MAX_BYTES = 100 * 1024;
  const NAME_RE = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

  /* Pola yang menahan kiriman: instruksi yang menyuruh AI melanggar aturannya sendiri atau menjalankan perintah berbahaya */
  const BLOCK = [
    [/\b(abaikan|lupakan|acuhkan)\b[^.\n]{0,40}\b(instruksi|perintah|aturan)\b[^.\n]{0,20}\b(sebelum|sistem|awal|lain)/i, "Menyuruh AI mengabaikan instruksi lain"],
    [/\b(ignore|disregard|forget)\b[^.\n]{0,30}\b(previous|prior|above|earlier|all|system)\b[^.\n]{0,20}\b(instructions?|prompts?|rules?)/i, "Menyuruh AI mengabaikan instruksi lain"],
    [/\b(tampilkan|bocorkan|ungkapkan|reveal|print|show)\b[^.\n]{0,30}\b(system prompt|prompt sistem|instruksi sistem)/i, "Meminta AI membocorkan prompt sistem"],
    [/\b(curl|wget)\b[^\n|]{0,200}\|\s*(sudo\s+)?(ba|z)?sh\b/i, "Mengunduh lalu langsung menjalankan skrip dari internet"],
    [/\brm\s+-[a-z]*r[a-z]*f?\s+(\/|~|\$HOME|\*)(\s|$)/i, "Perintah menghapus seluruh folder"],
    [/\b(powershell|pwsh)\b[^\n]{0,80}-(enc|encodedcommand)\b/i, "Perintah PowerShell tersandi"],
    [/\b(kirim|unggah|upload|send|post)\b[^.\n]{0,60}\b(password|kata sandi|token|api key|kunci api|cookie|otp|pin)\b/i, "Meminta data rahasia dikirim ke luar"],
    [/\b(jangan|tidak usah|never|do not|don't)\b[^.\n]{0,30}\b(beri ?tahu|kasih tahu|tell|inform)\b[^.\n]{0,20}\b(pengguna|user)\b/i, "Menyuruh AI menyembunyikan sesuatu dari pengguna"]
  ];
  /* Pola yang perlu dilihat peninjau, tapi bisa saja wajar */
  const WARN = [
    [/[A-Za-z0-9+/]{200,}={0,2}/, "Ada teks acak panjang (mungkin base64). Peninjau perlu memastikan isinya"],
    [/\bhttps?:\/\/(bit\.ly|s\.id|tinyurl\.com|t\.co|goo\.gl|cutt\.ly|rb\.gy|is\.gd|shorturl\.at|ow\.ly)\//i, "Ada tautan pendek. Pakai alamat lengkap supaya tujuannya jelas"],
    [/\b(eval|exec)\s*\(/, "Ada kode yang menjalankan teks sebagai program"],
    [/\b(transfer|kirim uang|rekening|top ?up|deposit)\b[^.\n]{0,40}\b(ke|to)\b[^.\n]{0,20}\d{6,}/i, "Ada nomor rekening atau ajakan transfer"],
    [/\b(\d{16})\b/, "Ada deretan 16 angka (mungkin NIK atau nomor kartu). Pastikan bukan data pribadi"],
    [/\b08\d{8,11}\b|\+62\s?8\d{8,11}\b/, "Ada nomor HP. Pastikan bukan data pribadi"]
  ];

  function frontmatter(text) {
    const m = /^---[ \t]*\r?\n([\s\S]*?)\r?\n---[ \t]*(?:\r?\n|$)/.exec(text);
    if (!m) return null;
    const fm = {};
    let key = null;
    for (const line of m[1].split(/\r?\n/)) {
      const kv = /^([A-Za-z_][\w-]*):\s*(.*)$/.exec(line);
      if (kv) { key = kv[1]; fm[key] = kv[2].replace(/^["']|["']$/g, "").trim(); }
      else if (key && /^\s+\S/.test(line)) fm[key] += " " + line.trim();
    }
    return {fm, body: text.slice(m[0].length)};
  }

  function scan(text, list) {
    const found = [];
    for (const [re, msg] of list) {
      const m = re.exec(text);
      if (!m) continue;
      const line = text.slice(0, m.index).split("\n").length;
      if (!found.some(f => f.msg === msg)) found.push({msg, line});
    }
    return found;
  }

  function checkSkill(text) {
    const errors = [], warnings = [];
    const bytes = typeof TextEncoder !== "undefined" ? new TextEncoder().encode(text).length : Buffer.byteLength(text);
    if (!text || !text.trim()) return {ok: false, errors: ["File kosong."], warnings};
    if (bytes > MAX_BYTES) errors.push(`File terlalu besar (${Math.round(bytes / 1024)} KB). Batasnya 100 KB.`);
    if (/[\u0000-\u0008\u000E-\u001F]/.test(text)) errors.push("Isi file bukan teks biasa. Kirim SKILL.md dalam bentuk teks.");

    const parsed = frontmatter(text.replace(/^﻿/, ""));
    if (!parsed) {
      errors.push("Bagian atas file harus diawali dan ditutup dengan baris --- berisi name dan description.");
      return {ok: false, errors, warnings};
    }
    const {fm, body} = parsed;
    const name = fm.name || "", description = fm.description || "";
    if (!name) errors.push("name belum diisi di bagian atas file.");
    else if (!NAME_RE.test(name)) errors.push(`name "${name}" harus huruf kecil, angka, dan tanda hubung saja, misalnya laporan-santri.`);
    else if (name.length > 64) errors.push("name terlalu panjang. Maksimal 64 karakter.");
    if (!description) errors.push("description belum diisi di bagian atas file.");
    else if (description.length < 40) errors.push("description terlalu pendek. Jelaskan apa yang dikerjakan skill dan kapan dipakai (minimal 40 karakter).");
    else if (description.length > 1024) errors.push(`description terlalu panjang (${description.length} karakter). Maksimal 1024.`);
    if (/[<>]/.test(name + description)) errors.push("name dan description tidak boleh berisi tanda < atau >.");
    if (body.trim().length < 200) errors.push("Isi instruksi di bawah bagian atas terlalu pendek (minimal 200 karakter).");

    scan(text, BLOCK).forEach(f => errors.push(`Baris ${f.line}: ${f.msg}.`));
    scan(text, WARN).forEach(f => warnings.push(`Baris ${f.line}: ${f.msg}.`));
    return {ok: errors.length === 0, name, description, body, errors, warnings};
  }

  function checkMeta(m, segments) {
    const errors = [], warnings = [];
    const need = (k, min, max, label) => {
      const v = String(m[k] || "").trim();
      if (!v) errors.push(`${label} belum diisi.`);
      else if (v.length < min) errors.push(`${label} terlalu pendek (minimal ${min} karakter).`);
      else if (v.length > max) errors.push(`${label} terlalu panjang (maksimal ${max} karakter).`);
    };
    need("name", 3, 40, "Nama tampilan");
    need("short", 10, 70, "Keterangan satu baris");
    need("desc", 40, 400, "Penjelasan");
    need("ask", 15, 300, "Contoh permintaan");
    need("author", 2, 40, "Nama pembuat");
    if (!segments || !segments[m.seg]) errors.push("Kelompok belum dipilih.");
    if (m.status && !["pilihan", "komunitas"].includes(m.status)) errors.push("status harus pilihan atau komunitas.");
    const all = ["name", "short", "desc", "ask", "keys", "note", "author"].map(k => m[k] || "").join("\n");
    scan(all, BLOCK).forEach(f => errors.push(f.msg + "."));
    if (/[<>]/.test(all)) errors.push("Isian tidak boleh berisi tanda < atau >.");
    return {errors, warnings};
  }

  const api = {checkSkill, checkMeta, NAME_RE, MAX_BYTES};
  if (typeof module !== "undefined" && module.exports) module.exports = api;
  else root.SkillCheck = api;
})(typeof window !== "undefined" ? window : globalThis);
