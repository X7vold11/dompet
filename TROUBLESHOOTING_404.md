# 🔧 Troubleshooting 404 Error - GitHub Pages

## ❌ Error yang Anda Alami:

```
404 File not found
The site configured at this address does not contain the requested file.
```

## 🔍 Penyebab Umum & Solusi

### 1️⃣ **GitHub Pages Belum Aktif / Masih Building**

**Gejala:**
- Baru saja upload file
- Langsung akses URL
- Dapat error 404

**Solusi:**
✅ **Tunggu 2-5 menit** setelah upload/enable GitHub Pages

**Cara Cek:**
1. Buka repository di GitHub
2. Klik **Settings** → **Pages**
3. Lihat status di bagian atas:
   ```
   ⏳ Your site is being built...  ← Masih proses
   ✅ Your site is live at...      ← Sudah siap
   ```

**Action:**
```bash
# Tunggu sampai muncul:
"✅ Your site is published at https://username.github.io/repo-name/"
```

---

### 2️⃣ **File index.html Tidak Ada di Root**

**Gejala:**
- Error 404 saat akses URL utama
- File ada tapi di folder lain

**Solusi:**
✅ Pastikan `index.html` ada di **root folder** (bukan di subfolder)

**Struktur yang BENAR:**
```
username.github.io/repo-name/
├── index.html          ← HARUS di sini!
├── style.css
├── script.js
├── manifest.json
├── sw.js
└── icons/
    └── icon-72.png
```

**Struktur yang SALAH:**
```
username.github.io/repo-name/
└── dompetku/           ← SALAH! Jangan pakai subfolder
    ├── index.html
    ├── style.css
    └── ...
```

**Cara Fix:**
1. Buka repository di GitHub
2. Pastikan `index.html` terlihat langsung di halaman utama
3. Jika ada di subfolder, pindahkan ke root

---

### 3️⃣ **Branch Salah**

**Gejala:**
- File sudah diupload
- Tapi GitHub Pages tidak menemukan

**Solusi:**
✅ Pastikan GitHub Pages menggunakan branch yang benar

**Cara Cek:**
1. Buka **Settings** → **Pages**
2. Lihat bagian **Source**:
   ```
   Branch: main    ← Harus sesuai dengan branch file Anda
   Folder: / (root)
   ```

**Cara Fix:**
1. Cek branch mana yang berisi file Anda:
   - Klik dropdown branch di GitHub
   - Lihat branch `main` atau `master`
2. Di Settings → Pages, pilih branch yang benar
3. Klik **Save**
4. Tunggu 2-3 menit

---

### 4️⃣ **Repository Private**

**Gejala:**
- Error 404 meskipun file ada
- GitHub Pages tidak bisa diakses publik

**Solusi:**
✅ Repository harus **Public** untuk GitHub Pages gratis

**Cara Cek:**
1. Buka repository
2. Lihat badge di atas: **Public** atau **Private**?

**Cara Fix (jika Private):**
1. Buka **Settings** (repository settings, bukan Pages)
2. Scroll ke bawah ke **Danger Zone**
3. Klik **Change visibility**
4. Pilih **Make public**
5. Konfirmasi

---

### 5️⃣ **URL Salah**

**Gejala:**
- Akses URL yang salah
- Typo di URL

**Solusi:**
✅ Pastikan URL yang benar

**Format URL GitHub Pages:**
```
https://username.github.io/repository-name/

Contoh:
https://johndoe.github.io/dompetku/
https://mariasmith.github.io/expense-tracker/
```

**Cara Cek URL yang Benar:**
1. Buka **Settings** → **Pages**
2. Lihat bagian atas:
   ```
   ✅ Your site is published at https://username.github.io/repo-name/
   ```
3. Copy URL tersebut dan paste di browser

---

### 6️⃣ **Nama File Salah (Case Sensitive)**

**Gejala:**
- File ada tapi error 404
- Nama file tidak match

**Solusi:**
✅ Nama file harus **persis** (case-sensitive di beberapa sistem)

**Contoh:**
```
✅ BENAR: index.html
❌ SALAH: Index.html
❌ SALAH: INDEX.html
❌ SALAH: index.HTML
```

**Cara Fix:**
1. Cek nama file di repository
2. Pastikan semua huruf kecil: `index.html`
3. Rename jika perlu

---

### 7️⃣ **Cache Browser**

**Gejala:**
- Sudah fix tapi masih error 404
- Browser masih load halaman lama

**Solusi:**
✅ Clear cache browser

**Cara Clear Cache:**

**Chrome/Edge:**
```
Ctrl + Shift + Delete
→ Pilih "Cached images and files"
→ Clear data

Atau:
Ctrl + Shift + R (hard refresh)
```

**Firefox:**
```
Ctrl + Shift + Delete
→ Pilih "Cache"
→ Clear Now

Atau:
Ctrl + F5 (hard refresh)
```

**Safari:**
```
Cmd + Option + E (clear cache)
Cmd + R (refresh)
```

---

## 🚀 **LANGKAH-LANGKAH FIX (Step by Step)**

### **Step 1: Verifikasi File Structure**

Buka repository di GitHub dan pastikan struktur seperti ini:

```
✅ Struktur yang BENAR:
your-repo/
├── index.html          ← Ada di root!
├── style.css
├── script.js
├── manifest.json
├── sw.js
├── README.md
└── icons/
    ├── icon-72.png
    ├── icon-96.png
    └── ...
```

**Cara Cek:**
1. Buka repository di GitHub
2. Lihat file list di halaman utama
3. `index.html` harus terlihat langsung

---

### **Step 2: Cek GitHub Pages Settings**

