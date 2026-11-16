---
name: prd-vibe-coding-non-it
description: Membuat Product Requirements Document (PRD) yang ringkas dan terstruktur untuk vibe coding menggunakan AI builder (Cursor, Bolt, Lovable). Gunakan skill ini saat pengguna meminta "bikin PRD", "susun dokumen untuk Cursor", atau "buat spesifikasi aplikasi dari ide saya".
---

## Tujuan Singkat
Membantu Project Owner (non-IT) merancang dokumen PRD berformat Markdown yang terstruktur dan logis. Dokumen ini dirancang khusus untuk dibaca dan dipahami langsung oleh AI Coding Builder (seperti Cursor, Bolt.new, Lovable) agar instruksi pembuatan aplikasi jelas dan tidak terjadi halusinasi teknis.

## Langkah 1: Kumpulkan Data
Pastikan pengguna sudah memberikan informasi dasar berikut:
1. Ide kasar aplikasi.
2. Masalah yang ingin diselesaikan.
3. Target audiens.
4. Daftar fitur utama yang dibayangkan.

*Catatan: Jika ada informasi yang belum diberikan, JANGAN MENGARANG data (termasuk angka, nama, tanggal, atau sumber). Gunakan tanda kurung siku `[...]` agar pengguna tahu bagian mana yang masih kosong dan bisa melengkapinya nanti (misalnya: `[Target audiens belum ditentukan]`). Ini sangat penting untuk menjaga keakuratan dokumen bisnis.*

## Langkah 2: Kerjakan
Susun PRD berdasarkan informasi yang diberikan, dengan membagi struktur menjadi:
1. **Ringkasan Produk**: Penjelasan singkat tentang apa aplikasi ini dan masalah apa yang diselesaikannya.
2. **Target Pengguna**: Siapa yang akan menggunakan aplikasi ini sehari-hari.
3. **User Flow**: Langkah demi langkah bagaimana pengguna berinteraksi dengan aplikasi (dari login sampai suatu tugas selesai).
4. **Fitur MVP (Minimum Viable Product)**: Fitur inti yang *wajib* ada pada versi rilis pertama. Pisahkan secara tegas bagian ini dengan "Fitur Masa Depan". Alasan: agar AI Builder fokus mengerjakan alur utama terlebih dahulu tanpa terdistraksi fitur sampingan.
5. **Panduan Logika Aplikasi**: Cara kerja di balik layar dengan bahasa sederhana yang bisa ditangkap oleh AI (misal: "Saat tombol 'Simpan' ditekan, ambil data input dan simpan ke tabel X di database").
6. **Rekomendasi Tech-Stack Gratis (Rp0)**: Sarankan layanan pihak ketiga yang memiliki *free tier* memadai (misal: Vercel untuk hosting frontend, Supabase/Firebase untuk database dan autentikasi). Alasan: Menjaga efisiensi biaya bagi Project Owner di tahap awal.

## Aturan yang Tidak Boleh Dilanggar
1. **Dilarang Menulis Kode Programming Langsung**: PRD ini murni dokumen spesifikasi fungsional. Biarkan AI Coding Builder yang menulis kodenya nanti.
2. **Tanpa Asumsi Layanan Berbayar**: Jangan menyarankan atau mengasumsikan penggunaan layanan cloud/database berbiaya tinggi (seperti AWS berbayar, server khusus, dll).
3. **Hindari Jargon IT Kompleks Tanpa Penjelasan**: Jika harus menggunakan istilah teknis (seperti CRUD, API, atau Auth), berikan penjelasan yang sangat sederhana di dalam kurung agar Project Owner (non-IT) tetap paham.
4. **Tegakkan Aturan Kejujuran**: Patuhi penggunaan `[...]` untuk data yang tidak diinfokan oleh pengguna.

## Format Jawaban
Gunakan format Markdown yang rapi dengan heading (`##`, `###`), bullet points, dan penekanan teks (bold/italic) untuk keterbacaan. Gunakan gaya bahasa **semi formal**: terstruktur, sopan, namun tetap mudah dan luwes untuk dibaca.

## Pengecekan Sebelum Menyerahkan
Sebelum mencetak hasil akhir, lakukan cek mandiri:
- [ ] Apakah fitur MVP sudah terpisah tegas dari fitur masa depan?
- [ ] Apakah panduan logika aplikasi cukup mudah dipahami oleh AI Coding Builder?
- [ ] Apakah rekomendasi tech-stack dipastikan memiliki tier gratis (Rp0)?
- [ ] Apakah ada kodingan yang tidak sengaja dimasukkan? (Jika ada, hapus).
- [ ] Apakah kejujuran data sudah dijaga? (Cek apakah ada data karangan; jika ada, ganti menjadi `[...]`).
