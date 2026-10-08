# LaporAman — GitHub Pages

Prototype website HTML/CSS/JavaScript untuk platform laporan anonim lokal.

## Upload ke GitHub Pages
1. Buat repository baru di GitHub.
2. Upload `index.html`, `style.css`, dan `script.js`.
3. Buka **Settings → Pages**.
4. Pada Source pilih **Deploy from a branch**.
5. Pilih branch `main` dan folder `/root`.
6. Simpan dan tunggu GitHub menerbitkan website.

## Catatan penting
Prototype ini menyimpan data laporan di `localStorage` browser. Artinya data BELUM terkirim ke petugas dan tidak boleh digunakan untuk menerima laporan sensitif di dunia nyata.

Untuk notifikasi HP petugas diperlukan backend/database dan layanan push/notification. Jangan menyimpan IP, metadata foto, atau data identitas yang tidak diperlukan. Untuk penggunaan nyata, lakukan peninjauan keamanan, privasi, akses petugas, retensi data, dan mekanisme penanganan laporan darurat.

## Struktur
- `index.html` — halaman utama dan formulir
- `style.css` — desain responsif
- `script.js` — kode tiket, penyimpanan demo, dan cek status


## Dashboard Petugas (prototype)
Buka `dashboard.html`. Dashboard menampilkan laporan yang tersimpan di localStorage browser yang sama, lengkap dengan pencarian, filter, detail, dan perubahan status.

**Penting:** GitHub Pages hanya menyajikan file statis. Agar laporan dari HP/warga benar-benar terkumpul dan dashboard petugas bisa melihatnya dari perangkat berbeda, sambungkan `index.html` dan `dashboard.html` ke backend/database (misalnya Supabase/Firebase) dan tambahkan autentikasi petugas.
