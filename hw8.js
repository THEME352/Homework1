//Задание 1
const people = [
    { name: 'Глеб', age: 29 },
    { name: 'Анна', age: 17 },
    { name: 'Олег', age: 7 },
    { name: 'Оксана', age: 47 }
 ];
 people.sort((personA, personB) => personA.age - personB.age);
 console.log(people);

//Задание 2
function isPositive(num) {
    return num > 0;
  }
  function isMale(person) {
    return person.gender === 'male';
  }
  function filter(arr, ruleFunction) {
    const result = [];
    for (const item of arr) {
      if (ruleFunction(item)) {
        result.push(item);
      }
    }
    return result;
  }
  console.log(filter([3, -4, 1, 9], isPositive)); // [3, 1, 9]
  const people = [
    { name: 'Глеб', gender: 'male' },
    { name: 'Анна', gender: 'female' },
    { name: 'Олег', gender: 'male' },
    { name: 'Оксана', gender: 'female' },
  ];
  console.log(filter(people, isMale));

//Задание 3
function printCurrentDate() {
    console.log(new Date().toLocaleString());
  }
  function countSeconds() {
    for (let i = 3; i <= 30; i += 3) {
      setTimeout(() => {
        printCurrentDate();
        if (i === 30) {
          console.log("30 секунд прошло");
        }
      }, i * 1000);
    }
  }
  countSeconds();

//Задание 4
function delayForSecond(callback) {
    setTimeout(callback, 1000);
  }
  
  delayForSecond(function () {
    console.log('Привет, Глеб!');
  });

//Задание 5
function delayForSecond(cb) {
    setTimeout(() => {
        console.log('Прошла одна секунда');
				if(cb) { 	cb(); }

    }, 1000)
}
function sayHi (name) {
    console.log(`Привет, ${name}!`);
}
delayForSecond(() => sayHi('Глеб'));