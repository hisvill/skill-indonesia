# Panduan mengirim skill

Terima kasih sudah mau berbagi. Setiap skill dipakai orang lain untuk mengatur AI mereka, jadi setiap kiriman diperiksa otomatis lalu ditinjau sebelum tampil.

Aturan lengkap, termasuk data apa saja yang menjadi publik, ada di [perpustakaan-skill.vercel.app/aturan.html](https://perpustakaan-skill.vercel.app/aturan.html).

## Syarat skill

- Satu folder `skills/<nama-skill>/` berisi **SKILL.md** dan **meta.json** saja. File lain belum diterima.
- `name` di SKILL.md sama dengan nama folder: huruf kecil, angka, dan tanda hubung (misalnya `laporan-santri`).
- `description` menjelaskan apa yang dikerjakan skill dan kapan dipakai (40 sampai 1024 karakter).
- Isi instruksi minimal 200 karakter, ukuran file maksimal 100 KB.
- Berbahasa Indonesia, untuk pekerjaan nyata yang berulang.
- Skill buatanmu sendiri, dan kamu setuju skill itu dibagikan dengan lisensi CC BY 4.0. Boleh terinspirasi skill lain, asal ditulis ulang dan disebut sumbernya.

## Yang tidak diterima

- Instruksi yang menyuruh AI mengabaikan aturannya, menyembunyikan sesuatu dari pengguna, atau membocorkan prompt sistem.
- Perintah yang mengunduh lalu menjalankan skrip, menghapus file, atau mengirim kata sandi, token, OTP, atau data lain ke luar.
- Data pribadi: nomor HP, NIK, alamat, nama orang sungguhan, nomor rekening.
- Penipuan, judi, pinjol ilegal, ujaran kebencian, dan konten dewasa.
- Saran medis, hukum, atau keuangan yang menggantikan ahli. Skill boleh membantu memahami, tetapi harus menyarankan bertanya ke ahli untuk keputusan penting.
- Promosi terselubung, tautan afiliasi, dan tautan pendek.

## Cara 1: tanpa akun GitHub

1. Buka [perpustakaan-skill.vercel.app/kirim.html](https://perpustakaan-skill.vercel.app/kirim.html).
2. Pilih file SKILL.md atau tempel isinya, lalu isi data tampilannya.
3. Perbaiki semua yang ditandai **Perlu diperbaiki**, centang persetujuan, lalu tekan **Kirim skill**.

## Cara 2: dengan akun GitHub

1. Di halaman kirim, tekan **Unduh paket kiriman**, lalu ekstrak file .zip-nya. Isinya satu folder bernama sama dengan skill-mu.
2. Buka [halaman upload repo ini](https://github.com/hisvill/skill-indonesia/upload/main/skills). GitHub otomatis membuat salinan (fork) untukmu.
3. Seret folder hasil ekstrak ke halaman itu, tulis judul seperti `Skill baru: laporan-santri`, lalu pilih **Propose changes** dan **Create pull request**.

Kalau lebih suka cara biasa: fork, tambahkan folder di `skills/`, jalankan `node tools/periksa.js`, lalu buka Pull Request.

## Setelah dikirim

- Pemeriksaan otomatis berjalan di Pull Request. Kalau gagal, pesan kesalahannya menjelaskan bagian yang perlu diperbaiki.
- Peninjau membaca isinya. Mungkin ada permintaan perubahan.
- Setelah disetujui, skill tampil di website dengan label **Komunitas** dan namamu sebagai pembuat, dalam beberapa menit setelah disetujui.
- Skill yang terbukti melanggar aturan dicabut tanpa pemberitahuan lebih dulu. Mau mencabut skill buatanmu sendiri? Kirim DM ke Instagram @hisvill atau buka Pull Request.

## Memperbaiki skill yang sudah ada

Pull Request untuk memperbaiki skill boleh, asal `status` dan `author` di meta.json tidak diubah. Jelaskan apa yang diperbaiki dan kenapa.
