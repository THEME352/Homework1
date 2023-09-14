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
function generateRandomArray(n) {
    const arr = [];
    for (let i = 0; i < n / 2; i++) {
      const randomNumber = Math.floor(Math.random() * (n + 1));
      arr.push(randomNumber);
    }
    return arr;
  }

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
    const weekdays = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'];
    const months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
    
    const options = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    };
    const formattedDate = `${date.toLocaleDateString('ru-RU', options)} - это ${weekdays[date.getDay()]}.`;
    return formattedDate;
  }
  const currentDate = new Date();
  console.log('Дата:', formatDateTime(currentDate));