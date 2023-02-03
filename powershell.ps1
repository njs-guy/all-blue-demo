# Use this to test terminal colors in Powershell.
# Run with .\powershell.ps1 from root

# Stolen from Stack Overflow
# https://stackoverflow.com/a/41954792

$colors = [enum]::GetValues([System.ConsoleColor])
Foreach ($bgcolor in $colors){
    Foreach ($fgcolor in $colors) { Write-Host "$fgcolor|"  -ForegroundColor $fgcolor -BackgroundColor $bgcolor -NoNewLine }
    Write-Host " on $bgcolor"
}
