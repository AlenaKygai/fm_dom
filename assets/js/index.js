'use strict';

const btns = document.querySelectorAll('button');

const changeColor = ({
  target:{
    dataset:{color},
    parentNode: parentRoot,
}})=>{
  parentRoot.style.backgroundColor = color;
}

for (const btn of btns) {
  btn.addEventListener('click', changeColor);
}
