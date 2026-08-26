@echo off
setlocal
cd /d "%~dp0"
powershell.exe -NoProfile -ExecutionPolicy Bypass -File "%~dp0scripts\subir-github.ps1"
if errorlevel 1 (
  echo.
  echo No se pudieron subir los cambios. Lee el mensaje anterior.
)
echo.
pause
