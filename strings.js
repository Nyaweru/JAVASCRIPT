//a string is a sequence of characters used to represent text
const str = "Hello, JavaScript!";
console.log("String:", str);
console.log("Length:", str.length);


//charAt(index) returns the character at the specified index.
//charCodeAt(index) returns the Unicode of the character at the specified index.
const text = "Hello";
console.log("Character at index 1:", text.charAt(1));         
console.log("Unicode of character at index 1:", text.charCodeAt(2)); 

//toUpperCase() and toLowerCase()
const mixedCase = "JavaScript";
console.log("Uppercase:", mixedCase.toUpperCase()); 
console.log("Lowercase:", mixedCase.toLowerCase());

//indexOf(searchValue) returns the first index at which a specified value is found.
//lastIndexOf(searchValue) returns the last index at which the value is found.
const phrase = "The quick brown fox jumps over the lazy dog";
console.log("Index of 'fox':", phrase.indexOf("fox"));  
console.log("Last index of 'the':", phrase.lastIndexOf("the")); // Case-sensitive search
// To perform a case-insensitive search:
console.log("Index of 'the':", phrase.toLowerCase().lastIndexOf("the")); // 0
//slice()
//Extracts a section of a string from beginIndex to endIndex (not including endIndex).
const sentence= "Hello, World!";
console.log("slice(7, 12):", sentence.slice(7, 12)); 
//substr()
//Extracts a substring starting at the given index for a specified number of characters.
console.log("substr(7, 5):", sentence.substr(7, 5)); // "World"
//concat()
//Joins two or more strings.
const str1 = "Hello";
const str2 = "there";
console.log("Concatenated string:", str1.concat(" ", str2));

//split()
//Splits a string into an array of substrings based on a specified separator.
const data = "apple, banana, cherry";
const fruits = data.split(", ");
console.log("Fruits array:", fruits); // [ "apple", "banana", "cherry" ]
//trim() removes whitespaces
const messy = "   Hello, World!   ";
console.log("Trimmed string:", messy.trim()); // "Hello, World!"

//padStart() and padEnd()
//These methods pad a string with another string until it reaches a given length.
const num = "5";
console.log("Pad start to length 3:", num.padStart(3, "0")); 
console.log("Pad end to length 3:", num.padEnd(3, "0"));   
