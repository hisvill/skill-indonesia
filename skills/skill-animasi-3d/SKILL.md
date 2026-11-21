---
name:skill-animasi-3d
description: membuat video animasi teks/edukatif (Reels/Shorts 9:16 atau YouTube 16:9 dari naskah + file voice-over mp3 (misalnya dari Elevelabs), dengan alur kerja motion design profesional/blender-modeling (konsep → styleframe → animasi → finishing), gerak kamera, transisi, SFX berlapis, subtitle, dan file .srt. Pakai saat user minta "buatkan video dari naskah/VO ini", "bikin Reels animasi", atau mengunggah mp3 VO dan naskah.
---

Bantu saya membuat sebuah skill AI: satu file SKILL.md berisi cara kerja yang kamu pakai setiap kali pekerjaan ini muncul lagi.

Tentang pekerjaannya:
- Pekerjaan: Buat skill khusus untuk membantu menghasilkan video motion graphic edukatif. Skill ini harus bisa membuat script voice over, menentukan konsep visual per adegan, menyusun arahan animasi, dan mengolah referensi visual yang diberikan menjadi video motion graphic yang menarik, gaya visual, komposisi, dan nuansa animasi kartun serial yang tepat.
- Yang memakai dan untuk siapa hasilnya: Saya dan penonton
- Yang biasanya saya berikan ke AI: Penjelasan , musik latar subtitle kata perkata, POV 9:16, dan grafis (1080 , 1920), contoh caption yang cocok.
- Hasil yang saya anggap bagus: 
  ---
  name: blender-modeling
  last_reviewed: 2026-09-06
  group: 3D assets
  description: >-
    Model, retopologise, UV unwrap and bake game-ready assets with correct scale, pivots and
    polycount. Use when creating 3D hard-surface meshes, low-poly props, or UV layouts.
  ---
  
  # blender-modeling
  
  ## Core Philosophy
  3D modeling for real-time video games is not creating unconstrained digital sculptures. A high-poly model with 4,000,000 polygons and 12 un-optimized material slots will crash a game engine. Real-time 3D art is the rigorous craft of geometric efficiency: sculpting high-fidelity details, retopologizing into clean low-poly game meshes, baking high-to-low normal maps with zero shading artifacts, establishing consistent texel density, and enforcing strict transform hygiene.
  
  ---
  
  ## 4-Step Game-Ready 3D Modeling Pipeline
  
  ### Step 1: High-Poly to Low-Poly Modeling & Retopology
  1. **High-Poly Sculpting / Hard-Surface**:
     - Model complete micro-details: bevels, screws, seams, welded joints, cloth folds.
  2. **Low-Poly Retopology Discipline**:
     - Silhouette is King: Allocate polygon budget to the **outer silhouette** where curved edges meet the sky/background. Flat surfaces require minimal geometry.
     - Clean Edge Loops: Quad-dominant topology along deformation joints; triangulate flat surfaces before export to prevent engine-specific triangulation warping.
     - Polycount Budgets:
       - Hero Character: 30k–60k triangles.
       - First-Person Weapon: 15k–30k triangles.
       - En
- Yang wajib selalu ada: Penjelasan , musik latar subtitle kata perkata, POV 9:16, dan grafis (1080 , 1920), contoh caption yang cocok, dan gaya 3d.
- Yang tidak boleh ada: Kata kata yang tidak baik, tokoh menembus benda
- Gaya bahasa hasil: santai

Cara kerjamu:
1. Sebelum menulis, tanyakan paling banyak 3 hal yang masih belum jelas dari data di atas, dalam satu pesan. Kalau semuanya sudah jelas, langsung ke langkah 2.
2. Tulis SKILL.md dengan bagian atas seperti ini:
   ---
   name: nama-skill (huruf kecil, angka, dan tanda hubung, paling panjang 64 karakter)
   description: apa yang dikerjakan skill ini dan kapan dipakai, termasuk kata-kata yang biasa saya ketik saat meminta pekerjaan ini
   ---
   Lalu isi dengan bagian: tujuan singkat, Langkah 1 kumpulkan data, Langkah 2 kerjakan, aturan yang tidak boleh dilanggar, format jawaban, dan pengecekan sebelum menyerahkan.
3. Masukkan aturan kejujuran: data yang tidak saya berikan ditandai [...], bukan dikarang. Termasuk angka, nama, tanggal, dan sumber.
4. Tulis petunjuknya dalam bahasa Indonesia yang sederhana, dan jelaskan alasan di balik aturan yang penting.
5. Setelah SKILL.md selesai, tunjukkan contoh singkat bagaimana skill ini menjawab satu permintaan yang realistis, lalu tanyakan apakah ada yang perlu diperbaiki.
6. Kalau kamu bisa membuat file, buatkan folder bernama sama dengan name berisi SKILL.md, lalu jadikan file .zip yang bisa saya download. Kalau tidak bisa, tampilkan isi SKILL.md lengkap dalam satu blok kode.
