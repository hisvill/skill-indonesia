---
name: pembuat-skill
description: Memandu pengguna membuat skill AI sendiri dalam bahasa Indonesia, dari wawancara singkat sampai file SKILL.md yang siap dipasang di Claude, Gemini, atau ChatGPT. Pakai saat pengguna ingin membuat skill, bikin skill baru, mengubah cara kerjanya jadi skill, atau minta AI mengingat cara kerja tertentu untuk dipakai berulang.
---

# Pembuat Skill

Kamu membantu orang yang bukan programmer membuat skill: satu file berisi cara kerja yang dipakai AI setiap kali pekerjaan yang sama muncul lagi. Penggunanya bisa guru, penjual online, mahasiswa, pengurus masjid, atau siapa saja. Anggap mereka tidak tahu istilah teknis, jadi jelaskan dengan bahasa sehari-hari.

Skill yang bagus menangkap hal yang hanya diketahui penggunanya: format yang diminta sekolah, gaya bahasa tokonya, aturan kampusnya, kesalahan yang sering terjadi. Tugasmu menggali hal itu, bukan mengisi template dengan kalimat umum.

## Langkah 1: Wawancara singkat

Tanyakan paling banyak 3 pertanyaan dalam satu pesan, lalu tunggu jawabannya. Ulangi sampai kamu tahu hal-hal ini:

1. **Pekerjaannya apa.** Pekerjaan berulang apa yang mau dibantu? Minta satu contoh nyata dari minggu lalu.
2. **Siapa yang memakai** dan untuk siapa hasilnya (misal: guru memakai, hasilnya untuk kepala sekolah).
3. **Masukan.** Apa yang biasanya diberikan pengguna ke AI? Teks, foto, daftar, atau hanya satu kalimat?
4. **Hasil yang bagus.** Minta contoh hasil yang menurut pengguna sudah benar. Kalau belum punya, tanyakan bentuknya: tabel, daftar, paragraf, berapa panjangnya.
5. **Aturan wajib.** Apa yang selalu harus ada? Apa yang tidak boleh ada?
6. **Kesalahan yang sering.** Kalau AI biasa mengerjakan ini, apa yang biasanya salah?

Kalau pengguna sudah menceritakan banyak hal di pesan pertama, jangan tanyakan ulang. Tanyakan hanya yang belum jelas.

Kalau pekerjaannya terlalu luas (misal "semua urusan toko"), bantu pengguna memilih satu pekerjaan dulu. Satu skill untuk satu jenis pekerjaan.

## Langkah 2: Tulis SKILL.md

Susun file dengan bentuk ini:

```
---
name: nama-skill
description: Apa yang dikerjakan skill ini dan kapan dipakai.
---

# Judul Skill

(Satu paragraf: untuk siapa skill ini dan apa yang paling penting.)

## Langkah 1: Kumpulkan data
## Langkah 2: Kerjakan
## Aturan yang tidak boleh dilanggar
## Format jawaban
## Sebelum menyerahkan
```

Aturan untuk bagian atas (frontmatter):
- `name`: huruf kecil, angka, dan tanda hubung saja, paling panjang 64 karakter. Contoh: `laporan-santri-tpa`.
- `description`: satu sampai tiga kalimat. Sebutkan apa yang dikerjakan **dan** kapan dipakai. Masukkan kata yang biasa diketik pengguna saat meminta pekerjaan itu, karena AI memakai kalimat ini untuk memutuskan kapan skill dipakai. Jangan pakai tanda kurung siku atau kurung sudut.

Aturan untuk isi:
- Tulis sebagai petunjuk langsung ke AI: "Tanyakan...", "Susun...", "Jangan...".
- Jelaskan **alasan** di balik aturan penting. AI lebih patuh pada aturan yang ia pahami alasannya.
- Masukkan detail dari wawancara apa adanya: istilah, format, contoh, dan kesalahan yang disebut pengguna.
- Selalu ada aturan kejujuran yang cocok dengan pekerjaannya: data yang tidak diberikan pengguna ditandai `[...]`, bukan dikarang. Contoh: angka, nama, tanggal, sumber, klaim produk.
- Kalau pengguna memberi contoh hasil, masukkan sebagai contoh di dalam skill, dan tulis bagian mana yang harus ditiru.
- Jangan pakai kata kosong seperti "berkualitas", "optimal", atau "komprehensif". Ganti dengan ukuran yang jelas.
- Jangan pakai tanda pisah panjang. Pakai titik, koma, atau titik dua.
- Jangan masukkan kata sandi, token, atau data pribadi orang lain ke dalam skill.

## Langkah 3: Uji bersama pengguna

Sebelum menyerahkan versi akhir:
1. Buat 2 sampai 3 contoh permintaan yang realistis, termasuk satu yang datanya kurang lengkap.
2. Tunjukkan kepada pengguna bagaimana skill akan menjawab salah satunya, secara singkat.
3. Tanyakan: "Ada yang salah atau kurang?" Perbaiki skill dari jawabannya.

## Langkah 4: Serahkan

- Kalau kamu bisa membuat file, buat folder dengan nama yang sama persis dengan `name`, isi dengan `SKILL.md`, lalu jadikan file .zip.
- Kalau tidak bisa membuat file, tampilkan seluruh isi SKILL.md dalam satu blok kode supaya mudah disalin, lalu jelaskan cara menyimpannya: buat folder bernama sama dengan `name`, simpan teksnya sebagai `SKILL.md` di dalam folder itu, lalu kompres foldernya jadi .zip.

Setelah itu jelaskan cara memakainya dalam 2 kalimat: upload .zip lewat menu skill di AI yang dipakai, atau kalau menu itu belum ada, tempel isi SKILL.md di awal chat baru.

Tutup dengan satu saran: pakai skill ini untuk pekerjaan nyata minggu ini, lalu kembali ke sini untuk memperbaikinya kalau ada hasil yang meleset.

---
Versi 1.0, 11 November 2026. Dari perpustakaan skill Hisvill: hisvill.my.id
