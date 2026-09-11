@echo off
echo ===================================================
echo Starting Siyaram Profile Enterprise Website...
echo ===================================================

cd /d "c:\Users\ved\Documents\projects\siyaram profile\frontend"
start "Siyaram Frontend (Next.js)" cmd /k "npm run dev"

cd /d "c:\Users\ved\Documents\projects\siyaram profile\backend"
start "Siyaram Backend (Django)" cmd /k "python manage.py runserver"

echo.
echo Website will open at: http://localhost:3000
echo Backend API at:       http://localhost:8000
echo ===================================================
pause
