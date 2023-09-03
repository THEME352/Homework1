// Задание 1
let zd1 = 10;
alert(zd1);
zd1 = 20;
alert(zd1);

// Задание 2
let zd2 = 2007;
alert(zd2);

// Задание 3
let zd3 = 'Брендан Эйх';
alert(zd3);

// Задание 4
let one = 10;
let two = 2;
alert(one + two);
alert(one - two);
alert(one * two);
alert(one / two);

// Задание 5
let d = 2;
alert(d**5);

// Задание 6
let a = 9; 
let b = 2;
alert(a % b);

// Задание 7
let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
++num;
--num;
alert(num);

// Задание 8
let age = prompt("Сколько вам лет?")
alert(age);

// Задание 9
let user = {
    name: 'Brendan',
    age: 62,
    isAdmin: true
};
// Задание 9.1
user["city of residence"] = 'Pittsburgh';

// Задание 9.2
user["age"] = '30';

// Задание 9.3
delete user['city of residence'];

// Задание 9.4
let info = prompt("Какую информацию хотите узнать о пользователе?");
console.log(user['isAdmin']);
alert(info);

// Задание 10
let newname = prompt("Как вас зовут?");
alert(`Привет, ${newname}!`);
