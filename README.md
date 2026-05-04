# 💸 DompetKu - Expense Tracker PWA

**DompetKu** adalah Progressive Web App (PWA) untuk mencatat pengeluaran, dirancang khusus untuk mahasiswa. Aplikasi ini dibangun dengan HTML5, CSS3, dan Vanilla JavaScript tanpa framework eksternal.

## ✨ Fitur Utama

- 📝 **Input Pengeluaran** - Tambah pengeluaran dengan nama, nominal (format Rupiah otomatis), kategori, tanggal, dan catatan
- 💰 **Ringkasan Keuangan** - Lihat total pengeluaran, pengeluaran hari ini, dan kategori terbanyak
- 📋 **Riwayat Lengkap** - Daftar pengeluaran dengan animasi smooth dan fitur hapus
- 🔍 **Pencarian & Filter** - Cari dan filter pengeluaran berdasarkan kategori
- 📥 **Export CSV** - Ekspor data ke file CSV untuk analisis lebih lanjut
- 🌙 **Dark Mode** - Toggle tema terang/gelap
- 💾 **LocalStorage** - Data tersimpan otomatis di browser
- 📱 **Responsive** - Tampilan optimal di mobile dan desktop
- 🚀 **PWA Ready** - Install sebagai aplikasi native dengan offline support

## 🎨 Desain

- **Style**: Modern Glassmorphism dengan efek blur dan transparansi
- **Animasi**: Smooth transitions pada semua interaksi
- **Warna**: Gradient ungu-pink dengan aksen cerah
- **Layout**: Mobile-first responsive design

## 📦 Struktur File

```
dompetku/
├── index.html          # Halaman utama
├── style.css           # Styling dengan glassmorphism
├── script.js           # Logic aplikasi
├── manifest.json       # PWA manifest
├── sw.js              # Service Worker untuk offline
├── icons/             # Icon PWA (perlu dibuat)
│   ├── icon-72.png
│   ├── icon-96.png
│   ├── icon-128.png
│   ├── icon-144.png
│   ├── icon-152.png
│   ├── icon-192.png
│   ├── icon-384.png
│   └── icon-512.png
└── README.md          # Dokumentasi
```

## 🚀 Cara Deploy ke GitHub Pages

1. **Buat Repository Baru** di GitHub
2. **Upload semua file** ke repository
3. **Buat folder `icons`** dan tambahkan icon PWA (gunakan generator online seperti [PWA Asset Generator](https://www.pwabuilder.com/imageGenerator))
4. **Aktifkan GitHub Pages**:
   - Buka Settings → Pages
   - Source: Deploy from a branch
   - Branch: main / root
   - Save
5. **Akses aplikasi** di `https://username.github.io/repository-name/`

## 🎯 Cara Menggunakan

1. **Tambah Pengeluaran**
   - Isi nama pengeluaran (contoh: "Makan siang")
   - Masukkan nominal (otomatis terformat dengan titik pemisah ribuan)
   - Pilih kategori
   - Pilih tanggal
   - Tambahkan catatan (opsional)
   - Klik "Simpan Pengeluaran"

2. **Lihat Riwayat**
   - Scroll ke bawah untuk melihat semua pengeluaran
   - Gunakan search bar untuk mencari
   - Klik chip kategori untuk filter
   - Klik tombol "Hapus" untuk menghapus item

3. **Export Data**
   - Klik tombol "Export CSV" di header
   - File CSV akan terdownload otomatis

4. **Install sebagai App**
   - Di Chrome/Edge: Klik icon install di address bar
   - Di Safari iOS: Tap Share → Add to Home Screen

## 🛠️ Teknologi

- **HTML5** - Struktur semantik
- **CSS3** - Glassmorphism, animations, responsive
- **Vanilla JavaScript** - Logic tanpa framework
- **LocalStorage API** - Penyimpanan data
- **Service Worker** - Offline support
- **Web App Manifest** - PWA configuration

## 📱 Browser Support

- ✅ Chrome/Edge (Desktop & Mobile)
- ✅ Firefox (Desktop & Mobile)
- ✅ Safari (Desktop & iOS)
- ✅ Opera

## 🎨 Membuat Icon PWA

Gunakan salah satu tool berikut untuk generate icon:

1. **PWA Builder** - https://www.pwabuilder.com/imageGenerator
2. **RealFaviconGenerator** - https://realfavicongenerator.net/
3. **Favicon.io** - https://favicon.io/

Upload logo/icon 512x512px, lalu download semua ukuran yang dibutuhkan dan simpan di folder `icons/`.

## 📝 Kategori Pengeluaran

- 🍜 Makanan
- 🚌 Transportasi
- 📚 Tugas / Kuliah
- 🎮 Hiburan
- 💊 Kesehatan
- 📦 Lainnya

## 🔒 Privacy

Semua data disimpan secara lokal di browser menggunakan LocalStorage. Tidak ada data yang dikirim ke server eksternal.

## 📄 License

MIT License - Bebas digunakan untuk keperluan pribadi dan komersial.

## 👨‍💻 Developer

Dibuat dengan ❤️ untuk mahasiswa Indonesia

---

**Selamat mencatat pengeluaran! 💸**
