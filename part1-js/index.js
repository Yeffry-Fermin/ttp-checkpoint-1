// ============================================================
// PART 1 — JavaScript Basics
//
// How to run your code:
//   Open the index.html file in this folder with Live Server.
//   Your console.log output will appear in the browser's DevTools console.
//   Open DevTools: right-click the page → Inspect → Console tab
//   (or Cmd+Option+J on Mac / Ctrl+Shift+J on Windows)
//
//   Every time you save index.js, Live Server reloads the page
//   and re-runs your code automatically.
//
//   IMPORTANT — switching parts:
//   Each part has its own index.html. When you move to Part 2 or Part 3,
//   stop Live Server and restart it pointing at that part's folder.
//   Running the wrong HTML file means your changes won't show up.
//
// Instructions:
//   - Write your code directly below each prompt
//   - Every task that produces a value must use console.log to show it
//       ex: console.log(yourAnswer)
//   - For EXPLAIN prompts, write your answer as a comment directly below
//       ex: // answer: write your answer here...
// ============================================================

// ------------------------------------------------------------
// SECTION A — Variables & Math
// ------------------------------------------------------------
console.log("[ SECTION A — Variables & Math ]");

// A1.
// Declare a variable using const and assign it the number 100.
// Declare a variable using let and assign it the number 45.
// Log both.

const numOne = 100;
let numTwo = 45;
console.log(numOne);
console.log(numTwo);

// A2.
// Using only those two variables, write a single expression that adds them,
// subtracts 20, multiplies by 2, and divides by 5.
// Log the result.
const result = numOne + numTwo - (20 * 2) / 5;
console.log("result", result);
// A3.
// Reassign your let variable to a different number. Log it.
// Now try to reassign your const variable. What happens?
//
// EXPLAIN: What is the difference between let and const?
//          Write your answer as a comment below.
//
//          answer: let allows the reasignment of the variable value while const won't allow you to reasign the value. 
//          In this case, numOne throws a type error as you cannot reassign its value.
numTwo = 21;
console.log("num two reasign to twenty one", numTwo);
//numOne = 52;
//console.log("num one reasign", numOne);


// A4.
// Using the % operator, write an expression that tells you
// whether the number 47 is even or odd.
// Log the result and a message that says "even" or "odd".
//
// EXPLAIN: What does the % operator return?
//          Why is it useful for checking even/odd?
//
//          answer: The % returns the remainder, it is useful to check even/odd because if the remainder is = to 0, then you know its even, else its odd.
//          with a === check, if it the remainder is 0 then its an even number, else its an odd number.
if(47 % 2 === 0) {
  console.log('Num is even')
} else {
  console.log('Num is odd')
}
// ------------------------------------------------------------
// SECTION B — Strings (reference to string methods: https://www.w3schools.com/jsref/jsref_obj_string.asp)
// ------------------------------------------------------------
console.log("\n[ SECTION B — Strings ]");

// The following string is provided for this section. You may use methods or compute manually.
const rawInput = "   JavaScript is AWESOME   ";

// B1.
// Log the string with all leading and trailing spaces removed (extra spaces in front and end of the text).
let newRawInput = rawInput.trim();
console.log('trim the string',newRawInput)
// B2.
// Log the string converted to all lowercase.
console.log('lowercase', newRawInput.toLocaleLowerCase())
// B3.
// Log the number of characters in rawInput (including spaces).
console.log('num of char', newRawInput.length);
// B4.
// Log whether rawInput contains the word "awesome" (lowercase).
// It should return true.
console.log(newRawInput.toLowerCase().includes('awesome'))
// B5.
// Log the first 10 characters of rawInput.
const rawInputArr = newRawInput.split('')
for (let i = 0; i < 10; i++) {
  const element = rawInputArr[i];
  console.log(element)
}
// B6.
// Split rawInput (after trimming it) into an array of individual words.
// Log the resulting array.
//
// EXPLAIN: What does .split() do? What argument did you pass it and why?
//
//        answer: .split() converts a string into an array, the argument being passed determines where the string will be divided
//        in the ase of '', it will just divide each letter, if we passed ' ' it would divide the string at spaces and so on
const newRawInputArr = newRawInput.split('')

for (let i = 0; i < rawInputArr.length; i++) {
  const element = newRawInputArr[i];
  console.log(element)
}
// ------------------------------------------------------------
// SECTION C — Arrays (reference to array methods: https://www.w3schools.com/jsref/jsref_obj_array.asp)
//
// Each task tells you exactly what to use — a loop, a method, or a property.
// Use what is specified. Do not substitute one for another.
// ------------------------------------------------------------
console.log("\n[ SECTION C — Arrays ]");

// The following array is provided for this section.
const scores = [88, 72, 95, 60, 84, 100, 73, 91];

