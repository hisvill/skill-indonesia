---
name: audit-keamanan-kode
description: Mengaudit seluruh kode proyek aplikasi web, landing page, React/Next.js, atau Google Apps Script untuk mengecek kebenaran logika, kerapian struktur, dan kerentanan keamanan, lalu menyusun laporan tabel serta mengeksekusi perbaikan kode setelah pengguna memberi perintah konfirmasi. Gunakan skill ini setiap kali pengguna meminta audit kode, review keamanan, cek bug, merapikan codingan, mengecek celah rentan pada proyek, atau mengetik perintah eksekusi perbaikan.
---

# Audit Keamanan dan Kualitas Kode

Skill ini membantu developer dan pembuat aplikasi memeriksa kesehatan seluruh basis kode proyek (HTML/CSS/JS, React/Next.js, Google Apps Script, dan stack web terkait) secara menyeluruh, menyajikan laporan terstruktur dalam bentuk tabel, dan mengeksekusi perbaikan kode dengan aman hanya setelah disetujui oleh pengguna.

## Langkah 1: Pemindaian Menyeluruh (Jangan Ubah Kode Dulu)

Ketika pengguna meminta audit, pemeriksaan keamanan, atau review codingan pada sebuah proyek:

1. Periksa seluruh file relevan di dalam folder proyek (atau file yang dilampirkan pengguna). Abaikan folder bawaan seperti `node_modules`, `.git`, atau hasil build otomatis.
2. Evaluasi setiap file berdasarkan tiga pilar utama:
   - **Keamanan (Security):** API key, token, atau password yang tertulis langsung di kode (hardcoded); celah XSS (`innerHTML`, `dangerouslySetInnerHTML`); SQL/NoSQL injection; validasi input yang hilang; CORS yang terlalu terbuka; eksposur data sensitif di sisi klien; serta masalah hak akses atau `PropertiesService` pada Google Apps Script.
   - **Kebenaran Logika & Bug (Correctness):** Potensi error saat runtime, pemanggilan API atau `async/await` tanpa penanganan error (`try-catch`), kondisi race, memory leak, atau link/aset yang rusak.
   - **Kerapian & Struktur (Cleanliness):** Kode mati (unused variables/functions), duplikasi kode berulang, penamaan variabel yang membingungkan, dan struktur file yang berantakan.

## Langkah 2: Susun Laporan Hasil Audit

Sajikan hasil temuan dalam format berikut agar mudah dipahami dan ditinjau sebelum perubahan dilakukan:

1. **Ringkasan Status Proyek:** Berikan penilaian singkat kondisi proyek secara keseluruhan (Aman, Perlu Perhatian, atau Kritis) beserta jumlah temuan per tingkat bahaya.
2. **Tabel Rincian Temuan:** Gunakan tabel Markdown dengan kolom wajib berikut:
   - **No**
   - **File & Lokasi** (nama file dan nomor baris atau nama fungsi)
   - **Kategori** (Keamanan / Bug / Kerapian)
   - **Tingkat Bahaya** (Kritis / Tinggi / Sedang / Rendah)
   - **Masalah yang Ditemukan** (jelaskan risiko nyatanya dengan bahasa yang mudah dipahami)
   - **Rencana Solusi** (langkah perbaikan konkret yang akan dilakukan)
3. **Catatan Tambahan (Jika Ada):** Sebutkan jika ada konfigurasi luar kode yang harus dilakukan manual oleh pengguna (misalnya menyimpan secret key di `.env` atau Script Properties).
4. **Hentikan Proses & Minta Konfirmasi:** Akhiri pesan dengan menanyakan persetujuan pengguna dan beri tahu secara eksplisit bahwa perbaikan file baru akan dijalankan setelah pengguna membalas dengan kalimat **"eksekusi perbaikan"**.

## Langkah 3: Eksekusi Perbaikan (Hanya Setelah Konfirmasi)

Ketika pengguna membalas dengan **"eksekusi perbaikan"** (atau menyetujui rencana audit secara eksplisit):

1. Terapkan seluruh rencana solusi dari tabel audit langsung ke file-file di dalam folder proyek (jika menggunakan editor berbasis agen seperti Antigravity, Claude Code, atau Codex). Jika bekerja di antarmuka chat biasa tanpa akses langsung ke filesystem, tampilkan kode lengkap yang sudah diperbaiki per file agar siap disalin.
2. Pastikan perbaikan tidak merusak fitur, tampilan, atau alur kerja aplikasi yang sudah berjalan sebelumnya.
3. Buat ringkasan daftar file yang telah diubah beserta verifikasi singkat bahwa setiap poin masalah pada tabel audit telah ditutup.

## Aturan yang Tidak Boleh Dilanggar

- **Dilarang mengubah file kode pada tahap laporan awal.** Tahap pertama murni membaca dan melaporkan temuan agar pengguna tetap memegang kendali penuh atas perubahan proyeknya.
- **Jangan mengarang temuan atau nomor baris.** Jika file proyek belum tersedia di konteks atau folder belum terbaca, minta pengguna mengarahkan ke folder proyek atau melampirkan filenya terlebih dahulu.
- **Jangan mengganti kunci rahasia atau kredensial dengan nilai asal-asalan.** Ganti kredensial yang terekspos dengan referensi variabel lingkungan (seperti `process.env.NAMA_KEY` atau `PropertiesService.getScriptProperties()`) dan beri tahu pengguna cara mengisinya.
- **Gunakan bahasa Indonesia yang jelas, lugas, dan tanpa tanda pisah panjang.**
