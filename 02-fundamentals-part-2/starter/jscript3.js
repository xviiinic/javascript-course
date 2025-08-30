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

const student = {
  name: "Angela",
  grades: [85, 92, 78], 
  address: {
    street: "123 Main St",
    city: "Manila",
  },
};

console.log(student.grades[0]); 
console.log(student.address.city); 

// OBJECT METHODS
const flayon = {
    firstName: "Flayon",
    lastName: "Machina",
    birthYear: 1995,
    job: "Pilot",
    friends: ["Bettel", "Octavio", "Hakka"],
    hasDriversLicense: true,

    calcAge: function (birthYear) {
        return 2037 - birthYear;
    },
};

console.log(flayon.calcAge(1991));
console.log(flayon.calcAge(flayon.birthYear));

const flayonImproved = {
    firstName: "Flayon",
    lastName: "Machina",
    birthYear: 1995,
    job: "Pilot",
    friends: ["Bettel", "Octavio", "Hakka"],
    hasDriversLicense: true,

    calcAge: function () {
        console.log(this);
        return 2025 - this.birthYear;
    },
};

console.log(flayonImproved.calcAge());

const flayonAdvanced = {
    firstName: "Flayon",
    lastName: "Machina",
    birthYear: 1995,
    job: "Pilot",
    friends: ["Bettel", "Octavio", "Hakka"],
    hasDriversLicense: true,

    calcAge: function () {
        this.age = 2025 - this.birthYear;
        return this.age;
    },

    getSummary: function () {
        return `${this.firstName} is a ${this.calcAge()}-year-old ${this.job},
        and he has ${this.hasDriversLicense ? "a" : "no"} driver's license`;
    },
};

console.log(flayonAdvanced.calcAge());
console.log(flayonAdvanced.age);
console.log(flayonAdvanced.getSummary());


