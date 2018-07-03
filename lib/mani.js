// Express
const fs = require('fs');

// 回転数カウンタ
// 現在はオンメモリに保持
let maniLoopCounter = 0;

// 経文配列を保持する変数
let chantArray = false;


// ファイル読み込み関数
function readFilePromise(filePath) {
    return new Promise(function(resolve, reject) {
        fs.readFile(path = filePath, {'encoding': 'utf8'}, function(err, data) {
            if (err) {
                return reject(err);
            }
            return resolve(data);
        });
    });
}


// 初期化
async function init() {
    // 経文文字列読み込み
    let result = await readFilePromise(__dirname + '/chant.txt');
    result = result.replace(/\r?\n/g,'');
    // 1文字ずつの配列に分割し、変数に保持する
    chantArray = result.split('');
}


// マニ車を回す
function loop() {
    // 経文ファイル未ロード時はキャンセル
    if (!chantArray) {
        console.log('no load chant file!');
        return false;
    }
    // 1文字キープする読み上げ変数
    let unknownChanterX = '';
    // お経を一周ループ
    for (let thisChant of chantArray) {
        unknownChanterX = thisChant;
    }
    // ループ終わったらカウンタを加算
    maniLoopCounter++;
}

// 現在カウント取得
function getCount() {
    return maniLoopCounter;
}

// 本ファイルの外部公開関数をまとめる
module.exports = {
    'init': init,
    'loop': loop,
    'getCount': getCount,
};