'use strict';
const imagesDB = [
  'https://www.bef-de.org/wp-content/uploads/2019/02/Land-Sea-Act-e1556549333320.jpg',
  'https://i.pinimg.com/originals/20/4d/46/204d46dee220046cd405fb677ef84840.jpg',
  'https://images.theconversation.com/files/295442/original/file-20191003-52796-1763ajl.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop',
  'https://i.pinimg.com/originals/e2/df/ca/e2dfcabcba4b6af0f9838715c4eba91a.jpg',
  'https://64.media.tumblr.com/ae500a0f115f365a32e525fd1fd386b2/a8d6d1fd12d40dbc-8e/s500x750/bf566093f42fba33f49045ffe5ef83a224f466a3.jpg'
];

const slider = new Slider(imagesDB);

const image = document.querySelector('.slide>img');
const [prevBtn, nextBtn] = document.querySelectorAll('.slider-container>button');

function updateView(){
  image.setAttribute('src' , slider.currentSlide);
}
updateView();

const btnSliderHandler = (direction = 'next') =>() =>{
  slider.currentIndex = slider[direction === 'next' ? 'nextIndex' : 'prevIndex'];
  updateView();
}
nextBtn.addEventListener('click',btnSliderHandler('next'));
prevBtn.addEventListener('click',btnSliderHandler('prev'));

image.addEventListener('wheel', (e)=>{
  // const handler = e.deltaY> 0 ? btnSliderHandler('next') : btnSliderHandler('prev');
  // handler();
  e.deltaY> 0 ? btnSliderHandler('next')() : btnSliderHandler('prev')();
})

/*------------------------------------------------------------------------ */

// const uniqueImg = document.getElementById('unique');

// const strAttr = document.createAttribute('src');
// strAttr.value = imagesDB[0];

// uniqueImg.setAttributeNode(strAttr);

/* 
По клику на кнопку показывать чередованием одну из двух картинок.
*/


// const uniqueBtn = document.getElementById('uniqueBtn');
// const uniqueImg = document.getElementById('uniqueImg');

// uniqueImg.src = imagesDB[0];

// uniqueBtn.addEventListener('click', changeImage);

// let isFirstClick = true;
// function changeImage(){
//   uniqueImg.src = imagesDB[isFirstClick ? 1 : 0];
//   isFirstClick = !isFirstClick;
// }