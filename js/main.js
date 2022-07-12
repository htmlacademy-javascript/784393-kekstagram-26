import {createPhotos} from './data.js';
import {renderPhotos, pictureList} from './rendering.js';

const similarPhoto = createPhotos(25);
renderPhotos(similarPhoto, pictureList);
