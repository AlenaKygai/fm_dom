'use strict';

// function logMessage(){
//   console.log('Hi!');
// }
// const [button] = document.getElementsByTagName('button');
// button.addEventListener('click',logMessage);


// const h1 = document.getElementById('head');
// const h1 = document.querySelector('#head');
// const h1 = document.querySelector('h1+h1');

// const lis = document.getElementsByTagName('li');
// const lis = [...document.getElementsByTagName('li')];

// const lis = document.getElementsByClassName('item');
// const lis = document.querySelectorAll('#nav>li');

const img = document.querySelector('article+article>img');
const [,imgWww] = document.images;
const lis = document.querySelector('ul');
const lis2 = document.getElementsByTagName('ul');
const ps = document.querySelectorAll('main>article>p');
const ps2 = document.querySelectorAll('p:not(.text)');