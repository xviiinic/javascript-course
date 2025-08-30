console.log("=== ARRAYS AND DATA MANIPULATION ===");

const grades = [85, 92, 78, 96, 88];
console.log(grades);

// ARRAYS
const friends = ["Jygzy", "Agatha", "Louren"];
console.log(friends);

const mixed = ["Nicole", 22, true, friends];
console.log(mixed);

const years = new Array (1991, 2002, 1976, 1994);
console.log(years);

console.log(friends[0]);
console.log(friends[1]);
console.log(friends[2]);

console.log(friends.length);

console.log(friends[friends.length - 1]);

friends [1] = "Princess";
console.log(friends);

const firstName = "Nicole";
const jonas = [firstName, "Recinto", 2020 - 2002];
console.log(jonas);

const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const ages = [calcAge(1991), calcAge(1967), calcAge(2002)];
console.log(ages);

// ARRAY METHODS
const newLength = friends.push("Agatha");
console.log(friends);
console.log(newLength);

friends.unshift("Agatha");
console.log(friends);

const popped = friends.pop();
console.log(popped);
console.log(friends);

const shifted = friends.shift();
console.log(shifted);
console.log(friends);

console.log(friends.indexOf("Jygzy"));
console.log(friends.indexOf("Arden"));

console.log(friends.includes("Jygzy"));
console.log(friends.includes("Arden"));

// ARRAY ITERATION - LOOPS

for (let i = 0; i < friends.length; i++) {
  console.log(friends[i]);
}

for (let i = 0; i < years.length; i++) {
  ages.push(2037 - years[i]);
}
console.log(ages);

friends.forEach(function (friend, index) {
    console.log(`${index}: ${friend}`);
});

friends.forEach((friends, index) => {
    console.log(`Friend ${index + 1}: ${friends}`);
});

let total = 0;

for (let i = 0; i < grades.length; i++) {
  total += grades[i];
}
const average = total / grades.length;
console.log(`Average grade: ${average.toFixed(2)}`);

let passedCount = 0;
grades.forEach((grade) => {
  if (grade >= 70) passedCount++;
});
console.log(`${passedCount} out of ${grades.length} students passed`);

