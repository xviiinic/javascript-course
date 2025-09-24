'use strict';

// console.log('=== BEHIND THE SCENES: SCOPING & HOISTING ===');

// function alpha() {
//   console.log('alpha:start');
//   beta();
//   console.log('alpha:end');
// }

// function beta() {
//   console.log('beta');
// }

// alpha();

// function demoScope() {
//     const inner = 'function';
//     if (true) {
//         const blockConst = 'block';
//         var functionVar = 'var-function-scoped';
//         console.log(outer, inner, blockConst, function)
//     }
//     console.log(outer, inner, functionVar);
// }

// demoScope();

// console.log(varX);
// // console.log(letX);
// // console.log(constX);

// var varX = 1;
// let letX = 2;
// const constX = 3;

// console.log(addDecl(2, 3));
// console.log(addExpr(2, 3));

// function addDecl(a, b) {
//   return a + b;
// }

// const addExpr = function (a, b) {
//   return a + b;
// };

// const addArrow = (a, b) => a + b;

// const person = {
//   name: 'Jonas',
//   greet: function () {
//     console.log(`Hello I am ${this.name}`);
//   },
// };

///////////
// person.greet();

// const anotherPerson = {
//   name: 'Sarah',
// };

// anotherPerson.greet = person.greet;
// anotherPerson.greet();

// //  DETACHED FUNCTION
// const greetFunction = person.greet;
// greetFunction();

///////////
// const button = document.querySelector('button');
// button.addEventListener('click', person.greet);
// button.addEventListener('click', () => person.greet());
// button.addEventListener('click', person.greet.bind(person));

/////////
// const obj = {
//   name: 'Object',
//   regularMethod: function () {
//     console.log('Regular:', this.name);
//   },

//   arrowMethod: () => {
//     console.log('Arrow:', this.name);
//   },
// };

// quiz.regularMethod();
// quiz.arrowMethod();

//////////
// const timer = {
//   name: 'Timer',
//   start: function () {
//     console.log(`${this.name} starting...`);

//     const self = this;

//     selfTimeout(function () {
//       console.log(`${self.name} finished`);
//     }, 1000);
//   },
//   startMordern: function () {
//     console.log(`${this.name} starting modern...`);

//     setTimeout(() => {
//       console.log(`${this.name} finished modern`);
//     }, 1500);
//   },
// };

// timer.start();
// timer.startMordern();

// const user = {
//   name: 'Alice',
//   hobbies: ['reading', 'coding', 'gaming'],

//   // BROKEN: arrow function loses `this`
//   printHobbiesBad: () => {
//     this.hobbies.forEach(hobby => {
//       console.log(`${this.name} likes ${hobby}`); // this.name is undefined!
//     });
//   },

//   // FIXED: regular function preserves `this`
//   printHobbiesGood() {
//     this.hobbies.forEach(hobby => {
//       console.log(`${this.name} likes ${hobby}`); // this.name works!
//     });
//   },
// };

// user.printHobbiesBad(); // Fails - this.name is undefined
// user.printHobbiesGood(); // Works - shows all hobbies

const functionTypes = {
  regularFunction: function () {
    console.log('Arguments length:', arguments.length);
    console.log('First argument:', arguments[0]);
  },

  arrowFunction: () => {
    console.log(arguments);
    console.log('Arrow function called');
  },

  modernFunction: (...args) => {
    console.log('Args length:', args.length);
    console.log('First arg:', args[0]);
  },
};

functionTypes.regularFunction('hello', 'world');
// functionTypes.arrowFunction('test');
functionTypes.modernFunction('modern', 'approach');
