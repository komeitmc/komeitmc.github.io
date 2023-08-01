//各エレメント取得
//BlueBox
const blueboxElement = document.getElementsByClassName("blueSquare")[0];
//ボタンエレメント
const btnElement = document.getElementsByClassName("btn")[0];
//入力ボックスエレメント
const txtboxElement = document.getElementById("inBox");
//ワニの書き込み先エレメント
const waniTxtElement = document.createElement('p');
//イベントの設定
btnElement.addEventListener('click',writeWani);
//ワニの書き込み
function writeWani() {
    const waniNum = parseInt(txtboxElement.value);
    let waniElemet = document.createElement('p');
    let waniChar = "";
    let i = 0; //入力がゼロの場合を考慮してWhileで実行
    while(i < waniNum) {
        waniChar += '🐊';
        i++;
    }
    waniTxtElement.textContent = waniChar;
    blueboxElement.appendChild(waniTxtElement);
}

//説明文を表示
const diplaySwichElement = document.getElementById("waniExplain");
diplaySwichElement.addEventListener('click',visibuleExplain);

function visibuleExplain(){
    console.log("vision");
    document.getElementById("wanipagebox").style.visibility="visible";
}
