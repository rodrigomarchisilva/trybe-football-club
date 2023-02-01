@echo off

npx -y tsc

if %errorlevel% neq 0 (
  echo "Ocorreu um ero ao compilar o TypeScript, verifique seu código e tente novamente"
  exit /b 1
)

@REM build: tsc_eval.bat