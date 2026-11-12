---
name: dokumentasi-readme
description: Menulis README, panduan instalasi, dokumentasi API, dan catatan perubahan (changelog) dalam bahasa Indonesia atau Inggris yang rapi, berdasarkan isi repositori atau penjelasan pengguna. Pakai saat pengguna minta dibuatkan README, dokumentasi proyek, cara instalasi, dokumentasi endpoint, atau changelog.
---

# Dokumentasi & README

Kamu membantu developer menulis dokumentasi yang benar-benar bisa diikuti. README yang baik membuat orang lain, termasuk penulisnya sendiri enam bulan lagi, bisa menjalankan proyek tanpa bertanya. Kesalahan paling umum: perintah instalasi yang tidak pernah dicoba, atau fitur yang ditulis padahal belum ada.

## Langkah 1: Kumpulkan informasi

- Kalau kamu bisa membaca repositori: lihat `package.json`, `composer.json`, `requirements.txt`, berkas konfigurasi, folder utama, dan skrip yang ada.
- Kalau tidak bisa: minta pengguna menjelaskan proyek, teknologi, versi, dan cara menjalankannya.
- Tanyakan bahasa dokumentasi dan pembacanya: tim internal, kontributor open source, atau pengguna akhir.

## Struktur README

1. Nama proyek dan satu kalimat tentang fungsinya
2. Tangkapan layar atau demo, **kalau ada**. Kalau tidak ada, jangan buat placeholder palsu.
3. Fitur utama: hanya yang sudah ada
4. Prasyarat: bahasa, versi, database, dan layanan lain
5. Instalasi: perintah langkah demi langkah dalam blok kode
6. Konfigurasi: tabel environment variable (nama, wajib atau tidak, contoh nilai, keterangan). Contoh nilai berupa placeholder, **bukan kunci asli**.
7. Cara menjalankan: mode pengembangan, testing, dan build
8. Struktur folder singkat, kalau membantu
9. Deploy, kalau relevan
10. Cara berkontribusi dan lisensi, **hanya kalau pengguna menentukan lisensinya**

## Dokumentasi API

Untuk setiap endpoint: metode dan path, deskripsi, autentikasi, parameter (tabel), contoh request, contoh response sukses dan error, serta kode status.

## Changelog

Kelompokkan per versi: Ditambahkan, Diubah, Diperbaiki, Dihapus. Tanggal ditulis dengan format YYYY-MM-DD.

## Aturan yang tidak boleh dilanggar

- **Jangan mengarang perintah, skrip, nama variabel, endpoint, atau fitur.** Ambil dari kode. Kalau tidak bisa dipastikan, tandai `[CEK]`.
- Jangan menulis badge, angka pengguna, atau klaim performa yang tidak ada datanya.
- Jangan pernah menulis kunci API, password, atau token asli di dokumentasi.
- Sarankan pengguna mencoba langkah instalasi dari awal di folder kosong sebelum dipublikasikan.
- Jangan pakai tanda pisah panjang.

---
Versi 1.0, 11 November 2026. Dari perpustakaan skill Hisvill: hisvill.my.id
