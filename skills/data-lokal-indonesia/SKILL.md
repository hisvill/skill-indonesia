---
name: data-lokal-indonesia
description: Menangani data khas Indonesia di kode dengan benar, seperti format Rupiah, tanggal dan hari berbahasa Indonesia, validasi NIK, NPWP, dan nomor HP, normalisasi nomor ke format +62, serta struktur alamat dari provinsi sampai kelurahan dan kode pos. Pakai saat pengguna membuat form, validasi input, laporan, atau database yang memuat data orang dan alamat di Indonesia.
---

# Data Lokal Indonesia

Kamu membantu developer menangani data Indonesia. Banyak kode bawaan dan library dibuat untuk format Amerika, sehingga Rupiah tampil dengan koma, nama hari muncul dalam bahasa Inggris, atau nomor HP pengguna ditolak. Aturan dasar skill ini: **validasi format, jangan pura-pura memvalidasi keaslian**.

## Rupiah

- Simpan nilai uang sebagai bilangan bulat (Rupiah tidak memakai sen dalam praktik sehari-hari) atau sebagai tipe desimal. **Jangan pakai float** untuk uang.
- Tampilan: titik sebagai pemisah ribuan, koma untuk desimal. Contoh: Rp1.500.000.
- JavaScript: `new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 })`. Hasilnya bisa memakai spasi tak terputus setelah "Rp". Sesuaikan kalau desain meminta tanpa spasi.
- PHP: `number_format($n, 0, ',', '.')`.

## Tanggal

- Nama hari dan bulan dalam bahasa Indonesia: pakai locale `id-ID` atau `id`. Contoh: `toLocaleDateString('id-ID', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })` menghasilkan "Rabu, 11 November 2026".
- Simpan waktu dalam UTC atau dengan zona waktu yang jelas. Indonesia punya tiga zona: WIB (UTC+7), WITA (UTC+8), WIT (UTC+9).

## Nomor HP

- Terima input dengan awalan `08`, `8`, `62`, atau `+62`, serta spasi dan tanda hubung.
- Normalisasi ke format internasional `+628...` untuk disimpan.
- Panjang nomor HP Indonesia bervariasi. Validasi panjang secara longgar.
- **Jangan menyimpan daftar awalan operator dari ingatan**, karena daftarnya berubah. Kalau perlu memastikan nomor aktif, gunakan verifikasi OTP.

## NIK

- 16 digit angka.
- Strukturnya: 6 digit kode wilayah (provinsi, kabupaten/kota, kecamatan), 6 digit tanggal lahir dengan format DDMMYY (untuk perempuan, tanggal ditambah 40), lalu 4 digit nomor urut.
- Validasi yang wajar: panjang, hanya angka, dan tanggal lahir yang masuk akal. **Validasi format tidak membuktikan NIK itu asli atau milik orang tersebut.**
- NIK adalah data pribadi. Batasi siapa yang bisa melihatnya, dan tampilkan sebagian saja di antarmuka (misal 3201********0001).

## NPWP

- Sejak penerapan NIK sebagai NPWP untuk orang pribadi, sistem perlu menerima format lama 15 digit (sering ditulis 99.999.999.9-999.999) dan format 16 digit.
- Simpan hanya angkanya, lalu format saat ditampilkan.
- Jangan membuat validasi digit pengecek dari ingatan. Kalau perlu validasi keabsahan, gunakan layanan resmi.

## Alamat

- Hierarki: provinsi, kabupaten/kota, kecamatan, desa/kelurahan, lalu kode pos (5 digit). RT/RW sebagai kolom terpisah.
- Gunakan dataset kode wilayah resmi dari Kemendagri, atau dataset turunan yang mencantumkan sumber dan tanggal pembaruan. **Jangan menulis daftar wilayah dari ingatan**, karena wilayah bisa dimekarkan.
- Simpan kode wilayah, bukan hanya nama, supaya tidak bermasalah dengan ejaan.

## Aturan

- Sebut versi library dan sarankan mengecek dokumentasinya.
- Data seperti NIK, nomor HP, dan alamat termasuk data pribadi: ikuti prinsip pelindungan data pribadi.
- Jangan pakai tanda pisah panjang.

---
Versi 1.0, 11 November 2026. Dari perpustakaan skill Hisvill: hisvill.my.id
