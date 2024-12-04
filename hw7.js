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
function playGame() {
  var words = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
  words.sort(function() {
    return 0.5 - Math.random();
  });
  alert(words.join(', '));
  var firstWord = prompt("Чему равнялся первый элемент массива?");
  var lastWord = prompt("Чему равнялся последний элемент массива?");
  firstWord = firstWord.toLowerCase();
  lastWord = lastWord.toLowerCase();
  var shuffledFirstWord = words[0].toLowerCase();
  var shuffledLastWord = words[words.length - 1].toLowerCase();
  if (firstWord === shuffledFirstWord && lastWord === shuffledLastWord) {
    alert("Поздравляю, вы угадали оба элемента!");
  } else if (firstWord === shuffledFirstWord || lastWord === shuffledLastWord) {
    alert("Вы были близки к победе!");
  } else {
    alert("Вы ответили неверно!");
  }
}
document.getElementById("playButton").addEventListener("click", playGame);