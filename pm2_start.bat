rem batファイルの現在ディレクトリへ移動
cd /d %~dp0

rem プロセス開始
pm2 start process.json