// C1.
// Log the first score. Log the last score.
// Do not hardcode the index for the last one.
console.log(scores[0])
console.log(scores.length - 1)

// C2.
// Log the total number of scores we see in the array.
const totalScore = scores.reduce((acc, curr) => {
  return acc + curr;
},0)
console.log(totalScore)
// C3.
// Use a method to mutate and add the number 78 to the end of the array.
// Log the updated array.
scores.push(78)
console.log(scores)
// C4.
// Use a method to log the index of the score 95.
// Log the index.
const indxOf = scores.indexOf(95)
console.log(indxOf) 
console.log('-------------------------------')

// C5.
// Use a method to log whether the array includes the score 50.
// Log the boolean value.
const incFifty = scores.includes(50);
console.log(incFifty)
console.log('-------------------------------')

// C6.
// Use a for loop to log each score on its own line.
// Do not modify the original scores array.
for (let index = 0; index < scores.length; index++) {
  const element = scores[index];
  console.log(element)
}
console.log('-------------------------------')

// C7.
// Use .forEach() to log each score on its own line.
// Do not modify the original scores array.
//
// EXPLAIN: What is the difference between a for loop and forEach?
//          Is one better than the other?
//          For loops you have acess to break and continue as opposed to forEach which doesn't provide you with that. 
//          There isn't really a better option, it depends on your needs. For a standard array loop forEach is easier on the eyes, no pesky [i]

scores.forEach((score) => {
  console.log(score)
})
console.log('-------------------------------')

// C8.
// Use .filter() to create a new array containing only the scores above 80.
// Log the new result array.
// Do not modify the original scores array.
const filteredScores = scores.filter((score) => {
  return score > 80
})
console.log(filteredScores);
console.log('-------------------------------')

// C9.
// Use .map() to create a new array where every score is multiplied by 2.
// Log the new result array.
// Do not modify the original scores array.
//
// EXPLAIN: What does .map() return? What does .filter() return?
//          How are they different?
//
//          answer:map() returns an array of modified values while filter only returns value that pass the condition
const multScores = scores.map((score) => {
  return score * 2;
})
console.log(multScores)
console.log('-------------------------------')

// ------------------------------------------------------------
// SECTION D — Objects (reference to object methods: https://www.w3schools.com/jsref/jsref_obj_object.asp)
// ------------------------------------------------------------
console.log("\n[ SECTION D — Objects ]");

// The following object is provided for this section.
const student = {
  name: "Brunson",
  age: 29,
  city: "New York",
  enrolled: true,
};

// D1.
// Log the value of name using dot notation.
// Log the value of city using bracket notation.
console.log(student.name)
console.log(student['city']);

console.log('-------------------------------')

// D2.
// Add a new key called grade and set it to "B+".
// Log the updated object.
student.grade = 'B+'
console.log(student)
console.log('-------------------------------')

// D3.
// Use a method to log all of the keys in the object.
console.log(Object.keys(student))
console.log('-------------------------------')

// D4.
// Use a method to log all of the values in the object.
console.log(Object.values(student))
console.log('-------------------------------')

// D5.
// Using a for...in loop, log each key-value pair in this exact format:
//   name: Jane
//   age: 21
//   (etc.)

for(const val in student) {
  //console.log('val', val) // val prints the key
  console.log(val + ":" + student[val])
}
console.log('-------------------------------')

// D6.
// EXPLAIN: What is the difference between dot notation and bracket notation?
//          Give an example of when you would need to use bracket notation
//          instead of dot notation.
//
//          answer:Dot notation is used to access already exisisting value while
//          bracket notation is for dynamic accessing of values. An example of this would be dynamically creating values
//          in an object based on array of keys, you cannot use dot notation for this and instead would use bracket notation.

// ------------------------------------------------------------
// SECTION E — Arrays of Objects
// ------------------------------------------------------------
console.log("\n[ SECTION E — Arrays of Objects ]");

// The following array is provided for this section.
const roster = [
  { name: "Alex", grade: 92, present: true },
  { name: "Jamie", grade: 74, present: false },
  { name: "Jane", grade: 88, present: true },
  { name: "Riley", grade: 61, present: true },
  { name: "Casey", grade: 95, present: false },
];

// E1.
// Log the name of the third student.
console.log(roster[2].name)
console.log('-------------------------------')

// E2.
// Using forEach, log the name of every student who is present.
roster.forEach((student) => {
  console.log(student.name);

})
console.log('-------------------------------')

// E3.
// Create a new array containing only the students who passed (grade >= 70).
// Log each passing student's name and grade.
const passed = roster.filter((student) => {
  return student.grade >= 70;
})
console.log(passed)
console.log('-------------------------------')

