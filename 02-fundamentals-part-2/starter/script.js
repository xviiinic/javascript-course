console.log("Part 2: Functions ready!");

/// Functions - Declarations and Expressions
console.log("=== FUNCTIONS ===");

function logger() {
    console.log("My name is Nicole");
}

logger();
logger();  
logger();

function fruitProcessor(apples, oranges) {
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

const juice1 = fruitProcessor(3, 3);
const juice2 = fruitProcessor(10, 0);
const juice3 = fruitProcessor(0, 10);

const calcAge = function (birthYear) {
    return 2037 - birthYear;
};

const age1 = calcAge(1991);
console.log(age1);

function calcAge2(birthYear, currentYear) {
    const age = currentYear - birthYear;
    return age;
}

const myAge = calcAge2(1991, 2037);
const herAge = calcAge2(2018, 2037);

console.log(`I am ${myAge} years old`);
console.log(`She is ${herAge} years old`);

function introduce(firstName, lastName, age) {
    const introduction = `Hi, I am ${firstName} ${lastName}, and I am ${age} years old.`;
    return introduction;
}

console.log(introduce("Nicole", "Recinto", 22));
console.log(introduce("Jygzy"));

// Return Values and Scope

function calcAge2(birthYear) {
    return 2037 - birthYear;
}

function yearsUntilRetirement(birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;

    if (retirement > 0) {
        return `${firstName} retires in ${retirement} years.`;
    } else {
        return `${firstName} has already retired.`;
    }
}  
console.log(yearsUntilRetirement(2002, "Nicole"));
console.log(yearsUntilRetirement(1966, "Flora"));

// Global Scope
const globalVar = "I am global";

function testScope() {
    const localVar = "I am local";
    console.log(globalVar);
    console.log(localVar);
}

testScope();
console.log(globalVar);

const userName = "Nicole"; // Global

function createWelcomeMessage(user) {
  const message = `Welcome back, ${user}!`; // Local to function
  const timestamp = new Date().toLocaleTimeString(); // Local to function

  return `${message} Current time: ${timestamp}`;
}

console.log(createWelcomeMessage(userName));

