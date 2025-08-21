// JavaScript Fundamentals - Part 3
// We'll write our code here!

// Strings and Template Literals

const firstName = "Jonas";
const job = "teacher";
const birthYear = 1991;
const year = 2037;

const jonas = "I'm " + firstName + ", a " + (year - birthYear) + " year old " + job + "!";
console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(jonasNew);

console.log(`I'm ${2037 - 1991} years old`);
console.log(`Math works: ${2 + 3} equals five`);
console.log(`Comparisons too: ${5 > 3}`); 

console.log(`Just a regular string...`);

console.log(
    "String with \n\
    multiple \n\
    lines");

console.log(`String with
    multiple
    lines`);

console.log("=== EXERCISE 1: PERSONAL INTRODUCTION ===");

const myName = "Nicole";
const myAge = 22;
const myJob = "Illustrator";
const currentYear = 2025;

console.log(`Hello, my name is
     ${myName}. I am ${myAge}
      years old and I work as an
       ${myJob}. The current year is
        ${currentYear}.`);

console.log("=== EXERCISE 2: MATH IN TEMPLATES ===");

const templateLiteral = `Born in
     ${currentYear - myAge}, 10 * 5 = ${10 * 5},
      Adult: ${myAge >= 18}`;

console.log(templateLiteral);

const age = 15;

if (age >= 18) {
  console.log("Sarah can start driving license 🚗");
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
}

const birthYearSarah = 2012;

let century;
if (birthYearSarah <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);

const score = 85;

if (score >= 60) {
  console.log(`You passed with ${score} points! 🎉`);
  console.log("Congratulations!");
} else {
  const pointsNeeded = 60 - score;
  console.log(`You failed. Need ${pointsNeeded} more points.`);
}

console.log("Exercise 1: Grade calculator:");

const testScore =88; 

if (testScore >= 90) {
  console.log("Excellent! Grade A");
} else if (testScore >= 80) {
  console.log("Good job! Grade B");
} else if (testScore >= 70) {
  console.log("Not bad! Grade C");
} else if (testScore >= 60) {
  console.log("You passed! Grade D");
} else {
  console.log("You failed! Study harder");
}

console.log("Exercise 2: Age verification:");

const userAge = 11;

if (userAge >= 18) {
  console.log("Welcome! You can access all content");
} else if (userAge >= 13) {
  console.log("Welcome! Restricted content only");
} else {
  console.log("Sorry, you're too young");
}

// Truthy and Falsy Values
console.log("=== TRUTHY AND FALSY VALUES ===");

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean({}));
console.log(Boolean(""));

const money = 0;
if (money) {
  console.log("Don't spend it all ;)");
} else {
  console.log("You should get a job!");
    }

    let height = 0;
    if (height) {
      console.log("YAY! Height is defined");
    } else {
      console.log("Height is UNDEFINED");
    }

    if (height!== undefined) {
      console.log(" Height is defined");
    }

    console.log(" Exercise: Truth Detector");

    const values = [0, 1, "", "hello", undefined, null, NaN, {}, []];

values.forEach(value => {
  console.log("Value:", value);
  console.log("Boolean:", Boolean(value));
  if (value) {
    console.log("Truthy!");
  } else {
    console.log("Falsy!");
  }
  console.log("---");
});

console.log("=== CODING CHALLENGE #2: BMI COMPARISON ===");

const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);

if (BMIMark > BMIJohn) {
  console.log(`Mark's BMI (${BMIMark.toFixed(2)}) is higher than John's (${BMIJohn.toFixed(2)})!`);
} else {
  console.log(`John's BMI (${BMIJohn.toFixed(2)}) is higher than Mark's (${BMIMark.toFixed(2)})!`);
}