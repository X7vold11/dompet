# 🚀 Quick Start Guide - DompetKu

## Langkah Cepat (5 Menit)

### 1️⃣ Generate Icon PWA

Buka file `icon-generator.html` di browser:
```
Klik 2x pada file icon-generator.html
```

Atau gunakan tool online:
- **PWA Builder**: https://www.pwabuilder.com/imageGenerator
- **Favicon Generator**: https://realfavicongenerator.net/

Download dan simpan semua icon ke folder `icons/`

### 2️⃣ Test Lokal

Buka `index.html` di browser:
```
Klik 2x pada file index.html
```

Atau gunakan Live Server (jika ada):
```bash
# Jika punya Python
python -m http.server 8000

# Jika punya Node.js
npx serve

# Jika punya PHP
php -S localhost:8000
```

Buka: `http://localhost:8000`

### 3️⃣ Test Fitur

✅ Tambah pengeluaran
✅ Format Rupiah otomatis (ketik 50000 → jadi 50.000)
✅ Hapus pengeluaran
✅ Search & filter
✅ Export CSV
✅ Toggle dark mode
✅ Responsive (resize browser)

### 4️⃣ Deploy ke GitHub Pages

1. **Buat repo baru** di GitHub
2. **Upload semua file** (drag & drop)
3. **Settings → Pages**
4. **Source: main branch**
5. **Save**
6. **Tunggu 1-2 menit**
7. **Buka link**: `https://username.github.io/repo-name/`

### 5️⃣ Install sebagai PWA

**Di Desktop (Chrome/Edge):**
- Klik icon install di address bar
- Atau: Menu (⋮) → Install DompetKu

**Di Mobile (Android):**
- Menu (⋮) → Add to Home Screen

**Di iOS (Safari):**
- Tap Share → Add to Home Screen

## Troubleshooting Cepat

### Icon tidak muncul?
```
✓ Pastikan folder icons/ ada
✓ Pastikan semua file icon ada (8 file)
✓ Clear cache (Ctrl+Shift+R)
```

### Service Worker error?
```
✓ Harus diakses via HTTPS atau localhost
✓ GitHub Pages otomatis HTTPS ✓
```

### Data hilang?
```
✓ Jangan clear browser data
✓ Export CSV untuk backup
```

### PWA tidak bisa install?
```
✓ Pastikan manifest.json valid
✓ Pastikan semua icon tersedia
✓ Harus HTTPS (GitHub Pages ✓)
```

## File Structure

```
dompetku/
├── index.html              ← Halaman utama
├── style.css               ← Styling
├── script.js               ← Logic
├── manifest.json           ← PWA config
├── sw.js                   ← Service Worker
├── icon-generator.html     ← Tool generate icon
├── README.md               ← Dokumentasi lengkap
├── DEPLOYMENT.md           ← Panduan deploy detail
├── QUICKSTART.md           ← File ini
└── icons/                  ← Icon PWA (8 files)
    ├── icon-72.png
    ├── icon-96.png
    ├── icon-128.png
    ├── icon-144.png
    ├── icon-152.png
    ├── icon-192.png
    ├── icon-384.png
    └── icon-512.png
```

## Kustomisasi Cepat

### Ganti Warna
Edit `style.css` bagian `:root`:
```css
:root {
  --primary: #7C3AED;      /* Warna utama */
  --secondary: #EC4899;    /* Warna sekunder */
  --accent: #F59E0B;       /* Warna aksen */
}
```

### Tambah Kategori
Edit `index.html` bagian `<select id="expenseCategory">`:
```html
<option value="Olahraga">⚽ Olahraga</option>
```

Dan `script.js` bagian `getCategoryEmoji()`:
```javascript
'Olahraga': '⚽',
```

### Ganti Nama App
1. `index.html` → `<title>` dan `<h1>`
2. `manifest.json` → `name` dan `short_name`
3. `sw.js` → `CACHE_NAME`

## Tips & Tricks

💡 **Auto-format Rupiah**: Langsung ketik angka, otomatis terformat!

💡 **Keyboard Shortcuts**:
- `Tab` untuk navigasi form
- `Enter` untuk submit
- `Esc` untuk close modal

💡 **Export Regular**: Export CSV setiap minggu untuk backup

💡 **Dark Mode**: Otomatis tersimpan per device

💡 **Offline Mode**: Setelah install PWA, bisa dipakai tanpa internet!

## Next Steps

📖 Baca [README.md](README.md) untuk dokumentasi lengkap

🚀 Baca [DEPLOYMENT.md](DEPLOYMENT.md) untuk panduan deploy detail

💬 Ada masalah? Cek console browser (F12)

---

**Happy tracking! 💸**
