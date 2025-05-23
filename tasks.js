"use strict"

//1.Дан массив пользователей нужно найти самого старшего
const users = [
  { name: "Anna", age: 21 },
  { name: "Boris", age: 34 },
  { name: "Clara", age: 29 }
];

function maxAge(arr) {
  let max = Math.max(...arr.map(user => user.age));
  return max;
}
console.log(maxAge(users));

//2.Сумма всех зарплат
const salaries = {
  Ivan: 1000,
  Olga: 1200,
  Timur: 1100
};
function sumSalaries(arr) {
  let sum = arr.reduce((acc, user) => acc + user, 0);
  return sum;
}
console.log(Object.entries(salaries));
console.log(sumSalaries(Object.values(salaries)));

//3.Поменять ключи и значения местами
const countryCodes = {
  KZ: "Kazakhstan",
  RU: "Russia"
};
function swapKeysAndValues(obj) {
  const objToArray = Object.entries(obj);
  const swappedArray = objToArray.map(([key, value]) => [value, key]);
  const swappedObject = Object.fromEntries(swappedArray);
  return swappedObject;
}
console.log(swapKeysAndValues(countryCodes));

//4.Создать функцию, которая клонирует объект
const user = {
  name: "John",
  age: 30,
  address: "New York"
};
function cloneObject(obj) {
  const clonne = {};
  return Object.assign(clonne, obj);
}
console.log(cloneObject(user));


//5.Группировать пользователей по возрасту

const input = [{ name: "A", age: 20 },
{ name: "B", age: 21 },
{ name: "C", age: 20 }];
function groupByAge(arr) {
  const group = {};
  arr.forEach(element => {
    if (!group[element.age]) {
      group[element.age] = [];
    }
    group[element.age].push(element.name);
  });
  return group;
}
console.log(groupByAge(input));

//6.Удалить дубликаты из массива

const arrValue = [1, 2, 2, 3, 4, 4];
function deleteCopy(arr) {
  const uniq = arr.filter((item, index) => {
    return arr.indexOf(item) === index;
  }
  );
  return uniq;
}
console.log(deleteCopy(arrValue));


//7.Отфильтровать строки длиннее 3 символов

const shortWords = ['hi', 'hello', 'ok', 'JavaScript'];
function deleteLongWords(arr) {
  const short = arr.filter((item) => {
    return item.length <= 3;

  })
  return short;
}
console.log(deleteLongWords(shortWords));

//8.Посчитать сумму чисел, больших 10

const nums = [5, 12, 8, 21];
function sumBigValues(arr) {
  const bigNums = arr.filter((item) => {
    return item > 10;
  })
  let result = bigNums.reduce((sum, current) => sum + current);
  return result;
}
console.log(sumBigValues(nums));


//9.Найти индекс первого чётного числа

const random = [1, 3, 7, 10, 11];

function showEvenNumbers(arr) {
  const evens = arr.filter((item, index) => {
    return item % 2 === 0 && arr.indexOf(item) === index;
  }
  )
  return evens;
}
console.log(showEvenNumbers(random));

//10.Извлечь имена из массива объектов

const guests = [
  { name: 'Anna', age: 22 },
  { name: 'Bob', age: 30 }
];
function getNames(arr) {
  const guests = arr.map(guest => guest.name);
  return guests;
}
console.log(getNames(guests));

//11.Фильтровать строки длиннее 4 символов

const unfilteredWords = ['hi', 'hello', 'cat', 'world'];
function filterWords(arr) {
  const keyWords = arr.filter((item) => {
    return item.length >= 4;
  })
  return keyWords;
}
console.log(filterWords(unfilteredWords));

//12.Подсчитать количество слов

const fruits = ['apple', 'banana', 'apple', 'orange']; //ответ должен быть:{ apple: 2, banana: 1, orange: 1 }
function showIdenticalWords(arr) {
  const clonneWords = {};
  arr.forEach((word) => {
    if (clonneWords[word]) {
      clonneWords[word] += 1;
    }
    else clonneWords[word] = 1;
  })
  return clonneWords;
}
console.log(showIdenticalWords(fruits));