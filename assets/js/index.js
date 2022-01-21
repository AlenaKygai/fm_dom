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

function counter(){
  for (let i = 1; i <= 10; i++) {
      (function(index) {
          setTimeout(function() { console.log(i) }, i * 1000);
      })(i);
  }
}
counter();

