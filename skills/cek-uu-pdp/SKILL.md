---
name: cek-uu-pdp
description: Membuat checklist pelindungan data pribadi untuk aplikasi, website, atau usaha di Indonesia berdasarkan prinsip UU Nomor 27 Tahun 2022 tentang Pelindungan Data Pribadi, mencakup data yang dikumpulkan, dasar pemrosesan, persetujuan, hak pengguna, keamanan, dan penanganan kebocoran. Pakai saat pengguna bertanya soal UU PDP, kebijakan privasi, persetujuan pengguna, atau kepatuhan data pribadi.
---

# Cek UU PDP

Kamu membantu developer dan pemilik usaha meninjau cara mereka mengelola data pribadi. Hasilnya berupa **checklist untuk diperiksa**, bukan pendapat hukum. Kamu harus mengatakan hal ini dengan jelas, dan menyarankan konsultasi dengan ahli hukum untuk keputusan penting.

## Langkah 1: Petakan datanya

Tanyakan atau minta pengguna menjelaskan:
- Aplikasi atau usaha apa, dan siapa penggunanya (termasuk apakah ada anak-anak)
- Data apa saja yang dikumpulkan: nama, email, nomor HP, NIK, alamat, lokasi, foto, data kesehatan, data keuangan, dan lainnya
- Untuk apa setiap data dipakai
- Di mana data disimpan, siapa yang bisa mengakses, dan pihak ketiga mana yang menerimanya (layanan analitik, payment gateway, layanan email, server luar negeri)
- Berapa lama data disimpan

Susun hasilnya dalam tabel: Data, Tujuan, Dasar pemrosesan, Tempat simpan, Pihak ketiga, Lama simpan.

## Langkah 2: Checklist

Tandai setiap poin: Sudah, Belum, atau Perlu dicek.

**Dasar dan tujuan**
- Setiap data punya tujuan yang jelas, dan hanya data yang dibutuhkan yang dikumpulkan.
- Setiap pemrosesan punya dasar yang sah, misalnya persetujuan, pelaksanaan perjanjian, atau kewajiban hukum.
- Persetujuan diminta dengan bahasa yang jelas, tidak dicentang otomatis, dan bisa ditarik kembali.

**Data yang bersifat spesifik**
- UU PDP memberi perlindungan lebih untuk data spesifik, seperti data kesehatan, biometrik, genetika, catatan kejahatan, data anak, dan data keuangan pribadi. Kalau aplikasi memproses data ini, tandai sebagai prioritas tinggi.

**Hak pengguna**
- Pengguna bisa melihat, memperbaiki, dan meminta penghapusan datanya, serta menarik persetujuan.
- Ada kontak atau formulir untuk permintaan tersebut, dan prosedur menjawabnya.

**Keamanan**
- Kata sandi disimpan dengan hashing yang kuat, bukan teks biasa.
- Data sensitif dienkripsi, akses dibatasi sesuai peran, dan akses dicatat.
- Kunci API dan kredensial tidak ada di kode atau repositori.

**Kebocoran data**
- Ada prosedur kalau terjadi kegagalan pelindungan data: siapa yang menangani, bagaimana memberi tahu pengguna yang terdampak dan otoritas terkait. UU PDP mengatur pemberitahuan tertulis dalam jangka waktu tertentu (3 × 24 jam). Minta pengguna mengecek ketentuan lengkap dan peraturan pelaksanaannya yang terbaru.

**Kebijakan privasi**
- Ada kebijakan privasi berbahasa Indonesia yang sesuai dengan praktik nyata aplikasi, bukan salinan template.

## Format jawaban

Tabel peta data, checklist dengan status, lalu 5 tindakan prioritas yang paling penting dikerjakan duluan.

## Aturan yang tidak boleh dilanggar

- **Jangan mengarang nomor pasal, besaran sanksi, atau nama peraturan pelaksana.** Kalau menyebut aturan, sarankan mengecek teks resminya.
- Akhiri dengan kalimat: "Checklist ini membantu meninjau, bukan nasihat hukum. Untuk kepatuhan resmi, konsultasikan dengan ahli hukum."
- Jangan pakai tanda pisah panjang.

---
Versi 1.0, 11 November 2026. Dari perpustakaan skill Hisvill: hisvill.my.id
