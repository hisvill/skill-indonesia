#!/usr/bin/env node
/* Periksa semua skill di skills/ dengan aturan skill-check.js.
   node tools/periksa.js               -> periksa semua skill
   node tools/periksa.js --pr <base>   -> juga periksa perubahan Pull Request terhadap <base> (misal origin/main):
                                          hanya boleh menambah atau mengubah skills/<id>/SKILL.md dan meta.json,
                                          dan skill baru wajib berstatus komunitas. */
const fs = require("fs"), path = require("path"), {execFileSync} = require("child_process");
const {checkSkill, checkMeta} = require("../skill-check.js");

const ROOT = path.join(__dirname, ".."), DIR = path.join(ROOT, "skills");
const segments = JSON.parse(fs.readFileSync(path.join(DIR, "_segmen.json"), "utf8"));
const problems = [], notes = [];
let total = 0;

for (const id of fs.readdirSync(DIR).sort()) {
  const d = path.join(DIR, id);
  if (id.startsWith("_") || !fs.statSync(d).isDirectory()) continue;
  total++;
  const extra = fs.readdirSync(d).filter(f => !["SKILL.md", "meta.json"].includes(f));
  if (extra.length) problems.push(`${id}: hanya SKILL.md dan meta.json yang diterima (ada ${extra.join(", ")})`);
  let text, meta;
  try { text = fs.readFileSync(path.join(d, "SKILL.md"), "utf8"); } catch { problems.push(`${id}: SKILL.md tidak ada`); continue; }
  try { meta = JSON.parse(fs.readFileSync(path.join(d, "meta.json"), "utf8")); } catch (e) { problems.push(`${id}: meta.json tidak ada atau rusak (${e.message})`); continue; }
  const s = checkSkill(text), m = checkMeta(meta, segments);
  if (s.name && s.name !== id) problems.push(`${id}: name di SKILL.md ("${s.name}") harus sama dengan nama folder`);
  s.errors.forEach(e => problems.push(`${id}/SKILL.md: ${e}`));
  m.errors.forEach(e => problems.push(`${id}/meta.json: ${e}`));
  s.warnings.forEach(w => notes.push(`${id}/SKILL.md: ${w}`));
}

const i = process.argv.indexOf("--pr");
if (i > 0) {
  const base = process.argv[i + 1];
  const git = (...a) => execFileSync("git", a, {cwd: ROOT, encoding: "utf8", stdio: ["ignore", "pipe", "ignore"]}).trim();
  const changed = git("diff", "--name-status", `${base}...HEAD`).split("\n").filter(Boolean).map(l => l.split("\t"));
  for (const [st, f, f2] of changed) {
    const file = f2 || f;
    if (!/^skills\/[a-z0-9-]+\/(SKILL\.md|meta\.json)$/.test(file)) problems.push(`Pull Request hanya boleh mengubah skills/<nama>/SKILL.md dan meta.json. Berubah: ${file}`);
    if (st === "D" || st.startsWith("R")) problems.push(`Pull Request tidak boleh menghapus atau memindahkan file: ${f}`);
  }
  const ids = [...new Set(changed.map(([, f, f2]) => (f2 || f).split("/")[1]).filter(Boolean))];
  for (const id of ids) {
    let before = null;
    try { before = JSON.parse(git("show", `${base}:skills/${id}/meta.json`)); } catch {}
    let after;
    try { after = JSON.parse(fs.readFileSync(path.join(DIR, id, "meta.json"), "utf8")); } catch { continue; }
    if (!before) {
      if (after.status !== "komunitas") problems.push(`${id}: skill baru harus berstatus "komunitas".`);
      if ("order" in after) problems.push(`${id}: skill baru tidak boleh mengisi "order".`);
    } else {
      if (after.status !== before.status) problems.push(`${id}: status tidak boleh diubah lewat Pull Request.`);
      if (after.author !== before.author) problems.push(`${id}: nama pembuat tidak boleh diubah lewat Pull Request.`);
    }
  }
  console.log(`Pull Request mengubah ${changed.length} file di ${ids.length} skill.`);
}

notes.forEach(n => console.log("Perlu dilihat peninjau:", n));
if (problems.length) { problems.forEach(p => console.error("MASALAH:", p)); process.exit(1); }
console.log(`OK: ${total} skill lolos pemeriksaan.`);
