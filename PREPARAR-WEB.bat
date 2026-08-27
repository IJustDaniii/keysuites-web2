@echo off
title Preparar KEY SUITES
cd /d "%~dp0"
echo Instalando todo lo necesario para editar KEY SUITES...
echo.
call npm install
if errorlevel 1 (
  echo.
  echo No se pudo completar la instalacion. Comprueba que Node.js esta instalado.
  pause
  exit /b 1
)
echo.
echo Preparacion terminada. Ya puedes abrir y editar la web en VS Code.
pause
