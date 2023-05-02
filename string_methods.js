//toUpperCase
console.log("toUpperCase");
let name1 = "john doe";
let upperCaseName = name1.toUpperCase(); // "JOHN DOE"
console.log(upperCaseName);

//toLowerCase
console.log("toLowerCase");
let name2 = "JOHN DOE";
let lowerCaseName = name2.toLowerCase(); // "john doe"
console.log(lowerCaseName);

//charAt
console.log("charAt");
let name3 = "john doe";
let firstChar = name3.charAt(0); // "j"
console.log(firstChar);

//indexOf
console.log("indexOf");
let sentence = "The quick brown fox jumps over the lazy dog";
let indexOfFox = sentence.indexOf("fox"); // 16
let indexOfCat = sentence.indexOf("cat"); // -1
console.log(indexOfFox);
console.log(indexOfCat);

//substring
console.log("substring");
let sentence1 = "The quick brown fox jumps over the lazy dog";
let firstWord = sentence1.substring(0, 3); // "The"
let lastWord = sentence1.substring(sentence1.length - 3); // "dog"
console.log(firstWord);
console.log(lastWord);

//split
console.log("split");
let sentence3 = "The quick brown fox jumps over the lazy dog";
let words = sentence3.split(" "); // ["The", "quick", "brown", "fox", "jumps", "over", "the", "lazy", "dog"]
console.log(words);

//trim
console.log("trim");
let names = "   John Doe    ";
let trimmedName = names.trim(); // "John Doe"
console.log(trimmedName);

//startsWith
console.log("startsWith");
let sentencen = "The quick brown fox jumps over the lazy dog";
let startsWithThe = sentencen.startsWith("The"); // true
let startsWithA = sentencen.startsWith("A"); // false
console.log(startsWithThe);
console.log(startsWithA);

//endsWith
console.log("endsWith");
let sentences = "The quick brown fox jumps over the lazy dog";
let endsWithDog = sentences.endsWith("dog"); // true
let endsWithCat = sentences.endsWith("cat"); // false
console.log(endsWithDog);
console.log(endsWithCat);

//concat
console.log("concat");
let firstName = "John";
let lastName = "Doe";
let fullName = firstName.concat(" ", lastName); // "John Doe"
console.log(fullName);