// E4.
// Create a new array of just the names of all students (no other data).
// Log the result array.
const names = roster.map((student) => {
  return student.name;
})
console.log(names)
console.log('-------------------------------')

// E5.
// EXPLAIN: Why would you store objects inside an array?
//          What problem does that structure solve compared to
//          storing everything in separate variables?
//
//          answer: You store objects inside an array when you want to create a collection of data. For example, you have social media profiles, how 
//          will you store the name, age, date of birth and so on if not inside an object?. You could make an array for each of the profiles but that
//          sounds terribly inneficient and unpractical. Instead we keep data that's intertwinted in objects and we store them inside an array to easily
//          maninupulate such data. A problem this solves is not needing to create potentially hundreds of variables and the ability to quickly to dynamically add users

// ------------------------------------------------------------
// SECTION F — Functions
//
// For each task, write the function so that the calls below it produce the shown output.
// ------------------------------------------------------------
console.log("\n[ SECTION F — Functions ]");

// F1.
// Write a function called greet that takes a name as an argument
// and returns a greeting string.
//
const greet = (name) => {
  return `Hello ${name}`
}
console.log(greet("Alex")); // → "Hello, Alex!"
console.log(greet("Mike")); // → "Hello, Mike!"
console.log('-------------------------------')

// F2.
// Write a function called square that takes a number and returns its square.
//
const square = (num) => {
  return num * num;
}
console.log(square(4)); // → 16
console.log(square(9)); // → 81
console.log('-------------------------------')

//
// EXPLAIN: What does the return keyword do?
//          What does a function return if you forget to write return?
//
//          answer: The return keyword is used to give back a value from the function, it also immediately exits the function
//          If you forget a return, the function will return undefined.

// F3.
// Write a function called isEven that takes a number and returns
// true if it is even and false if it is odd.
//
const isEven = (num) => {
  if(num % 2 === 0) {
    return true;
  }
  return false;
}

console.log(isEven(4)); // → true
console.log(isEven(7)); // → false
console.log(isEven(0)); // → true
console.log('-------------------------------')

// F4.
// Write a function called sum that takes an array of numbers
// and returns the total of all the numbers added together.
// Use a loop inside — do not use a built-in method.
//

const sum = (arr) => {
  let total = 0;
  for(let i = 0; i < arr.length; i++) {
    total = total + arr[i]
  }
  return total
}
console.log(sum([1, 2, 3, 4, 5])); // → 15
console.log(sum([10, 20, 30])); // → 60
console.log(sum([])); // → 0
console.log('-------------------------------')

// F5.
// Write a function called myForEach that takes an array and a callback function as arguments.
// It should call the callback on every element in the array.
// It should not return anything.
// Do not use the native .forEach() inside your function — use a for loop.
//
const myForEach = (arr, fn) => {
  for(let i = 0; i < arr.length; i++) {
    fn(arr[i])
  }
}
myForEach([1, 2, 3], function (n) {
  console.log(n);
});
console.log('-------------------------------')

// → 1
// → 2
// → 3
//
// EXPLAIN: What is a callback function?
//          In the example above, what plays the role of the callback?
//
//          answer: A callback function is a function that is passed as an argument into another function, 
//          to be executed inside that parent function at a later time. The role of the callback is played by the anon
//          function that logs each value passed.
//        

// F6.
// Write a function called myMap that takes an array and a callback function as arguments.
// It should return a NEW array where each element is the result of
// calling the callback on the original element.
// Do not use the native .map() inside your function — use a for loop.
//
const myMap = (array, fn) => {
  const newArr = []
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    newArr.push(fn(element))
  }
  return newArr;
}

console.log(myMap([1, 2, 3], (n) => n * 2)); // → [2, 4, 6]
console.log(myMap([1, 2, 3], (n) => n + 10)); // → [11, 12, 13]



// F7.
// Write a function called myFilter that takes an array and a callback function as arguments.
// It should return a NEW array containing only the elements for which
// the callback returns true.
// Do not use the native .filter() inside your function — use a for loop.
//
const myFilter = (array, fn) => {
  let newArr = [];
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if(fn(element)) {
      newArr.push(element)
    }
  }
  return newArr;
}
console.log(myFilter([1, 2, 3, 4, 5], (n) => n > 3)); // → [4, 5]
console.log(myFilter([10, 25, 30, 45], (n) => n % 2 === 0)); // → [10, 30]
//
// EXPLAIN: What do myMap and myFilter have in common?
//          What is the key difference between what they return?
//          Why do neither of them change the original array?
//
//          answer: What they have in common is that they both take an array and a callback 
//          and return a new array. The difference is myMap modifies the values, while myFilter simply filters them
//.         Neither change the original array because we are simply looping over them and save the new values into 
//          a new variable array.
