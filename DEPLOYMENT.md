# 🚀 Panduan Deployment DompetKu

## Persiapan Sebelum Deploy

### 1. Buat Icon PWA

Sebelum deploy, Anda **HARUS** membuat icon PWA. Ikuti langkah berikut:

#### Opsi A: Gunakan PWA Builder (Recommended)
1. Kunjungi https://www.pwabuilder.com/imageGenerator
2. Upload gambar 512x512px (bisa logo atau desain custom)
3. Klik "Generate"
4. Download ZIP file
5. Extract dan copy semua file PNG ke folder `icons/`

#### Opsi B: Gunakan Canva (Gratis)
1. Buka Canva.com
2. Buat desain 512x512px
3. Gunakan template atau buat dari nol:
   - Background: Gradient ungu (#7C3AED) ke pink (#EC4899)
   - Tambahkan emoji 💸 atau text "DompetKu"
   - Style: Modern, rounded corners
4. Download sebagai PNG
5. Gunakan tool resize online untuk buat berbagai ukuran:
   - https://www.iloveimg.com/resize-image
   - Buat: 72, 96, 128, 144, 152, 192, 384, 512px
6. Rename sesuai format: `icon-72.png`, `icon-96.png`, dst
7. Simpan semua di folder `icons/`

#### Opsi C: Gunakan Placeholder Sementara
Untuk testing cepat, download placeholder dari:
```
https://via.placeholder.com/72x72/7C3AED/FFFFFF?text=DK
https://via.placeholder.com/96x96/7C3AED/FFFFFF?text=DK
https://via.placeholder.com/128x128/7C3AED/FFFFFF?text=DK
https://via.placeholder.com/144x144/7C3AED/FFFFFF?text=DK
https://via.placeholder.com/152x152/7C3AED/FFFFFF?text=DK
https://via.placeholder.com/192x192/7C3AED/FFFFFF?text=DK
https://via.placeholder.com/384x384/7C3AED/FFFFFF?text=DK
https://via.placeholder.com/512x512/7C3AED/FFFFFF?text=DK
```

### 2. Verifikasi File

Pastikan struktur folder seperti ini:
```
dompetku/
├── index.html
├── style.css
├── script.js
├── manifest.json
├── sw.js
├── README.md
├── DEPLOYMENT.md
└── icons/
    ├── icon-72.png
    ├── icon-96.png
    ├── icon-128.png
    ├── icon-144.png
    ├── icon-152.png
    ├── icon-192.png
    ├── icon-384.png
    └── icon-512.png
```

## Deploy ke GitHub Pages

### Langkah 1: Buat Repository

1. Login ke GitHub
2. Klik tombol "+" → "New repository"
3. Isi:
   - Repository name: `dompetku` (atau nama lain)
   - Description: "Expense tracker PWA untuk mahasiswa"
   - Public
   - ✅ Add a README file (skip, kita sudah punya)
4. Klik "Create repository"

### Langkah 2: Upload File

#### Via Web (Mudah)
1. Di halaman repository, klik "Add file" → "Upload files"
2. Drag & drop semua file dan folder
3. Commit message: "Initial commit - DompetKu PWA"
4. Klik "Commit changes"

#### Via Git CLI (Advanced)
```bash
# Di folder project
git init
git add .
git commit -m "Initial commit - DompetKu PWA"
git branch -M main
git remote add origin https://github.com/username/dompetku.git
git push -u origin main
```

### Langkah 3: Aktifkan GitHub Pages

1. Di repository, klik **Settings**
2. Scroll ke bagian **Pages** (sidebar kiri)
3. Di "Source":
   - Branch: `main`
   - Folder: `/ (root)`
4. Klik **Save**
5. Tunggu 1-2 menit
6. Refresh halaman, akan muncul link: `https://username.github.io/dompetku/`

### Langkah 4: Testing

1. Buka link GitHub Pages
2. Test semua fitur:
   - ✅ Tambah pengeluaran
   - ✅ Format Rupiah otomatis
   - ✅ Hapus pengeluaran
   - ✅ Search & filter
   - ✅ Export CSV
   - ✅ Dark mode
   - ✅ Responsive (buka di mobile)

3. Test PWA:
   - Di Chrome: Klik icon install di address bar
   - Di mobile: "Add to Home Screen"
   - Test offline: Matikan internet, buka app

## Deploy ke Platform Lain

### Netlify (Alternative)

1. Kunjungi https://netlify.com
2. Drag & drop folder project
3. Site akan live dalam 30 detik
4. Custom domain gratis: `random-name.netlify.app`

### Vercel (Alternative)

1. Kunjungi https://vercel.com
2. Import Git repository
3. Deploy otomatis
4. Custom domain gratis: `project-name.vercel.app`

### Cloudflare Pages (Alternative)

1. Kunjungi https://pages.cloudflare.com
2. Connect Git repository
3. Deploy otomatis
4. CDN global gratis

## Konfigurasi Custom Domain (Opsional)

Jika punya domain sendiri (contoh: `dompetku.com`):

### Di GitHub Pages:
1. Settings → Pages → Custom domain
2. Masukkan domain: `dompetku.com`
3. Save

### Di DNS Provider:
Tambahkan record:
```
Type: CNAME
Name: www
Value: username.github.io
```

## Update Aplikasi

Setelah deploy, untuk update:

1. Edit file di repository
2. Commit changes
3. GitHub Pages akan auto-deploy (1-2 menit)

Atau via Git:
```bash
git add .
git commit -m "Update: deskripsi perubahan"
git push
```

## Troubleshooting

### Icon tidak muncul
- Pastikan semua file icon ada di folder `icons/`
- Cek nama file sesuai: `icon-72.png`, `icon-96.png`, dst
- Clear cache browser (Ctrl+Shift+R)

### Service Worker error
- Pastikan `sw.js` ada di root folder
- Cek console browser untuk error
- GitHub Pages harus HTTPS (otomatis)

### CSS tidak load
- Cek path file di `index.html`
- Pastikan `style.css` di root folder
- Clear cache browser

### PWA tidak bisa diinstall
- Pastikan `manifest.json` valid
- Cek semua icon tersedia
- Harus diakses via HTTPS
- Cek console untuk error

### Data hilang
- LocalStorage bersifat per-domain
- Jangan clear browser data
- Export CSV secara berkala untuk backup

## Monitoring & Analytics (Opsional)

Tambahkan Google Analytics:

1. Buat property di https://analytics.google.com
2. Copy tracking code
3. Paste di `index.html` sebelum `</head>`

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

## Checklist Pre-Launch

- [ ] Semua icon PWA sudah dibuat dan diupload
- [ ] Test di Chrome, Firefox, Safari
- [ ] Test di mobile (Android & iOS)
- [ ] Test offline mode
- [ ] Test semua fitur (add, delete, search, export)
- [ ] Ganti placeholder text jika ada
- [ ] Update README dengan link live demo
- [ ] Test PWA install
- [ ] Cek console untuk error
- [ ] Test export CSV

## Support

Jika ada masalah:
1. Cek console browser (F12)
2. Cek GitHub Pages status
3. Cek file structure
4. Clear cache dan coba lagi

---

**Selamat! DompetKu siap digunakan! 🎉**
