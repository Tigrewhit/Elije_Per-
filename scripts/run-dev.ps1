<#
  scripts/run-dev.ps1
  Abre dos ventanas PowerShell: una para backend y otra para frontend.
  Uso: ejecutar desde la raíz del repo: `.	emplates\run-dev.ps1` o `.
un-dev.ps1`
  (Se instala dependencias si hacen falta)
#>

$root = Split-Path -Parent $MyInvocation.MyCommand.Definition
$backend = Join-Path $root 'backend'
$frontend = Join-Path $root 'frontend'

Write-Host "Starting backend in new PowerShell window..."
Start-Process powershell -ArgumentList "-NoExit","-Command","cd '$backend'; if(-not (Test-Path node_modules)) { npm install }; node src/index.js"

Start-Sleep -Seconds 1
Write-Host "Starting frontend in new PowerShell window..."
Start-Process powershell -ArgumentList "-NoExit","-Command","cd '$frontend'; if(-not (Test-Path node_modules)) { npm install }; npm run dev"

Write-Host "Started backend and frontend. Open http://localhost:5173 for the frontend." 
