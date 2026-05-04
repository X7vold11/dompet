@echo off
echo ========================================
echo   Push DompetKu v2.0 ke GitHub
echo ========================================
echo.

set /p username="Masukkan username GitHub Anda: "

echo.
echo Menambahkan remote repository...
git remote add origin https://github.com/%username%/dompet.git

echo.
echo Pushing ke GitHub...
git push -u origin master

echo.
echo ========================================
echo   Push selesai!
echo ========================================
echo.
echo URL Repository: https://github.com/%username%/dompet
echo URL GitHub Pages: https://github.com/%username%/dompet/settings/pages
echo.
pause
