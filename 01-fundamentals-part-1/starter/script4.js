// JavaScript Fundamentals - Part 3
// We'll write our code here!

// Type Conversion and Coercion

const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number("Jonas"));
console.log(typeof NaN);

console.log(String(23), 23);
console.log(typeof String(23));

// Type Coercion (automatic)
console.log('I am ' + 23 + ' years old');
console.log('23' - '10' - 3);
console.log('23' + '10' + 3);
console.log('23' * '2');

let n = '1' + 1;
n = n - 1;
console.log(n);

console.log("=== Exercise 1: Conversion Detective ===");

console.log("5" + 2); // Your guess: 52
console.log("5" - 2); // Your guess: 3
console.log("5" * 2); // Your guess: 10
console.log("5" / 2); // Your guess: 2.5

// Convert these explicitly:
const userAge = "25"; // Convert to number
const userScore = 95; // Convert to string

// Your code here...
console.log("Explicitly converted userAge to number:", Number(userAge));
console.log("Explicitly converted userScore to string:", String(userScore));

console.log("=== Exercise 2: Fix the Bug ===");

const num1 = Number(prompt("First number:"));
const num2 = Number(prompt("Second number:"));
const sum = num1 + num2;

console.log(`Sum: ${sum}`);

console.log("Equality Operators: == vs. ===");

const age = "18";
if (age === 18) console.log("You just became an adult! (strict)");
if (age == 18) console.log("You just became an adult! (loose)");

console.log("18" === 18);
console.log("18" == 18);
console.log(18 === 18);

console.log("0" == 0);
console.log(0 == false);
console.log("0" == false);
console.log(null == undefined);

console.log("" == 0);
console.log("   " == 0);

const favourite = Number(prompt("What's your favorite number?"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) {
    console.log("Cool! 23 is an amazing number!");
} else if (favourite === 7) {
    console.log("7 is also a cool number!");
} else if (favourite === 9) {
    console.log("9 is also a cool number!");
} else {
    console.log("Number is not 23 or 7 or 9");
}

if (favourite !== 23) console.log("Why not 23?");

console.log("EXERCISE 1: Equality Detective");

console.log(5 === "5"); // Your guess: false
console.log(5 == "5"); // Your guess: true
console.log(true === 1); // Your guess: false
console.log(true == 1); // Your guess: true
console.log(false === 0); // Your guess: false
console.log(false == 0); // Your guess: true

console.log("EXERCISE 2: Fix the Login System");

const username = "admin";
const password = "1234";

if (username === "admin" && password === "1234") {
  console.log("Welcome admin!");
} else {
  console.log("Access denied");
}

// Logical Operators:

const hasDriversLicense = true;
const hasGoodVision = true;

console.log(hasDriversLicense && hasGoodVision); 
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

const isTired = false;
console.log(hasDriversLicense && hasGoodVision && !isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
    console.log("Sarah is able to drive!");
} else {
    console.log("Someone else should drive...");
}   

const newAge = 20;
const hasPermission = true;
const hasExperience = false; 

if (newAge >= 18 || hasPermission || hasExperience) {
    console.log("You can drive!");
} else {
    console.log("You cannot drive yet.");
}

console.log("EXERCISE 1: Club Entry System");

const age2 = 22;
const hasID = true; // Try different values
const isVIP = false; // Try different values

// Your logic here:
if ((age >= 21 && hasID) || isVIP) {
  console.log('Welcome to the club!');
} else {
  console.log('Sorry, you cannot enter');
}

console.log("EXERCISE 2: Weather Advisor");

const temperature = 25; // Celsius
const isRaining = false;
const isWindy = true;

if (temperature >= 20 && temperature <= 30 && !isRaining && !isWindy) {
  console.log('Perfect day!');
} else if (temperature >= 15 && temperature <= 35 && !isRaining) {
  console.log('Good day!');
} else {
  console.log('Stay inside');
}

// The Conditional (Ternary Operator

const age3 = 23;

const drink = age3 >= 18 ? "wine" : "water";
console.log(drink);

let drink2;
if (age3 >= 18) {
    drink2 = "wine";
} else {
    drink2 = "water";
}
console.log(drink2);

console.log(`I like to drink ${age3 >= 18 ? "wine" : "water"}.`);

console.log("EXERCISE 1: Status Messages");

const isLoggedIn = true;
let welcomeMessage;
if (isLoggedIn) {
  welcomeMessage = "Welcome back!";
} else {
  welcomeMessage = "Please sign in";
}
// Ternary version:
const welcomeMessageTernary = isLoggedIn ? "Welcome back!" : "Please sign in";
console.log(welcomeMessageTernary);

// 2. Price with discount
const isPremium = false;
let price;
if (isPremium) {
  price = 100 * 0.8; // 20% discount
} else {
  price = 100;
}
// Ternary version:
const priceTernary = isPremium ? 100 * 0.8 : 100;
console.log(priceTernary);

console.log("EXERCISE 2: Smart Responses");

const score = 85;
const weather = "sunny";
const battery = 15; // percentage

console.log(`Your score: ${score} (${score >= 60 ? "Passed" : "Failed"})`);
console.log(`Weather is ${weather} (${weather === "sunny" ? "Great for outdoor activities" : "Stay inside"})`);
console.log(`Battery: ${battery}% (${battery <= 20 ? "Low battery warning" : "Battery OK"})`);

console.log("Final Challenge: Tip Calculator");

const bill = 275; 

const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);