1. Buka repository
2. Klik **Settings** (tab paling kanan)
3. Scroll atau klik **Pages** di sidebar kiri
4. Pastikan:
   ```
   Source:
   ✅ Branch: main (atau master)
   ✅ Folder: / (root)
   ✅ Save button sudah diklik
   ```

---

### **Step 3: Tunggu Build Process**

1. Di halaman Settings → Pages
2. Lihat bagian atas:
   ```
   ⏳ Your site is being built from the main branch.
   ```
3. **Tunggu 2-5 menit**
4. Refresh halaman Settings → Pages
5. Sampai muncul:
   ```
   ✅ Your site is published at https://username.github.io/repo-name/
   ```

---

### **Step 4: Test URL**

1. Copy URL dari Settings → Pages
2. Paste di **new incognito/private window**
3. Jika masih 404, tunggu 2 menit lagi
4. Refresh (Ctrl + Shift + R)

---

### **Step 5: Cek Actions (Build Log)**

1. Buka tab **Actions** di repository
2. Lihat workflow "pages build and deployment"
3. Cek status:
   ```
   ✅ Success  ← Bagus!
   ❌ Failed   ← Ada masalah
   ```
4. Jika failed, klik untuk lihat error log

---

## 🔍 **Diagnostic Checklist**

Cek satu per satu:

```
□ Repository sudah Public?
□ File index.html ada di root folder?
□ GitHub Pages sudah enabled di Settings → Pages?
□ Branch yang dipilih benar (main/master)?
□ Folder dipilih / (root)?
□ Sudah tunggu 2-5 menit setelah enable?
□ URL yang diakses benar?
□ Sudah clear cache browser?
□ Sudah coba incognito/private window?
□ Actions workflow success (tidak failed)?
```

---

## 💡 **Solusi Cepat (Quick Fix)**

### **Jika Baru Upload:**

```bash
1. Tunggu 5 menit
2. Clear cache (Ctrl + Shift + R)
3. Coba lagi
```

### **Jika Sudah Lama:**

```bash
1. Settings → Pages
2. Source: None (disable)
3. Save
4. Tunggu 1 menit
5. Source: main branch, / (root) (enable lagi)
6. Save
7. Tunggu 3 menit
8. Coba lagi
```

---

## 🆘 **Masih Error? Coba Ini:**

### **Option 1: Re-deploy**

1. Buat perubahan kecil di `index.html`:
   ```html
   <!-- Tambah comment di akhir file -->
   <!-- Updated: 2026-05-03 -->
   ```
2. Commit & push
3. Tunggu 2-3 menit
4. Coba lagi

### **Option 2: Buat File .nojekyll**

GitHub Pages menggunakan Jekyll by default. Disable dengan:

1. Buat file baru: `.nojekyll` (tanpa extension)
2. File kosong (no content)
3. Upload ke root folder
4. Commit
5. Tunggu 2-3 menit

**Via GitHub Web:**
```
1. Klik "Add file" → "Create new file"
2. Nama file: .nojekyll
3. Biarkan kosong
4. Commit
```

### **Option 3: Cek dengan GitHub CLI**

Jika punya GitHub CLI:

```bash
# Cek status pages
gh repo view --web

# Atau cek langsung
curl -I https://username.github.io/repo-name/
```

---

## 📱 **Test di Multiple Browser**

Coba buka di:

```
✓ Chrome (incognito)
✓ Firefox (private)
✓ Edge (InPrivate)
✓ Safari (private)
✓ Mobile browser
```

Jika work di satu browser tapi tidak di lain, itu masalah cache.

---

## 🎯 **Contoh URL yang Benar**

Ganti dengan username dan repo Anda:

```
Format:
https://[username].github.io/[repository-name]/

Contoh Real:
https://johndoe.github.io/dompetku/
https://mariasmith.github.io/expense-tracker/
https://coding123.github.io/my-pwa-app/

BUKAN:
https://github.com/username/repo-name/  ← Ini URL repository
https://username.github.io/              ← Kurang nama repo
```

---

## 📊 **Timeline Normal Deployment**

```
0:00  - Upload file / Enable Pages
0:30  - GitHub mulai build
1:00  - Build process
2:00  - Deploy ke server
3:00  - ✅ Site live!
5:00  - Fully propagated

Total: 2-5 menit normal
```

Jika lebih dari 10 menit, ada masalah.

---

## 🔗 **Useful Links**

- **GitHub Pages Docs**: https://docs.github.com/en/pages
- **GitHub Status**: https://www.githubstatus.com/
- **Test URL**: https://www.isitdownrightnow.com/

---

## 📝 **Reporting Issue**

Jika masih error setelah semua dicoba, berikan info:

```
1. URL repository: https://github.com/username/repo-name
2. URL yang diakses: https://username.github.io/repo-name/
3. Screenshot Settings → Pages
4. Screenshot file structure
5. Screenshot Actions tab (build log)
6. Browser & OS yang digunakan
```

---

## ✅ **Success Indicators**

Anda tahu berhasil jika:

```
✅ Settings → Pages menunjukkan "Your site is published"
✅ Actions tab menunjukkan workflow success
✅ URL bisa diakses (tidak 404)
✅ index.html terload dengan benar
✅ Splash screen muncul
✅ Aplikasi berfungsi normal
```

---

## 🎉 **After Success**

Setelah berhasil:

1. ✅ Bookmark URL
2. ✅ Test semua fitur
3. ✅ Test di mobile
4. ✅ Install sebagai PWA
5. ✅ Share dengan teman!

---

**Ikuti langkah-langkah di atas secara berurutan. 99% masalah 404 akan solved! 🚀**

**Masih ada masalah? Berikan screenshot Settings → Pages dan file structure!**
