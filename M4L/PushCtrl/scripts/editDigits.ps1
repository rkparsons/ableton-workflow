(Get-ChildItem -File) | Rename-Item -NewName {$_.Name -replace '(\d+)','#$1'}