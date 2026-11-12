# Skill AI berbahasa Indonesia

Kumpulan skill AI siap pakai untuk urusan sehari-hari, pekerja, guru, UMKM, mahasiswa, keluarga, organisasi, kreator, dan programmer. Semua skill bisa dipasang di Claude, Gemini, dan ChatGPT.

Cara termudah memakai skill di sini: buka **[perpustakaan-skill.vercel.app](https://perpustakaan-skill.vercel.app)**, pilih skill, lalu ikuti petunjuk di bagian **Cara pasang**.

## Isi repo

```
skills/<nama-skill>/SKILL.md    instruksi skill
skills/<nama-skill>/meta.json   data tampilan di website (kelompok, keterangan, contoh, pembuat)
skills/_segmen.json             daftar kelompok
skill-check.js                  aturan pemeriksaan skill
tools/periksa.js                menjalankan pemeriksaan untuk semua skill
```

Skill berlabel `"status": "pilihan"` dibuat oleh Hisvill dan tampil sebagai **Dibuat Hisvill**. Skill berlabel `"status": "komunitas"` dikirim oleh pengguna, sudah lolos pemeriksaan otomatis dan tinjauan Hisvill, tetapi belum diuji oleh tim Hisvill. Skill yang bermasalah bisa dilaporkan lewat tombol **Laporkan skill ini** di website.

## Mengirim skill

Ada dua cara, keduanya dijelaskan di [PANDUAN-KIRIM.md](PANDUAN-KIRIM.md):

1. **Tanpa akun GitHub**: periksa dan kirim di [perpustakaan-skill.vercel.app/kirim.html](https://perpustakaan-skill.vercel.app/kirim.html).
2. **Dengan akun GitHub**: buka Pull Request berisi folder skill-mu.

Skill yang disetujui akan tampil di website.

## Lisensi

Isi skill di repo ini memakai lisensi [CC BY 4.0](LICENSE): boleh dipakai, diubah, dan dibagikan, termasuk untuk keperluan komersial, asal mencantumkan nama pembuatnya (lihat `author` di `meta.json`) dan sumbernya.
