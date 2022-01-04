'use strict';

const btns = document.querySelectorAll('button');
const content = document.getElementsByClassName('flex-content')[0];

const selectDirection = ({
  target: {
    dataset: { direction },
  }
}) => {
  content.style.flexDirection = direction;
}

for (const btn of btns) {
  btn.addEventListener('click', selectDirection);
}
