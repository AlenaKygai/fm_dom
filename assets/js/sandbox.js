'use strict';

const pattern1 = new RegExp('\\b\\w{4}\\b','gi');
const pattern2 = /\b\w{4}\b/gi;

if(pattern2.test('qweqqasasas 12asasas33 @#$')){
  console.log(true);
}else{
  console.log(false);
}

const str='All qwe1965my troubles seemed qwe1999so far away';

const pattern3 = /\b(?:[a-z]+)(\d{4})([a-z]+)/gi;

const newStr = str.replace(pattern3, '$1 year');

console.log(newStr);