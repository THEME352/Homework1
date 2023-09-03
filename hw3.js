//Задание 1
let password = 'пароль';
let userInput = prompt('Введите пароль');
if (userInput === password) {
  console.log('Пароль введен верно');
} else {
  console.log('Пароль введен неправильно');
}

//Задание 2
let c;
c = 0;
if (c > 0 && c < 10) {
  console.log('Верно');
} else {
  console.log('Неверно');
}
c = 10;
if (c > 0 && c < 10) {
  console.log('Верно');
} else {
  console.log('Неверно');
}
c = -3;
if (c > 0 && c < 10) {
  console.log('Верно');
} else {
  console.log('Неверно');
}
c = 2;
if (c > 0 && c < 10) {
  console.log('Верно');
} else {
  console.log('Неверно');
}

//Задание 3
let d = 150;
let e = 50;
if (d > 100 || e > 100) {
  console.log('Верно');
} else {
  console.log('Неверно');
}

//Задание 4
let a = '2';
let b = '3';
alert(Number(a) + Number(b));

//Задание 5
let monthNumber = 12;
if (monthNumber <= 12 && monthNumber >= 1) {
  switch (monthNumber) {
    case 1:
    case 2:
    case 12:
      console.log('Зима');
      break;
    case 3:
    case 4:
    case 5:
      console.log('Весна');
      break;
    case 6:
    case 7:
    case 8:
      console.log('Лето');
      break;
    case 9:
    case 10:
    case 11:
      console.log('Осень');
      break;
  }
} else {
  console.log('Неверный номер месяца');
}