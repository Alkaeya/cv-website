@echo off
REM Fix CV Website Setup - Run this to clear errors

echo.
echo ======================================
echo   CV Website Fix Script
echo ======================================
echo.

REM Navigate to project
cd /d "C:\Users\Alkaeya De la Pena\Documents\bootcamp\boiler-plate-nextjs"

echo [1/5] Checking for running node processes...
tasklist | findstr /I node >nul
if %ERRORLEVEL%==0 (
    echo Found running node processes - terminating...
    taskkill /F /IM node.exe >nul 2>&1
    timeout /t 2 >nul
)

echo [2/5] Clearing Next.js build cache...
if exist .next (
    rmdir /s /q .next
    echo ✓ Cleared .next folder
)

echo [3/5] Clearing npm cache...
call npm cache clean --force >nul 2>&1
echo ✓ Cleared npm cache

echo [4/5] Waiting 2 seconds...
timeout /t 2 >nul

echo [5/5] Starting dev server...
echo.
echo Starting Next.js dev server at http://localhost:3000
echo This will take about 30 seconds...
echo.
echo If you see any errors, please share them with me!
echo.

REM Start dev server
call npm run dev

pause
