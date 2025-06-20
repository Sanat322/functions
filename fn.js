
// 1. Функция принимает строку и возвращает её наоборот
const letter = ["s1mple", "s0mple"];
const reverseLetter = (arr) => {
    return arr.map(word => word.split("").reverse().join(""));
}

console.log(reverseLetter(letter));

// 2. Функция определяет, чётное ли число

const arrNum = [1, 2, 3, 4, 5, 6, 10];

const evenNumbers = (arr) => {
    const areEven = arr.filter(num => num % 2 === 0);
    return areEven;
}

console.log(evenNumbers(arrNum));

// 3. Создай функцию, которая возвращает квадрат числа

const square = (arr) => {
    const result = arr.map(num => Math.pow(num, 2));
    return result;
}

console.log(square(arrNum));

// 4. Реализуй рекурсивную функцию, вычисляющую факториал числа

const factRec = (x) => {
    if (x == 1) return x;
    return x * factRec(x - 1);
}

console.log(factRec(5));

// 5. Создай функцию, принимающую любое количество чисел и возвращающую их среднее

const avg = (...nums) => {
    let sum = 0;
    for (let num of nums) {
        sum += num;
    }
    let numAvg = sum / nums.length;
    return numAvg;
}

console.log(avg(4, 5, 6));

// 6. Напиши функцию, которая копирует массив и добавляет к нему новые элементы через ...spread

const elem = "element X"

const addArr = (arr, newElem) => {
    const newArr = [...arr, newElem];
    return newArr;
}

console.log(addArr(letter, elem));

// 7. Сделай таймер, который выводит число каждую секунду от 5 до 1

const timer = (x) => {
    const showSec = setInterval(() => {
        console.log(x);
        x--;
        if (x == 0) {
            clearInterval(showSec);
        }
    }, 1000

    )
}
console.log(timer(5));

// 8. Есть функция greet. Используй call и apply для вызова с разными аргументами

const guest = {
    firstName: 'Gleb',
    lastName: 'Orlov',
    surName: 'Borisovich',
    age: 22
}

function greet(greeting, punctuation) {
    return `${greeting}, I'm ${this.firstName} ${this.lastName}, ${this.age} years old ${punctuation}`;
}

console.log(greet.call(guest, 'hello', '!!'))
console.log(greet.apply(guest, ['hi', '(*・ω・)ﾉ']))

// 9. Напиши функцию которая проверяет, является ли строка палиндромом.

const palindromeFinder = (str) => {
    const cleaned = str.toLowerCase().replace(/\s/g, "");
    const reverseWord = cleaned.split("").reverse().join("");
    return reverseWord === cleaned;
}

const palindrome = "А роза упала на лапу Азора";
const words = "Контекст выполнения – специальная внутренняя структура специальных данных"

console.log(palindromeFinder(palindrome));
console.log(palindromeFinder(words));

// 10. Функция которая возвращает самое длинное слово в строке например принимает текст "Контекст выполнения – специальная внутренняя структура данных"

const longestWord = (str) => {
    const enteringWord = str.split(" ");
    let longestWords = [];
    let maxLength = 0;
    for (let word of enteringWord) {
        if (word.length > maxLength) {
            maxLength = word.length;
            longestWords = [word]
        }
        else if (word.length === maxLength) {
            longestWords.push(word);
        }
    }

    return longestWords;

}

console.log(longestWord(words));

// 11. Функция принимает два аргумента — строку и символ. Возвращает, сколько раз символ встречается в строке 
//     countChar("apple", "p") → 2

const countChar = (word, letters) => {
    const splited = word.split("");
    let count = 0;
    for (let letter of splited) {
        if (letter === letters) count++;
    }
    return `в слове ${word}, ${count} одинаковые буквы`;
}

console.log(countChar("apple", "p"));

// 12.  Напиши функцию-счётчик с замыканием

const counter = () => {
    let count = 0;
    return function () {
        count++;
        return `функция была вызвана ${count} раз`;
    }
}

const count = counter();
console.log(count());