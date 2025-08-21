// JavaScript Fundamentals - Part 2
// We'll write our code here!

console.log("=== MATH OPERATORS ===");

const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3); 

console.log("Math operations:");
console.log("Addition:", 10 + 5);
console.log("Subtraction:", 20 - 8);
console.log("Multiplication:", 4 * 7);
console.log("Division:", 15 / 3);
console.log("Exponentiation:", 2 ** 3);

const firstName = "Jonas";
const lastName = "Schmedtmann";
console.log(firstName + " " + lastName);

console.log("Hello " + "World" + "!");
console.log("I am " + 25 + " years old.");

console.log("=== ASSIGNMENT OPERATORS ===");

let x = 10 + 5;
console.log("x starts as:", x);

x += 10;
console.log("After += 10:", x);

x *= 4;
console.log("After *= 4:", x);

x /= 2;
console.log("After /= 2:", x);

x ++;
console.log("After ++:", x);

x --;
x --;
console.log("After x-- twice:", x);

console.log("=== Exercise: Score Calculator ===");

let score = 100;
score += 50;
score *= 2;
score -= 25;
score ++;
score ++;
console.log("Final score:", score);

console.log("=== COMPARISON OPERATORS ===");

console.log("Age comparisons:");
console.log(ageJonas > ageSarah);
console.log(ageSarah >= 18);
console.log(ageJonas < 30);

console.log("Number comparisons:");
console.log(25 > 20);
console.log(15 < 10);
console.log(18 >= 18);
console.log(16 <= 15);

const isFullAge = ageSarah >= 18;
console.log("Sarah is full age:", isFullAge);

const isJonasOlder = ageJonas > ageSarah;
console.log("Is Jonas older than Sarah?", isJonasOlder);

console.log("Complex comparisons:");
console.log(now - 1991 > now - 2018);

const myAge = 22;
console.log(myAge >= 18 ? "I am an adult." : "I am a minor.");
console.log("is 100 greater than 99?", 100 > 99);
const firstCalculation = 50 + 50;
const secondCalculation = 90 - 10;
console.log("Is 100 equal to 80?", firstCalculation === secondCalculation); // Logs: false
console.log("Is 100 greater than 80?", firstCalculation > secondCalculation); // Logs: true

console.log("=== OPERATOR PREDEDECENCE ===");

console.log(now - 1991 > now - 2018);

let z, y;
z = y = 25 - 10 - 5;
console.log(z, y);

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);

console.log("=== BMI Challenge ===");

const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const bmiMark2 = massMark / (heightMark ** 2);
const bmiJohn2 = massJohn / (heightJohn ** 2);

const markHigherBMI2 = bmiMark2 > bmiJohn2;

console.log("--- Test Data 2 ---");
console.log("Mark's BMI:", bmiMark2);
console.log("John's BMI:", bmiJohn2);
console.log("Does Mark have a higher BMI than John?", markHigherBMI2);
