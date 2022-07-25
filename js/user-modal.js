import { bigPicture } from './image.js';
import { isEscapeKey } from './util.js';

const socialCommentCount = bigPicture.querySelector('.social__comment-count');
const commentsLoader = bigPicture.querySelector('.comments-loader');
const bigPictureClose = bigPicture.querySelector('#picture-cancel');
const body = document.querySelector('body');
const re = /^#[A-Za-zА-Яа-яЁё0-9]{1,19}$/;

if (!bigPicture.classList.contains('hidden')) {
  socialCommentCount.classList.add('hidden');
  commentsLoader.classList.add('hidden');
  body.classList.add('modal-open');
}


bigPictureClose.addEventListener('click', ()=> {
  bigPicture.classList.add('hidden');
  body.classList.remove('modal-open');
});

document.addEventListener('keydown', (evt) => {
  if(isEscapeKey(evt)){
    evt.preventDefault();
    bigPicture.classList.add('hidden');
    body.classList.remove('modal-open');
  }
});


export {socialCommentCount, commentsLoader, bigPictureClose};
