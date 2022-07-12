import {createPhotos} from './data.js';
import {renderPhotos, similarPhoto, pictureList} from './rendering.js';

createPhotos();
renderPhotos(similarPhoto, pictureList);
