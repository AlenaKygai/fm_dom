'use strict';

const btns = document.querySelectorAll('button');

// console.log(btns[0].getAttribute('data-path'));

// for (const btn of btns) {
//   btn.addEventListener('click', ({target})=>{
//     // console.log(target.getAttribute('data-path'));
//     console.log(target.dataset.path);
//   })
// }
const btnHandler = ({target:{dataset:{path}}})=>{ console.log(path);}

for (const btn of btns) {
  btn.addEventListener('click',btnHandler);
}