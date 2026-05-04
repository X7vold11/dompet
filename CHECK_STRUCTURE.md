# ✅ Cek Struktur File - GitHub Pages

## 🎯 Struktur File yang BENAR

Buka repository Anda di GitHub dan pastikan struktur seperti ini:

```
your-repository/
│
├── 📄 index.html          ← HARUS ada di sini! (root)
├── 🎨 style.css
├── ⚙️ script.js
├── 📱 manifest.json
├── 🔧 sw.js
├── 📖 README.md
├── 📚 DEPLOYMENT.md
├── 🚀 QUICKSTART.md
├── ✨ START_HERE.md
├── 🔧 TROUBLESHOOTING_404.md
├── 🖼️ icon-generator.html
├── 🚫 .gitignore
├── 📄 .nojekyll           ← Opsional tapi recommended
│
└── 📁 icons/
    ├── 🖼️ icon-72.png
    ├── 🖼️ icon-96.png
    ├── 🖼️ icon-128.png
    ├── 🖼️ icon-144.png
    ├── 🖼️ icon-152.png
    ├── 🖼️ icon-192.png
    ├── 🖼️ icon-384.png
    └── 🖼️ icon-512.png
```

## ❌ Struktur yang SALAH

### Salah 1: index.html di Subfolder
```
your-repository/
└── 📁 dompetku/           ← SALAH!
    ├── index.html         ← Tidak boleh di subfolder
    ├── style.css
    └── ...
```

**Fix:** Pindahkan semua file ke root (keluar dari subfolder)

### Salah 2: Nama File Salah
```
your-repository/
├── Index.html             ← SALAH! (huruf besar)
├── INDEX.html             ← SALAH!
├── home.html              ← SALAH! (harus index.html)
└── main.html              ← SALAH!
```

**Fix:** Rename ke `index.html` (huruf kecil semua)

### Salah 3: Icon di Root
```
your-repository/
├── index.html
├── icon-72.png            ← SALAH! (harus di folder icons/)
├── icon-96.png            ← SALAH!
└── ...
```

**Fix:** Buat folder `icons/` dan pindahkan semua icon ke sana

## 🔍 Cara Cek di GitHub

### Step 1: Buka Repository
```
1. Login ke GitHub
2. Buka repository Anda
3. Lihat file list di halaman utama
```

### Step 2: Verifikasi File
```
✅ index.html terlihat langsung (tidak di subfolder)
✅ style.css ada
✅ script.js ada
✅ manifest.json ada
✅ sw.js ada
✅ Folder icons/ ada
```

### Step 3: Cek Folder Icons
```
1. Klik folder icons/
2. Pastikan ada 8 file:
   ✅ icon-72.png
   ✅ icon-96.png
   ✅ icon-128.png
   ✅ icon-144.png
   ✅ icon-152.png
   ✅ icon-192.png
   ✅ icon-384.png
   ✅ icon-512.png
```

## 🛠️ Cara Fix Struktur yang Salah

### Jika File di Subfolder:

**Via GitHub Web:**
```
1. Buka file yang salah (contoh: dompetku/index.html)
2. Klik icon pensil (Edit)
3. Di nama file, hapus "dompetku/" di depan
4. Jadi: index.html (tanpa folder)
5. Commit changes
6. Ulangi untuk semua file
```

**Via Git CLI:**
```bash
# Clone repository
git clone https://github.com/username/repo-name.git
cd repo-name

# Pindahkan file ke root
mv subfolder/* .

# Hapus subfolder kosong
rmdir subfolder

# Commit & push
git add .
git commit -m "Move files to root"
git push
```

### Jika Nama File Salah:

**Via GitHub Web:**
```
1. Klik file yang salah (contoh: Index.html)
2. Klik icon pensil (Edit)
3. Klik nama file di atas editor
4. Rename ke: index.html
5. Commit changes
```

## 📋 Checklist Lengkap

Sebelum deploy, cek semua ini:

```
FILE STRUCTURE:
□ index.html ada di root (bukan di subfolder)
□ style.css ada di root
□ script.js ada di root
□ manifest.json ada di root
□ sw.js ada di root
□ Folder icons/ ada
□ 8 file icon ada di folder icons/

FILE NAMES:
□ index.html (huruf kecil semua)
□ style.css (huruf kecil semua)
□ script.js (huruf kecil semua)
□ manifest.json (huruf kecil semua)
□ sw.js (huruf kecil semua)

ICON NAMES:
□ icon-72.png (bukan Icon-72.png atau icon72.png)
□ icon-96.png
□ icon-128.png
□ icon-144.png
□ icon-152.png
□ icon-192.png
□ icon-384.png
□ icon-512.png

GITHUB SETTINGS:
□ Repository Public (bukan Private)
□ Settings → Pages enabled
□ Branch: main (atau master)
□ Folder: / (root)
□ Status: "Your site is published"
```

## 🎯 Visual Comparison

### ✅ BENAR:
```
https://github.com/username/repo-name
│
├── index.html          ← Terlihat langsung!
├── style.css           ← Terlihat langsung!
├── script.js           ← Terlihat langsung!
└── icons/              ← Folder terlihat
    └── icon-72.png     ← Icon di dalam folder
```

### ❌ SALAH:
```
https://github.com/username/repo-name
│
└── dompetku/           ← Ada subfolder!
    ├── index.html      ← Tidak terlihat langsung
    ├── style.css
    └── ...
```

## 🔗 Test URL Structure

Setelah struktur benar, URL akan seperti ini:

```
✅ BENAR:
https://username.github.io/repo-name/
https://username.github.io/repo-name/index.html
https://username.github.io/repo-name/style.css
https://username.github.io/repo-name/icons/icon-192.png

❌ SALAH:
https://username.github.io/repo-name/dompetku/
https://username.github.io/repo-name/dompetku/index.html
```

## 🚀 After Fix

Setelah struktur benar:

```
1. Tunggu 2-3 menit (GitHub rebuild)
2. Clear cache browser (Ctrl+Shift+R)
3. Akses URL di incognito window
4. Seharusnya sudah work! ✅
```

## 📱 Screenshot Guide

Ambil screenshot ini untuk verifikasi:

```
1. Repository file list (halaman utama)
   → index.html harus terlihat

2. Settings → Pages
   → Status "Your site is published"
   → URL yang benar

3. Folder icons/
   → 8 file icon ada semua

4. Actions tab
   → Workflow "pages build and deployment"
   → Status: Success ✅
```

## 💡 Tips

1. **Gunakan .nojekyll**
   - Buat file `.nojekyll` (kosong) di root
   - Ini disable Jekyll processing
   - Bisa fix beberapa masalah

2. **Cek Case Sensitivity**
   - Linux/Mac: case-sensitive
   - Windows: tidak case-sensitive
   - Gunakan huruf kecil semua untuk aman

3. **Avoid Special Characters**
   - Jangan pakai spasi di nama file
   - Jangan pakai karakter khusus
   - Gunakan dash (-) atau underscore (_)

## 🆘 Masih Bingung?

Kirim screenshot:
1. Repository file list
2. Settings → Pages
3. Folder icons/

Dengan screenshot, lebih mudah diagnose masalahnya!

---

**Struktur file yang benar = 50% sukses deploy! 🚀**
