//code の表示を切り替える
const idArray = ["code1","code2","code3","code4",];
const btnElement = document.getElementsByClassName("box")[0];
//イベント設定
btnElement.addEventListener('click',codeDisplay);

let displayNow = -1;
let codebox = document.getElementById(idArray[0]);
// codebox.style.display = "block";
function codeDisplay() {
  console.log("displayNow",displayNow);
  if (displayNow === -1){
    displayNow ++ ;
    document.getElementById(idArray[displayNow]).style.display = "block";
  } else if(displayNow === 3){
    document.getElementById(idArray[displayNow]).style.display = "none";
    displayNow = -1;    
  } else {
    document.getElementById(idArray[displayNow]).style.display = "none";
    displayNow ++ ;
    document.getElementById(idArray[displayNow]).style.display = "block";

  }
}