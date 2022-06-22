// function getRandomNumber(minNumber, maxNumber) {
//   if (typeof (minNumber && maxNumber) !== 'boolean') {

//     if (minNumber > maxNumber) {
//       throw Error ('Не верный диапозон.');
//     }

//     if (minNumber >= 0 && maxNumber >= 0) {
//       const randomInteger = minNumber + Math.random() * (maxNumber + 1 - minNumber);
//     }

//     return console.log(Math.floor(randomInteger));
//   }

//   throw Error ('Не верные аргументы.');
// }


function getRandomNumber (minNumber, maxNumber) {
  const lower = Math.ceil(Math.abs(minNumber));
  const upper = Math.floor(Math.abs(maxNumber));

  if (lower > upper) {
    throw Error ('Неверный диапозон. Min должен быть меньше Max');
  }


  const randomInteger = lower + Math.random() * (upper + 1 - lower);
  return console.log(Math.floor(randomInteger));
}


getRandomNumber(33, 65);


function getLenghtComment(comment, maxLenght) {
  return comment.lenght <= maxLenght;
}

getLenghtComment(33, 140);
