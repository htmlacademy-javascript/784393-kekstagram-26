import {createPhotos} from './data.js';


const pictureList = document.querySelector('.pictures');
const picture = document.querySelector('#picture').content.querySelector('.picture');
const similarPhoto = createPhotos(25);


const renderPhoto =(photo)=> {
  const copyPicture = picture.cloneNode(true);

  copyPicture.querySelector('.picture__likes').textContent = photo.likes;
  copyPicture.querySelector('.picture__comments').textContent = photo.comments.length;
  copyPicture.querySelector('.picture__img').src = photo.url;

  pictureList.appendChild(copyPicture);
};


const renderPhotos = (photos, element) => {
  const pictureFragment = document.createDocumentFragment();

  photos.forEach((photo) => renderPhoto(photo));
  element.appendChild(pictureFragment);

};

renderPhotos(similarPhoto, pictureList);


export {renderPhotos};
