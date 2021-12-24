'use strict';


function createCounter(initial=0){
  let i=initial; // замкнутая переменная 
  return function counter(){
    return i++;
  }
}

const counter1 = createCounter();
console.log(counter1());
const counter2 = createCounter();