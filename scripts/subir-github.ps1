$ErrorActionPreference = 'Stop'

$projectDirectory = (Resolve-Path -LiteralPath (Join-Path $PSScriptRoot '..')).Path
Set-Location -LiteralPath $projectDirectory

if (-not (Test-Path -LiteralPath (Join-Path $projectDirectory '.git'))) {
  throw 'Esta carpeta no es un repositorio clonado. Clónalo una vez con GitHub Desktop y ejecuta este archivo dentro de esa carpeta.'
}

Write-Host 'Sincronizando primero con GitHub...' -ForegroundColor Cyan
git pull --rebase --autostash
if ($LASTEXITCODE -ne 0) {
  throw 'No se pudo descargar la versión más reciente. Abre GitHub Desktop y revisa si solicita iniciar sesión.'
}

$changes = @(git status --porcelain)
if ($LASTEXITCODE -ne 0) { throw 'Git no pudo leer el estado del proyecto.' }

if ($changes.Count -eq 0) {
  Write-Host 'No hay cambios nuevos para subir.' -ForegroundColor Yellow
  exit 0
}

Write-Host 'Archivos modificados:' -ForegroundColor Cyan
git status --short

Write-Host ''
Write-Host 'Comprobando que la web puede publicarse...' -ForegroundColor Cyan
npm run lint
if ($LASTEXITCODE -ne 0) { throw 'La comprobación del código encontró un problema. No se ha subido nada.' }
npm run build
if ($LASTEXITCODE -ne 0) { throw 'La compilación encontró un problema. No se ha subido nada.' }

$message = Read-Host 'Describe el cambio (por ejemplo: Actualiza El Pino)'
if ([string]::IsNullOrWhiteSpace($message)) {
  $message = 'Actualiza contenido de KEY SUITES'
}

git add --all
if ($LASTEXITCODE -ne 0) { throw 'No se pudieron preparar los cambios.' }

git diff --cached --quiet
if ($LASTEXITCODE -eq 0) {
  Write-Host 'No hay cambios preparados para guardar.' -ForegroundColor Yellow
  exit 0
}

git commit -m $message
if ($LASTEXITCODE -ne 0) { throw 'No se pudo crear el commit.' }

git push
if ($LASTEXITCODE -ne 0) { throw 'No se pudo enviar el commit. Abre GitHub Desktop para revisar la conexión.' }

Write-Host 'Cambios enviados. Cloudflare iniciará una nueva publicación automáticamente.' -ForegroundColor Green
