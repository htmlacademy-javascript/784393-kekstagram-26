function getRandomNumber(minNumber, maxNumber) {
  if (typeof (minNumber && maxNumber) !== 'boolean') {
    if (minNumber > maxNumber) {
      throw Error ('Не верный диапозон.');
    }else if ((minNumber >= 0) && (maxNumber >= 0)) {
      const randomInteger = minNumber + Math.random() * (maxNumber + 1 - minNumber);
      return Math.floor(randomInteger);
    }
  }
  throw Error ('Не верные аргументы.');
}

getRandomNumber(11, 33);

function getLenghtComment(comment, maxLenght) {
  if (comment.lenght <= maxLenght) {
    return true;
  }
  return false;
}

getLenghtComment(33, 140);
