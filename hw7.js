//Задание 1
const str = 'js';
const upperCaseStr = str.toUpperCase();

console.log(upperCaseStr);
//Задание 2
function filterArrayByPrefix(arr, prefix) {
    return arr.filter((item) => item.toLowerCase().startsWith(prefix.toLowerCase()));
  }

//Задание 3
const roundedDown = Math.floor(32.58884);
console.log(roundedDown);

const roundedUp = Math.ceil(32.58884);
console.log(roundedUp);

const roundedToNearest = Math.round(32.58884);
console.log(roundedToNearest);

//Задание 4
const numbers = [52, 53, 49, 77, 21, 32];
const minNumber = Math.min(...numbers);
const maxNumber = Math.max(...numbers);
console.log("Наименьшее число:", minNumber);
console.log("Наибольшее число:", maxNumber);

//Задание 5
function generateRandomNumber() {
    const randomNumber = Math.floor(Math.random() * 10) + 1;
    console.log(randomNumber);
  }

//Задание 6
function getRandomArrNumbers(num) {
  var len = Math.floor(num / 2);
  var arr = [];
  for (var i = 0; i < len; i++) {
    arr.push(Math.floor(Math.random() * (num + 1)));
  }
  return arr;
}
console.log(getRandomArrNumbers(7)); // [6, 2, 7]
console.log(getRandomArrNumbers(12)); // [9, 11, 10, 9, 3, 0]

//Задание 7
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

//Задание 8
const currentDate = new Date();
console.log(currentDate);

//Задание 9
const currentDate = new Date();
const futureDate = new Date(currentDate.setDate(currentDate.getDate() + 73));
console.log(futureDate);

//Задание 10
function formatDateTime(date) {
  var options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    weekday: 'long',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric'
  };
  var formattedDate = new Intl.DateTimeFormat('ru-RU', options).format(date);

  return formattedDate;
}

var now = new Date();
console.log(formatDateTime(now));
  
//Задание 11
var fruits = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
var shuffledFruits = shuffleArray(fruits);
alert('Перемешанный массив: ' + shuffledFruits.join(', '));
var firstElementGuess = prompt('Чему равнялся первый элемент массива?');
var lastElementGuess = prompt('Чему равнялся последний элемент массива?');
if (firstElementGuess === fruits[0] && lastElementGuess === fruits[fruits.length - 1]) {
  alert('Поздравляем, вы угадали оба элемента!');
} else if (firstElementGuess === fruits[0] || lastElementGuess === fruits[fruits.length - 1]) {
  alert('Вы были близки к победе!');
} else {
  alert('Вы ответили неверно.');
}
function shuffleArray(array) {
  var currentIndex = array.length;
  var temporaryValue, randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}