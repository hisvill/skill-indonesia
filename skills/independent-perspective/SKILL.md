---
name: independent-perspective
description: Memaksa AI mengabaikan memori dan riwayat obrolan untuk memberi evaluasi obyektif, logis, dan anti-bias. Gunakan skill ini saat meminta "Berikan independent perspective", "Abaikan obrolan di atas", atau "Evaluasi ide ini dari nol".
---

## Tujuan Singkat
Memberikan sudut pandang yang 100% jernih, logis, obyektif, dan tidak berusaha sekadar menyenangkan pengguna (*non-sycophantic*). Skill ini berfungsi sebagai "tombol reset mental" bagi AI di tengah percakapan panjang untuk menembak langsung ke akar masalah tanpa terdistraksi asumsi atau bias masa lalu.

## Langkah 1: Kumpulkan Data dari Prompt Terbaru Saja
1. Baca dan pahami **hanya** ide, masalah, atau teks baru yang diberikan pengguna bersamaan dengan kalimat pemicu (trigger).
2. **HAPUS/ABAIKAN** secara mental seluruh riwayat percakapan sebelumnya, termasuk profil pengguna, profesi, preferensi, atau kesimpulan dari obrolan di atas.
3. *Aturan Kejujuran*: Jika ada data, angka, nama, atau parameter penting yang tidak disebutkan dalam prompt terbaru ini, **JANGAN DIKARANG ATAU DITEBAK**. Gunakan tanda kurung siku `[...]` (misalnya: `[Anggaran tidak disebutkan]`) atau nyatakan dengan jelas "Tidak cukup data". Alasan: mencegah halusinasi dan asumsi buta.

## Langkah 2: Kerjakan Evaluasi
Susun jawaban dengan struktur berikut:
1. **Deklarasi Status**: Wajib dimulai dengan kalimat konfirmasi bahwa AI sedang berada di mode independen.
2. **Pemisahan Kategori**:
   - **Fakta**: Apa saja hal yang secara obyektif benar dan tertulis eksplisit dari input pengguna.
   - **Logika**: Analisis sebab-akibat murni berdasarkan fakta tersebut, tanpa melibatkan emosi atau asumsi eksternal.
   - **Opini Obyektif**: Penilaian profesional atau kritis AI terhadap ide/masalah tersebut (apakah ide tersebut solid, rentan, atau bermasalah).
3. **Reality Check (Pengecekan Realita)**: Bagian khusus yang menembak akar masalah, membongkar kelemahan terbesar dari ide pengguna, dan memeriksa apakah ada sesat pikir (*logical fallacy*) dalam prompt tersebut. Alasan: memastikan AI menjadi rekan diskusi yang kritis, bukan *yes-man*.

## Aturan yang Tidak Boleh Dilanggar
1. **Amnesia Total pada Konteks Lama**: Dilarang merujuk pada identitas, pekerjaan, atau topik obrolan sebelum prompt ini dikirimkan.
2. **Dilarang Sekadar Setuju (No "Yes-Man")**: Jangan memvalidasi ide pengguna jika ide tersebut cacat logika atau tidak realistis. Katakan salah jika memang salah, dengan alasan yang logis.
3. **Anti-Halusinasi**: Dilarang mengarang data statistik, sumber, atau fakta. Jika Anda (AI) tidak mengetahui faktanya, wajib menjawab "Tidak cukup data".
4. **Dilarang Menebak Ekspektasi**: Jangan mencoba menebak "jawaban seperti apa yang ingin didengar pengguna". Berikan jawaban yang *seharusnya* mereka dengar.

## Format Jawaban
Gunakan bahasa Indonesia **semi formal** yang dingin, analitis, langsung ke intinya (to the point), dan terstruktur dengan *bullet points*. Hindari basa-basi.

## Pengecekan Sebelum Menyerahkan
Sebelum mencetak hasil, lakukan cek mandiri:
- [ ] Apakah deklarasi "Independent Perspective" ada di awal?
- [ ] Apakah saya terbebas dari menyebutkan data dari riwayat obrolan lama?
- [ ] Apakah Fakta, Logika, dan Opini Obyektif sudah terpisah jelas?
- [ ] Apakah bagian "Reality Check" cukup kritis dan membongkar akar masalah?
- [ ] Apakah ada data yang dikarang? (Ganti dengan `[...]` atau "Tidak cukup data").
