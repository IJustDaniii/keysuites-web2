@echo off
title Comprobar OKEY SUITES
cd /d "%~dp0"
echo Comprobando el codigo y creando la version de produccion...
echo.
call npm run lint
if errorlevel 1 goto error
call npm run build
if errorlevel 1 goto error
echo.
echo Todo correcto. La web esta preparada para publicarse.
pause
exit /b 0

:error
echo.
echo Se ha encontrado un problema. No subas el cambio hasta revisarlo.
pause
exit /b 1
