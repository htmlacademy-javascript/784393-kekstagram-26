const getRandomNumber = (minNumber, maxNumber) => {
  const lower = Math.ceil(Math.abs(minNumber));
  const upper = Math.floor(Math.abs(maxNumber));

  if (lower > upper) {
    throw Error ('Неверный диапозон. Min должен быть меньше Max');
  }

  const randomInteger = lower + Math.random() * (upper + 1 - lower);
  return Math.floor(randomInteger);
};

getRandomNumber(1 , 25);

const getRandomArrayElement = (elements) => elements[getRandomNumber(0, elements.length - 1)];

const getIndex = () =>{
  let sequence = 1;
  return ()=> sequence++;
};

const getDescriptiontId = getIndex();
const getPictureUrl = getIndex();
const getCommentId = getIndex();

export{getRandomNumber, getRandomArrayElement, getDescriptiontId, getPictureUrl, getCommentId};
