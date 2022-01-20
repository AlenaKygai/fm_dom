'use strict';

const state = [];
const form = document.getElementById('root-form');
const list = document.getElementById('list');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const { target: { textInput} } = e;
  const inputValue = textInput.value.trim();
  const validatorName = /^[A-Z][a-z]{2,17}$/;
  if(validatorName.test(inputValue) && !state.includes(inputValue)) {
    state.push(inputValue);
    form.reset();
    const li = createElement('li', {classNames:['item']}, document.createTextNode(inputValue));
    const btn = createElement('button', 
      {dataValue:inputValue , typeEvent: 'click', onClick:deleteHandler.bind(li)}, 
      document.createTextNode('X'));
    li.append(btn);
    list.append(li); 
    textInput.focus(); 
    }else{
      console.log('Wrong format data');
    }
})

/* 
добавить кнопку удаления для каждого пункта списка
по нажатию на кнопку удалять 
- пункт списка со страницы
-значение из массива
*/

function deleteHandler({target:{dataset:{value}}}){
  this.remove();
  state.splice(state.indexOf(value),1);
}

function createElement(type,{dataValue = '', classNames=[], typeEvent= '', onClick=null}, ...children){
  const elem = document.createElement(type);
  if(dataValue){
    elem.dataValue.value = dataValue;
  }
  if(classNames.length){
    elem.classList.add(...classNames);
  }
  elem.addEventListener(typeEvent, onClick); // for example
  elem.append(...children);
  return elem;
}