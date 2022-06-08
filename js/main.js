function getRandomNumber (minNumber, maxNumber) {
  if (minNumber < maxNumber) {
    const RANDOM_NUMBER = minNumber + Math.random() * (maxNumber + 1 - minNumber);
    return Math.round(RANDOM_NUMBER);
  }

  return false;
}

getRandomNumber(22, 56);

function getComment (comment, maxLenght) {
  if(comment <= maxLenght){
    return true;
  }
  return false;
}

getComment(22, 33);
