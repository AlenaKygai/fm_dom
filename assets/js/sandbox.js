'use strict';


function createCounter(){
  let i=0; // замкнутая переменная 
  function counter(){
  i++;
  return i;
  }
}

const counter1 = createCounter();
const counter2 = createCounter();