@echo off
set NODE_EXE=C:\Program Files\nodejs\node.exe
set NPM_CLI=C:\Program Files\nodejs\node_modules\npm\bin\npm-cli.js

echo Installing dependencies...
"%NODE_EXE%" "%NPM_CLI%" install

echo Starting Vite dev server on port 5173...
"%NODE_EXE%" "%NPM_CLI%" run dev -- --port 5173 --host
