console.log("=== OBJECTS AND DATA STRUCTURES ===");

// THE ARRAY PROBLEM
const nicoleArray = [
    "Nicole", "Recinto", 2037 - 2002, "Illustrator", ["Jygzy", "Princess", "Agatha"],
];

console.log(nicoleArray[0]);
console.log(nicoleArray[1]);
console.log(nicoleArray[2]);

console.log("=== OBJECTS ===");

const nicole = {
    firstname: "Nicole",
    lastName: "Recinto",
    age: 2037 - 2002,
    job: "Illustrator",
    friends: ["Jygzy", "Princess", "Agatha"],
};
console.log(nicole);

const nicoleObject = {
    firstName: "Nicole",
    lastName: "Recinto",
    age: 22,
    job: "Illustrator",
    friends: ["Jygzy", "Princess", "Agatha"],
};

nicole.job = "Programmer";
nicole["age"] = 20;
console.log(nicole);

nicole.location = "Japan";
nicole["twitter"] = "@nekoorru";
nicole.hasDriversLicense = false;
console.log(nicole);

// Use Arrays for:
const listOfYears = [2002, 2003, 2004, 2005];
const shoppingList = ["apples", "bananas", "milk", "bread"];
const testScores = [91, 92, 93, 94];

// Use Objects for:
const person = {
    name: "Louren",
    age: 20,
    occupation: "Programmer",
};

const car = {
    brand: "Toyota",
    model: "Camry",
    year: 2020,
    color: "black",
};