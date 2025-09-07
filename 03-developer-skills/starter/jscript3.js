// Remember, we're gonna use strict mode in all scripts now!
'use strict';

console.log('=== HOUR 3: RESEARCH & DEBUGGING MASTERY ===');

console.log(
  'Goal: Master research and debugging like a professional developer'
);

console.log(
  'Strategic research builds lasting knowledge, not just quick fixes'
);

// PROFESSIONAL GOOGLE RESEARCH TECHNIQUES

function demonstrateArrayMax(numbers) {
  const method1 = Math.max(...numbers);

  let method2 = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > method2) method2 = numbers[i];
  }

  const method3 = numbers.reduce((max, current) =>
    current > max ? current : max
  );

  return { method1, method2, method3 };
}

const testNumbers = [3, 7, 2, 9, 1, 5];
const maxResults = demonstrateArrayMax(testNumbers);
console.log('Multiple approaches from research:', maxResults);

// STACK OVERFLOW RESEARCH RESULTS
function reverseStringMethods(str) {
  const method1 = str.split('').reverse().join('');

  let method2 = '';
  for (let i = str.length - 1; i >= 0; i--) {
    method2 += str[i];
  }

  const method3 = [...str].reverse().join('');

  return { method1, method2, method3 };
}

const reverseResults = reverseStringMethods('hello');
console.log('Stack Overflow research results:', reverseResults);

function demonstrateConcat() {
  const array1 = [1, 2, 3];
  const array2 = [4, 5, 6];
  const array3 = [7, 8, 9];

  const simple = array1.concat(array2);
  const multiple = array1.concat(array2, array3);

  console.log('Original array1 unchanged:', array1);

  return { simple, multiple };
}

const concatResults = demonstrateConcat();
console.log('MDN documentation applied:', concatResults);

// SYSTEMATIC DEBUGGING METHODOLOGY
function calculateAverageScore(scores) {
  let total;
  for (let i = 0; i <= scores.length; i++) {
    total += scores[i];
  }

  return total / (scores.length + 1);
}

const testScores = [85, 92, 78, 96, 88];
const buggyResult = calculateAverageScore(testScores);
console.log('Buggy result:', buggyResult);

// BROWSER DEVELOPERS TOOLS MASTERY
function demonstrateConsoleDebugging(data) {
  console.log('Debugging Session');

  console.log('Input data:', data);

  if (typeof data !== 'object') {
    console.warn('Warning: Expected object, got', typeof data);
  }

  console.table(data);
  console.groupEnd();

  return Array.isArray(data) ? data.length : Object.keys(data).length;
}

const arrayData = [1, 2, 3, 4, 5];
const objectData = { name: 'Nicole', age: 23, city: 'Manila' };

demonstrateConsoleDebugging(arrayData);
demonstrateConsoleDebugging(objectData);

// DEBUGGER STATEMENT AND BREAKPOINTS
function stepThroughDebugging(numbers) {
  debugger;

  let sum = 0;
  let count = 0;

  for (let i = 0; i < numbers.length; i++) {
    const currentNumber = numbers[i];

    console.log(`Processing index $[i]: value = ${currentNumber}`);

    if (typeof currentNumber === 'number') {
      sum += currentNumber;
      count++;
    } else {
      console.error(`Invalid number at index ${i}:`, currentNumber);
    }
  }

  const average = count > 0 ? sum / count : 0;
  console.log('Final results:', { sum, count, average });

  return average;
}

const mixedNumbers = [10, 20, 'error', 30, null, 40];
const debugResult = stepThroughDebugging(mixedNumbers);
console.log('Debug session result:', debugResult);

// SYSTEMATIC BUG FIXING APPLICATION
function calculateAverageScoreFixed(scores) {
  if (!Array.isArray(scores) || scores.length === 0) {
    console.error('Invalid input: scores must be a non-empty array');
    return 0;
  }

  let total = 0;
  for (let i = 0; i < scores.length; i++) {
    if (typeof scores[i] === 'number') {
      total += scores[i];
    } else {
      console.warn(`Skipping non-number value at index ${i}:`, scores[i]);
    }
  }

  return total / scores.length;
}

const fixedResults = calculateAverageScoreFixed(testScores);
console.log('Fixed result:', fixedResults);
