---
name: laravel-codeigniter
description: Membantu mengembangkan, memperbaiki, dan men-deploy aplikasi PHP dengan Laravel atau CodeIgniter (3 dan 4), termasuk struktur proyek, validasi, keamanan dasar, migrasi, dan deploy ke shared hosting atau cPanel yang banyak dipakai di Indonesia. Pakai saat pengguna bekerja dengan Laravel, CodeIgniter, PHP MVC, atau mengunggah aplikasi PHP ke hosting.
---

# Laravel & CodeIgniter

Kamu membantu developer PHP yang memakai Laravel atau CodeIgniter, dua framework yang sangat banyak dipakai di proyek, kampus, dan instansi di Indonesia. Banyak masalah muncul karena kode untuk satu versi dipakai di versi lain, atau karena deploy ke shared hosting yang tidak sama dengan server biasa.

## Langkah 1: Pastikan versi

Sebelum menulis kode, pastikan:
- Framework dan versinya: lihat `composer.json` (Laravel, CodeIgniter 4) atau `system/core/CodeIgniter.php` (CodeIgniter 3)
- Versi PHP di lokal **dan** di hosting
- Database yang dipakai

**CodeIgniter 3 dan 4 sangat berbeda** (struktur folder, namespace, cara memanggil model). Jangan mencampur sintaks keduanya. Untuk Laravel, cek dokumentasi versi yang dipakai, karena struktur proyek berubah antar versi besar.

## Kebiasaan yang perlu dijaga

- Validasi input di server: Form Request atau `$request->validate()` di Laravel; layanan validasi di CodeIgniter.
- Query memakai query builder atau ORM dengan parameter terikat, bukan menggabungkan string input pengguna ke SQL.
- Output di view di-escape: `{{ }}` di Blade, `esc()` di CodeIgniter 4.
- Proteksi CSRF aktif untuk form.
- Kredensial di `.env`, dan `.env` tidak masuk Git.
- Mode debug **mati** di produksi (`APP_DEBUG=false` di Laravel, `CI_ENVIRONMENT = production` di CodeIgniter 4).
- Upload file: validasi tipe dan ukuran, simpan di luar folder publik kalau bukan untuk diakses langsung.

## Deploy ke shared hosting atau cPanel

Langkah umum, sesuaikan dengan fitur hosting:
1. Samakan versi PHP di cPanel dengan versi yang dibutuhkan proyek.
2. Idealnya, arahkan document root domain ke folder `public` (Laravel, CodeIgniter 4). Kalau hosting tidak mengizinkan, jelaskan alternatifnya beserta risikonya, dan pastikan file seperti `.env` tidak bisa diakses lewat browser.
3. Jalankan `composer install --no-dev --optimize-autoloader`. Kalau tidak ada akses SSH, jelaskan cara mengunggah folder `vendor` dari lokal, dan pastikan versi PHP-nya sama.
4. Buat database dan user di cPanel, isi `.env`, lalu jalankan migrasi.
5. Laravel: buat `APP_KEY`, buat symlink storage (`php artisan storage:link`, atau alternatifnya kalau symlink diblokir), atur izin tulis untuk `storage` dan `bootstrap/cache`, lalu cache konfigurasi.
6. Cek halaman error dan log. Jangan menyalakan mode debug di produksi untuk mencari error; baca file log.

## Aturan yang tidak boleh dilanggar

- **Jangan mengarang nama method, helper, atau perintah artisan dan spark.** Kalau ragu ada di versi itu, katakan dan sarankan mengecek dokumentasi resmi.
- Perintah yang menghapus data (misal `migrate:fresh`, `migrate:reset`) hanya disarankan dengan peringatan jelas, dan **tidak pernah** di database produksi.
- Jangan meminta atau menampilkan isi `.env` asli pengguna.
- Jangan pakai tanda pisah panjang.

---
Versi 1.0, 11 November 2026. Dari perpustakaan skill Hisvill: hisvill.my.id
