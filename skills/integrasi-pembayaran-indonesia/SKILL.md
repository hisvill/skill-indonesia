---
name: integrasi-pembayaran-indonesia
description: Memandu integrasi payment gateway Indonesia seperti Midtrans dan Xendit ke aplikasi web atau mobile, termasuk QRIS, virtual account, e-wallet, verifikasi notifikasi webhook, penanganan status transaksi, dan pengujian di sandbox. Pakai saat pengguna membangun checkout, pembayaran online, callback atau webhook pembayaran, atau bertanya soal Midtrans, Xendit, dan QRIS di kode.
---

# Integrasi Pembayaran Indonesia

Kamu membantu developer menghubungkan aplikasi dengan payment gateway Indonesia. Kesalahan di bagian ini berarti uang: pesanan ditandai lunas padahal belum dibayar, atau sudah dibayar tapi tidak tercatat. API penyedia juga bisa berubah. Karena itu skill ini punya dua prinsip: **jangan percaya ingatan, cek dokumentasi resmi**, dan **server adalah satu-satunya sumber kebenaran status pembayaran**.

## Langkah 1: Kumpulkan konteks

- Penyedia: Midtrans, Xendit, atau lainnya. Produk yang dipakai (misal Midtrans Snap atau Core API, Xendit Invoice atau Payment Request).
- Bahasa dan framework backend (Laravel, Express, Next.js, Django, dll.)
- Metode bayar yang dibutuhkan: QRIS, virtual account, e-wallet, kartu, retail
- Mode: sandbox atau produksi

Kalau kamu punya akses web, buka dokumentasi resmi penyedia untuk produk dan versi yang dipakai sebelum menulis kode. Kalau tidak punya akses, katakan bahwa contoh kode perlu dicocokkan dengan dokumentasi resmi.

## Langkah 2: Alur yang benar

1. Frontend meminta backend membuat transaksi. **Harga dihitung di backend dari database**, jangan pernah dari nilai yang dikirim browser.
2. Backend membuat transaksi ke penyedia memakai server key atau secret key yang disimpan di environment variable, lalu menyimpan pesanan dengan status `menunggu`.
3. Pengguna membayar.
4. Penyedia mengirim notifikasi (webhook) ke backend.
5. **Backend memverifikasi notifikasi** sebelum mempercayainya.
6. Backend memperbarui status pesanan, dan **harus idempoten**: notifikasi yang sama bisa datang lebih dari sekali.
7. Halaman "terima kasih" di frontend hanya menampilkan status dari backend, tidak menentukan lunas sendiri.

## Verifikasi webhook

- **Midtrans**: cocokkan `signature_key` dengan SHA512 dari `order_id + status_code + gross_amount + server_key`. Sebagai pengaman tambahan, ambil ulang status transaksi lewat API status.
- **Xendit**: cocokkan header `x-callback-token` dengan token callback dari dashboard.
- Bandingkan juga jumlah yang dibayar dengan jumlah pesanan di database.

Cek ulang cara verifikasi ini di dokumentasi resmi, karena detailnya bisa berbeda antar produk.

## Status transaksi

Petakan status penyedia ke status pesanan sendiri dalam satu tabel atau fungsi. Contoh di Midtrans: `settlement` dan `capture` (dengan `fraud_status` accept) dianggap lunas; `pending` menunggu; `expire`, `cancel`, dan `deny` gagal. Tangani juga refund.

## Keamanan dan pengujian

- Server key dan secret key hanya di backend, lewat environment variable. Jangan di-commit ke Git, jangan di kode frontend.
- Endpoint webhook memakai HTTPS. Catat (log) notifikasi masuk, **tanpa** menyimpan data kartu.
- Uji di sandbox: lunas, kedaluwarsa, gagal, dan notifikasi yang dikirim dua kali.
- Untuk pengujian webhook di lokal, gunakan tunnel ke localhost dan jelaskan cara memasang URL-nya di dashboard sandbox.

## Aturan yang tidak boleh dilanggar

- Jangan mengarang endpoint, nama field, atau nama status. Tandai `[CEK DOKUMENTASI]` kalau ragu.
- Jangan pernah menandai pesanan lunas berdasarkan redirect dari browser saja.
- Jangan pakai tanda pisah panjang.

---
Versi 1.0, 11 November 2026. Dari perpustakaan skill Hisvill: hisvill.my.id
