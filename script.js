// Вернуть заданное число в виде строки в расширеннйо форме.
// Все числа это целые чила больше 0.
const expandedForm = (num) =>
  String(num)
    .split("")
    .map((n, i, arr) => n + "0".repeat(arr.length - i - 1))
    .filter((n) => Number(n) != 0)
    .join(" + ");

console.log(expandedForm(42));
// ...(42) => '40 + 2'

// -----------------------------------------------------------------------
// Два массива строк a и b. Вернуть массив, в котором элементы из массива a являются подстркоами строк из массива b
const arr1 = ["ля", "ты", "редис"];
const arr2 = ["коты", "цапля", "крысолов"];

const inArr = (a, b) => a.filter((sub) => b.some((str) => str.includes(sub)));

console.log(inArr(arr1, arr2));
// => ['ля', 'ты']

// -----------------------------------------------------------------------
// Представить прямоугольники в виде группы квадратов
const sqInRect = (a, b) => {
  if (a === b) return [a];

  const [min, max] = a < b ? [a, b] : [b, a];

  return [min, ...sqInRect(max - min, min)];
};

console.log(sqInRect(5, 3));
// => [3, 2, 1, 1]

// -----------------------------------------------------------------------
// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23

function solution(number) {
  let sum = 0;
  for (let i = 1; i <= number; i++) {
    i % 3 == 0 || i % 5 == 0 ? (sum += i) : null;
  }
  return sum;
}

console.log("решение: " + solution(10));

// => 33

// let l = [1,2,'a','b'];

// function filter_list(l) {
//   let result = [];
//   l.forEach(el => (el.isInteger) ? result.push(el) : 1)
//   return result
// }
// console.log("решение_2: " + filter_list(l))

// -----------------------------------------------------------------------
let l = [1, 2, "aasf", "1", 0, "123", 123];
function filter_list(l) {
  let result = l.filter((el) => Number.isInteger(el));
  return result;
}
console.log(filter_list(l));

// -----------------------------------------------------------------------
// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.
let str = "abs";
function isIsogram(str) {
  let lStr = str.toLocaleLowerCase();
  for (let i = 0; i < lStr.length - 1; i++) {
    for (let j = i + 1; j < lStr.length; j++) {
      if (lStr[i] === lStr[j]) {
        return false;
      }
    }
  }
  return true;
}
console.log(isIsogram(str));
// isIsogram "Dermatoglyphics" = true
// isIsogram "moose" = false

// -----------------------------------------------------------------------
// Return the number (count) of vowels in the given string.
// We will consider a, e, i, o, u as vowels for this Kata (but not y).
// The input string will only consist of lower case letters and/or spaces.
let str1 = "atyour";

function getCount(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (
      str[i] === "a" ||
      str[i] === "e" ||
      str[i] === "i" ||
      str[i] === "o" ||
      str[i] === "u"
    ) {
      ++count;
    }
  }
  return count;
}
console.log(getCount(str1));

// -----------------------------------------------------------------------
// сортировать цифры в числе по убыванию и вывести новое число
let n = 145263;
function descendingOrder(n) {
  return parseInt(
    String(n)
      .split("")
      .sort((a, b) => b - a)
      .join("")
  );
}
console.log(descendingOrder(n));

// -----------------------------------------------------------------------
// Given an array of integers, find the one that appears an odd number of times.
// There will always be only one integer that appears an odd number of times.

let A = [1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1];

function findOdd(A) {
  let result = 0; 
  for (let i = 0; i < A.length; i++) {
    result ^= A[i]; // Применяем операцию XOR к каждому элементу массива
    // XOR двух одинаковых чисел дает 0, а XOR числа с 0 дает само число
    // Таким образом, в результате получим элемент, который повторяется нечетное количество раз
  }
  return result; 
}
console.log(findOdd(A));
// другой вариант
let B = [1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1];

function ffindOdd(B) {
 return B.reduce((a, b) => a ^ b)
}
console.log(ffindOdd(B));

// -----------------------------------------------------------------------
