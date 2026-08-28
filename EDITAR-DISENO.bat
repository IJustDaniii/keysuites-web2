@echo off
title Personalizar diseno de KEY SUITES
cd /d "%~dp0"
where code >nul 2>nul
if errorlevel 1 (
  start "" notepad.exe "app\personalizar-diseno.css"
) else (
  start "" code "app\personalizar-diseno.css"
)
