---
name: motion-graphic-otomatis
description: Membuat video motion graphic MP4 secara otomatis dari naskah atau voice-over menggunakan kode animasi (Remotion, atau HTML canvas yang direkam), untuk Reels, TikTok, Shorts, atau video explainer. Butuh agent yang bisa menjalankan kode, seperti Claude Code atau Cursor. Pakai saat pengguna minta dibuatkan video motion graphic, animasi teks dari VO, atau render video dari naskah.
---

# Motion Graphic Otomatis

Kamu membuat video motion graphic dengan kode, lalu merendernya menjadi MP4. Skill ini hanya bisa dijalankan di lingkungan yang bisa menjalankan perintah dan menyimpan file, misalnya Claude Code atau Cursor. Kalau kamu berjalan di aplikasi chat biasa yang tidak bisa menjalankan kode, katakan itu, lalu tawarkan membuat storyboard saja.

## Langkah 1: Kumpulkan data

- Naskah, file voice-over (mp3 atau wav), atau keduanya
- Rasio dan resolusi: 1080×1920 untuk 9:16, 1920×1080 untuk 16:9
- **Gaya visual dari pengguna**: warna latar, warna teks, warna aksen, font, logo, dan contoh video yang disukai. Jangan memakai gaya bawaanmu atau meniru gaya kreator lain. Kalau pengguna belum punya gaya, tanyakan satu pertanyaan tentang suasana yang diinginkan, lalu usulkan palet 3 warna untuk disetujui.
- Musik atau SFX yang boleh dipakai (milik pengguna atau berlisensi bebas)

## Langkah 2: Cek lingkungan

Periksa yang tersedia sebelum memilih cara:
- Node.js dan npm, untuk Remotion
- ffmpeg, untuk menggabungkan audio dan video serta mengecek hasil
- Alat transkripsi seperti Whisper, kalau perlu stempel waktu dari voice-over

Sampaikan ke pengguna alat apa yang perlu dipasang. Minta izin sebelum memasang apa pun.

## Langkah 3: Ambil waktu dari audio

- Kalau ada voice-over, dapatkan stempel waktu per kata atau per kalimat (transkripsi, atau minta pengguna memberikannya).
- Kalau hanya ada naskah, hitung perkiraan durasi sekitar 2 sampai 2,5 kata per detik untuk bahasa Indonesia, lalu tunjukkan ke pengguna sebelum render.

## Langkah 4: Rancang dan bangun

1. Buat storyboard singkat per adegan (teks di layar, visual, gerakan) dan minta persetujuan pengguna sebelum menulis kode.
2. Simpan semua warna, font, dan ukuran di satu berkas pengaturan, supaya mudah diubah.
3. Animasi diselaraskan dengan stempel waktu audio. Teks muncul tepat saat kata diucapkan, bukan sebelumnya.
4. Teks berada di area aman: jauhkan dari tepi atas dan bawah video 9:16, karena tertutup tombol aplikasi.
5. Kontras teks dan latar harus mudah dibaca di layar HP.

## Langkah 5: Render dan periksa

- Render ke MP4 (H.264, AAC, 30 fps).
- Ambil beberapa cuplikan gambar dari video hasil render dan periksa sendiri: teks terpotong, salah ketik, adegan kosong, atau teks yang tidak sinkron dengan suara.
- Cek durasi video sama dengan durasi audio.
- Kalau ada musik dan VO, pastikan suara VO tetap jelas di atas musik.

## Aturan yang tidak boleh dilanggar

- Jangan memakai musik, font, gambar, atau logo yang tidak dimiliki atau tidak berlisensi untuk dipakai pengguna.
- Jangan mengubah isi naskah.
- Jangan mengaku video sudah diperiksa kalau kamu belum melihat cuplikan hasil render.
- Jangan pakai tanda pisah panjang di teks video.

## Penutup

Serahkan: lokasi file MP4, durasi, daftar adegan, dan cara mengubah warna atau teks lewat berkas pengaturan.

---
Versi 1.0, 11 November 2026. Dari perpustakaan skill Hisvill: hisvill.my.id
