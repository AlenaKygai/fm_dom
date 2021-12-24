'use strict';


// function createCounter(initial=0){
//   let i=initial; // замкнутая переменная 
//   return {
//     increment(){
//       return ++i;
//     },
//     decrement(){
//       return --i;
//     }
//   }
// }

// const counter1 = createCounter(10);
// console.log(counter1.decrement());
// console.log(counter1.increment());
// const counter2 = createCounter();


const createAdder = (n) => (m) => (n += m);

const adder = createAdder(10);
console.log(adder(4));
console.log(adder(3));
console.log(adder(10));