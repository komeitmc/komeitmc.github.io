console.log("page3.js");
// ボタンとなるエレメント取得
const btnElement = document.getElementById("btnBox");
//表示するエレメント
const dispElements=[];
dispElements.push(document.getElementById("nextactionImg"));
dispElements.push(document.getElementById("nextactionStr"));

//イベント設定
btnElement.addEventListener('click',dispNext);

//表示
function dispNext() {
  console.log("visible",dispElements);
  for(let i=0 ; i<dispElements.length ; i++) {
    dispElements[i].style.visibility = "visible";
  }
}

