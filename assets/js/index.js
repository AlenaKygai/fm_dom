'use strict';

const [openBtn, closeBtn] = document.querySelectorAll('button');
/* поменять местами содержимое двух кнопок по наведения*/
// const switchInnerText = (e) =>{
//  const currentText = e.target.innerText;
//  if(currentText === closeBtn.innerText){
//   closeBtn.innerText = openBtn.innerText; 
//   openBtn.innerText = currentText;
//  }else{
//    openBtn.innerText = closeBtn.innerText;
//    closeBtn.innerText = currentText;
//  }
// }
const switchInnerText = ({target}) => {
  const openElem = target===closeBtn ? openBtn : closeBtn;
  const closeElem = target===closeBtn ? closeBtn : openBtn;

  const buffer = openElem.textContent; 
  openElem.textContent = closeElem.textContent;
  closeElem.textContent = buffer;

  closeElem.removeEventListener('mouseenter',switchInnerText);
  openElem.addEventListener('mouseenter',switchInnerText);
}

const clickHandler = ({target}) =>{
  console.log(target);
}

// openBtn.addEventListener('mouseenter',switchInnerText);
closeBtn.addEventListener('mouseenter',switchInnerText);

openBtn.addEventListener('click', clickHandler);
closeBtn.addEventListener('click', clickHandler);