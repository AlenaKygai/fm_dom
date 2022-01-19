'use strict';

const messageArray = [];

const form = document.getElementById('root-form');
const ul = document.getElementById('lists');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const { target: { textInput} } = e;

  const inputValue = textInput.value.trim();
  // const validator = /^[A-Z][a-z]{3,12} [A-Z][a-z]{2,17}$/;
  const validator = /^.*(\.jpg|\.png)$/;
  //добавлять значение инпута в массив, если оно не пустое
  //и соответствует строке типа Name Sname
  if(validator.test(inputValue)) {
      messageArray.push(inputValue);
      const li = createElement('li', { classNames:['item'] }, inputValue);
      ul.append(li);
      // после добавления - очищать форму
      form.reset();
      textInput.focus();
    }else{
      console.log('Wrong format data');
    }
})

function createElement(type,{classNames}, ...children){
  const elem = document.createElement(type);
  elem.classList.add(...classNames);
  elem.append(...children);
  return elem;
}