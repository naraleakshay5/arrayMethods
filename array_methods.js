// From
console.log("From");
const str = "hello";
const arr = Array.from(str); // ['h', 'e', 'l', 'l', 'o']
console.log(arr);

// Find
console.log("Find");
const numbers = [1, 2, 3, 4, 5];
const even = numbers.find((num) => num % 2 === 0); // 2
