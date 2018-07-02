// requires

// lib
const libMani = require('./lib/mani.js');



// sleepのpromise化
// util.jsにでも作るべきだが、
function setTimeoutPromise(wait) {
    return new Promise(function(resolve, reject) {
        setTimeout(resolve, wait);
    });
}

// メイン
async function main() {
    // 初期化
    await libMani.init();
    // 無限ループする
    while(true) {
        // 全力でぶん回すとやばそうなんで、ループごとにちょっと止める
        await setTimeoutPromise(process.env.TIMEOUT || 1000);
        libMani.loop();
    }
}

// 実行
main().catch(function(err){
    // エラー表示して終了
    console.log(err.stack);
    process.exit(1);
});