import {getRandomNumber, getRandomArrayElement, getDescriptiontId, getPictureUrl, getCommentId} from './util.js';

const NAMES = [
  'Александра',
  'Вера',
  'Вероника',
  'Антонина',
  'Павел',
  'Анатолий',
  'Виктория',
  'Лев',
  'Николай',
  'Алия',
  'Полина',
  'Ева',
  'Александр',
  'Татьяна',
  'Владимир',
  'Николь',
  'Артём',
  'Алексей',
  'Василиса',
  'Михаил',
  'Андрей',
  'Никита',
  'Мария',
  'Максим',
  'София',
];

const DESCRIPTION_FOTO = [
  'Самая известная фотография прошлого',
  'Модельный снимок',
  'Вид изобразительного искусства',
  'Романтическая фотография',
  'Фото на паспорт',
  'Нет на фотографии – нет проблемы',
  'Композиция в фотографии',
  'Ава без лица',
  'Черный волк',
  'Красивое фото леса',
  'Самая красивая кошка',
  'Перед нами большой экспонат',
  'Девушка делает покупки',
  'Красивое пожелтевшее дерево на краю обрыва',
  'Самый лучший товар за свои деньги',
  'Самая быстрая и дорогая машина в мире',
  'Синее безоблочное небо',
  'Беседка с крышей',
  'Словарь Ожегова',
  'Киногерой вселенной марвел Deadpool',
  'Объявление о вакансии на работу frontend разработчика',
  'Красивый космос, с множеством звезд',
  'Упавшая капля в воду',
  'Бегущий по снегу тигр',
  'Серый кот с голубыми глазами, лежит на диване',
];

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const DESCRIPTION_USER = 25;

const createComment = () => {
  const giveComments = {
    id: getCommentId(),
    avatar: `img/avatar-${  getRandomNumber(1, 6)  }.svg`,
    message: getRandomArrayElement(MESSAGES),
    name: getRandomArrayElement(NAMES),
  };
  return giveComments;
};

const createComments = () => {
  const randomIndex = getRandomNumber(1, 6);
  const commentList = [];
  for(let i = 0; i <= randomIndex; i++){
    commentList[i] = createComment();
  }
  return commentList;
};

const createPhoto = () => ({
  id: getDescriptiontId(),
  url: `photos/${  getPictureUrl()  }.jpg`,
  description: getRandomArrayElement(DESCRIPTION_FOTO),
  likes: getRandomNumber(15, 200),
  comments: createComments(),
});

const createPhotos = () => Array.from({length: DESCRIPTION_USER}, createPhoto);

export {createPhotos};
