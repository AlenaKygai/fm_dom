'use strict';

const btns = document.querySelectorAll('button');

const changeColor = ({
  target: {
    dataset: { color },
    parentNode: parentRoot,
  }
}) => {
  parentRoot.style.backgroundColor = color;
}
const handler = ({currentTarget})=>{
  console.log(currentTarget , 'dipping');
}

for (const btn of btns) {
  btn.addEventListener('click', changeColor);
}

document.getElementById('root').addEventListener('click', handler, {capture:true, once:true});
document.body.addEventListener('click', handler, true);
document.addEventListener('click', handler, true);
window.addEventListener('click', handler, true);
