function getRandomNumber (minNumber, maxNumber) {
  const lower = Math.ceil(Math.abs(minNumber));
  const upper = Math.floor(Math.abs(maxNumber));

  if (lower > upper) {
    throw Error ('Неверный диапозон. Min должен быть меньше Max');
  }

  const randomInteger = lower + Math.random() * (upper + 1 - lower);
  return Math.floor(randomInteger);
}

getRandomNumber(0 , 25);

function getLenghtComment(comment, maxLenght) {
  return comment.lenght <= maxLenght;
}

getLenghtComment(33, 140);

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

const getRandomArrayElement = (elements) => elements[getRandomNumber(0, elements.length - 1)];

function createUser() {
  return ({
    id: '',
    url: '',
    description: getRandomArrayElement(DESCRIPTION_FOTO),
    likes: getRandomNumber(15, 200),
    comments: [
      {
        id: '',
        avatar: 'img/avatar-{{getRandomNumber(1, 6)}}.svg',
        message: getRandomArrayElement(MESSAGES),
        name: getRandomArrayElement(NAMES),
      }
    ],
  });
}

const similarUsers = Array.from({length: DESCRIPTION_USER}, createUser);
