'use strict';

const messageArray = [];

const form = document.getElementById('root-form');
const ul = document.getElementById('lists');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const { target: { textInput} } = e;

  const inputValue = textInput.value.trim();

  //добавлять значение инпута в массив, если оно не пустое
  if(inputValue) {
    messageArray.push(inputValue);
    const li = createElement('li', { classNames:['item'] }, inputValue);
    ul.append(li);
    // после добавления - очищать форму
    form.reset();
    textInput.focus();
  }
})

function createElement(type,{classNames}, ...children){
  const elem = document.createElement(type);
  elem.classList.add(...classNames);
  elem.append(...children);
  return elem;
}