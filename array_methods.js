// From
console.log("From");
const str = "hello";
const arr = Array.from(str); // ['h', 'e', 'l', 'l', 'o']
console.log(arr);

// Find
console.log("Find");
const numbers = [1, 2, 3, 4, 5];
const even = numbers.find((num) => num % 2 === 0); // 2

//findIndex
console.log("findIndex");
const number = [1, 2, 3, 4, 5];
const evenIndex = number.findIndex((num) => num % 2 === 0); // 1

//includes
console.log("includes");
const inc = [1, 2, 3, 4, 5];
const includesThree = inc.includes(3); // true

//fill
console.log("Fill");
const arr1 = [1, 2, 3, 4, 5];
arr1.fill(0); // [0, 0, 0, 0, 0]

//Sort
console.log("Sort");
const arr2 = [5, 3, 1, 4, 2];
arr2.sort(); // [1, 2, 3, 4, 5]
