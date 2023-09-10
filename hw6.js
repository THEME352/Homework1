//Задание 1
let array = [1, 5, 4, 10, 0, 3];
for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
  if (array[i] === 10) {
    break;
  }
}

//Задание 2
let numbers = [1, 5, 4, 10, 0, 3];
let position = numbers.indexOf(4);
console.log("Позиция числа 4: " + position);

//Задание 3
let numbers = [1, 3, 5, 10, 20];
let result = numbers.join(' ');
console.log(result);

//Задание 4
let array = [];
for (let i = 0; i < 3; i++) {
  let subarray = [];
  for (let j = 0; j < 3; j++) {
    subarray.push(1);
  }
  array.push(subarray);
}
console.log(array);

//Задание 5
let array = [1, 1, 1];
array.push(2, 2, 2);
console.log(array);

//Задание 6
let array = [9, 8, 7, 'a', 6, 5];
array.sort();
let result = array.filter(element => typeof element === 'number');
console.log(result);

//Задание 7
let array = [9, 8, 7, 6, 5];
let userGuess = parseInt(prompt('Угадай число:'));
if (array.includes(userGuess)) {
  alert('Угадал!');
} else {
  alert('Не угадал!');
}

//Задание 8
let string = 'abcdef';
let reversedString = string.split('').reverse().join('');
console.log(reversedString);

//Задание 9
const array = [[1, 2, 3],[4, 5, 6]];
const flatArray = array.flat();
console.log(flatArray);

//Задание 10
const array = [2, 5, 8, 1, 9, 3, 6, 4, 7, 10];
for (let i = 0; i < array.length - 1; i++) {
  const currentElement = array[i];
  const nextElement = array[i + 1];
  const sum = currentElement + nextElement;
  console.log(`Сумма ${currentElement} и ${nextElement} равна ${sum}`);
}

//Задание 11
const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = squareArray(numbers);
console.log(squaredNumbers);

//Задание 12
function getWordLengths(arr) {
  return arr.map((str) => str.length);
}

//Задание 13
function getNegativeNumbers(array) {
  return array.filter((num) => num < 0);
}