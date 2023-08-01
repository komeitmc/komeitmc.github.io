//
// const elementLeftBox=
// const elementMiddleBox=document.getElementsByClassName("inboxMiddle")[0];
// const elementRightBox=document.getElementsByClassName("inboxRight")[0];
const elementArray=[document.getElementsByClassName("inboxLeft")[0],
                    document.getElementsByClassName("inboxMiddle")[0],
                    document.getElementsByClassName("inboxRight")[0],]
const btnElement = document.getElementsByClassName("box")[0];
//イベント設定
btnElement.addEventListener('click',str2black);
//イベント設定
// elementLeftBox.addEventListener('click',str2black(elementLeftBox));
// elementMiddleBox.addEventListener('click',str2black(elementMiddleBox));
// elementRightBox.addEventListener('click',str2black(elementRightBox));
let i = 0;

function str2black(){
  console.log(i);
  elementArray[i].style.color = "black";
  if(i === 2){
    for(let j=0 ; j<document.getElementsByClassName("fig").length ; j++){
      console.log("i=2");
      document.getElementsByClassName("fig")[j].style.visibility = "visible";
    }
  }
  i++;
}
