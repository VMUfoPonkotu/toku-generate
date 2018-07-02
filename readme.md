# 必要環境
node.js v8.11.3(async-await使えるなら何でも)

# 環境設定
## windows環境
[Node.js公式サイト](https://nodejs.org/ja/)より最新LTS版のインストーラーを取得し、インストール。  
インストール後、コンソールから npm install -g pm2 コマンドを実行、nodeのプロセスマネージャーをインストール。  
## linux環境
任意の方法でnodeのインストールを実行する。nvmとかnodebrewとか使おう。  
インストール後、コンソールから npm install -g pm2 コマンドを実行、nodeのプロセスマネージャーをインストール。  

# 実行方法
toku-miningディレクトリ以下で pm2 start process.json コマンドを実行。  
(windows用にstart.batを用意してるので、それ実行しても大丈夫です。ちゃんと中身見てから実行してね)

# 終了方法
pm2 kill allでプロセス終了。
