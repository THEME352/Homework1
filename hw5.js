//Задание 1
function findMinNumber(a, b) {
    if (a < b) {
      return a;
    } else {
      return b;
    }
  }
  console.log(findMinNumber(8, 4));
  console.log(findMinNumber(6, 6));

//Задание 2
function checkEvenOrOdd(number) {
    if (number % 2 === 0) {
      return 'Число четное';
    } else {
      return 'Число нечетное';
    }
  }

//Задание 3.1
function printSquare(number) {
    var square = number * number;
    console.log(square);
  }
  printSquare(5);
  printSquare(8);

//Задание 3.2
function calculateSquare(number) {
    var square = number * number;
    return square;
  }
  console.log(calculateSquare(5));
  console.log(calculateSquare(8));

//Задание 4
function greetUser() {
    var age = parseInt(prompt('Сколько вам лет?'));
  
    if (age < 0) {
      console.log('Вы ввели неправильное значение');
    } else if (age >= 0 && age <= 12) {
      console.log('Привет, друг!');
    } else {
      console.log('Добро пожаловать!');
    }
  }
  greetUser();

//Задание 5
function multiplyNumbers(num1, num2) {
    if (isNaN(num1) || isNaN(num2)) {
      return 'Одно или оба значения не являются числом';
    } else {
      return num1 * num2;
    }
  }
  console.log(multiplyNumbers(5, 6));
  console.log(multiplyNumbers('apple', 6));
  console.log(multiplyNumbers(2, 'orange'));

//Задание 6
  function cubeNumber() {
    var number = prompt('Введите число:');
    if (isNaN(number)) {
      return 'Переданный параметр не является числом';
    } else {
      var cube = Math.pow(parseFloat(number), 3);
      return number + ' в кубе равняется ' + cube;
    }
  }
  for (var i = 0; i <= 10; i++) {
    console.log(cubeNumber(i));
  }
  
//Задание 7
const circle1 = {
    radius: 5,
    getArea: function() {
      return Math.PI * this.radius ** 2;
    },
    
    getPerimeter: function() {
      return 2 * Math.PI * this.radius;
    }
  };
  const circle2 = {
    radius: 7,
    getArea: function() {
      return Math.PI * this.radius ** 2;
    },
    getPerimeter: function() {
      return 2 * Math.PI * this.radius;
    }
  };
  console.log("Площадь circle1:", circle1.getArea());
  console.log("Периметр circle1:", circle1.getPerimeter());
  console.log("Площадь circle2:", circle2.getArea());
  console.log("Периметр circle2:", circle2.getPerimeter());