// From
console.log("From");
const str = "hello";
const arr = Array.from(str); // ['h', 'e', 'l', 'l', 'o']
console.log(arr);

// Find
console.log("Find");
const numbers = [1, 2, 3, 4, 5];
const even = numbers.find((num) => num % 2 === 0); // 2
console.log(even);

//findIndex
console.log("findIndex");
const number = [1, 2, 3, 4, 5];
const evenIndex = number.findIndex((num) => num % 2 === 0); // 1
console.log(evenIndex);

//includes
console.log("includes");
const inc = [1, 2, 3, 4, 5];
const includesThree = inc.includes(3); // true
console.log(includesThree);

//fill
console.log("Fill");
const arr1 = [1, 2, 3, 4, 5];
arr1.fill(0); // [0, 0, 0, 0, 0]
console.log(arr1);

//Sort
console.log("Sort");
const arr2 = [5, 3, 1, 4, 2];
arr2.sort(); // [1, 2, 3, 4, 5]
console.log(arr2);

//Push
console.log("Push");
const arr3 = [1, 2, 3];
arr3.push(4);
console.log(arr3); // [1, 2, 3, 4]

//Pop
console.log("Pop");
const arr4 = [1, 2, 3];
const lastElement = arr4.pop();
console.log(lastElement); // 3
console.log(arr4); // [1, 2]

//Shift
console.log("shift");
const arr6 = [1, 2, 3];
const firstElement = arr6.shift();
console.log(firstElement); // 1
console.log(arr6); // [2, 3]

//unshift
console.log("Unshift");
const arr7 = [1, 2, 3];
arr.unshift(0);
console.log(arr7); // [0, 1, 2, 3]

//slice
console.log("slice");
let fruits = ["apple", "banana", "orange", "pear"];
let citrus = fruits.slice(1, 3); // ["banana", "orange"]
console.log(citrus);

//splice
console.log("splice");
let fruits1 = ["apple", "banana", "orange", "pear"];
fruits1.splice(2, 1, "lemon", "lime"); // ["orange"]
// fruits is now ["apple", "banana", "lemon", "lime", "pear"]
console.log(fruits1);

//concat
console.log("concat");
let fruits5 = ["apple", "banana"];
let moreFruits = ["orange", "pear"];
let allFruits = fruits5.concat(moreFruits); // ["apple", "banana", "orange", "pear"]

//filter
console.log("filter");
let numbers1 = [1, 2, 3, 4];
let evenNumbers = numbers1.filter((num) => num % 2 === 0); // [2, 4]
