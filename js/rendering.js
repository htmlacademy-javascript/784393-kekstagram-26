const pictureList = document.querySelector('.pictures');
const picture = document.querySelector('#picture').content.querySelector('.picture');

const renderPhoto =(photo)=> {
  const copyPicture = picture.cloneNode(true);

  copyPicture.querySelector('.picture__likes').textContent = photo.likes;
  copyPicture.querySelector('.picture__comments').textContent = photo.comments.length;
  copyPicture.querySelector('.picture__img').src = photo.url;

  return copyPicture;
};


const renderPhotos = (photos, element) => {
  const pictureFragment = document.createDocumentFragment();

  photos.forEach((photo) => pictureFragment.appendChild(renderPhoto(photo)));
  element.appendChild(pictureFragment);

};

export {renderPhotos, pictureList};
