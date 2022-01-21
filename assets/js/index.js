'use strict';

const btn = document.getElementById('btn');
btn.addEventListener('click', btnHandler);
function btnHandler(e){
  
}


const identificatore = setTimeout(()=>{
  console.log('Hi');
},100)

clearTimeout(identificatore);



/* 

функция которая выводит последовательно числа от 1 до 10 через 0,5 секунды 
*/

function counterFirsVariant(){
  for (let i = 1; i <= 10; i++) {
      (function(index) {
          setTimeout(function() { console.log(i) }, i * 1000);
      })(i);
  }
}
// counterFirsVariant();

function counterSecondVariant(i){
  setTimeout(()=>{
    console.log(i);
      if(i<10) {
          counterSecondVariant(++i);
      }
    },500)
}
// counterSecondVariant(1);


function counterThirdVariant(i){
  setTimeout(() => {
    console.log(i)
    if(i === 0) {
      counterThirdVariant(--i);
    }
  }, 500);
}

// counterThirdVariant(10);