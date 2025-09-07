// Remember, we're gonna use strict mode in all scripts now!
'use strict';

console.log('=== HOUR 4: ADVANCED PROBLEM-SOLVING MASTERY ===');

console.log('ready to tackle complex problems using systematic approaches');
console.log('Challenge: Build solutions that work under pressure');

// WEATHER FORECAST CHALLENGE
const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

function printForecast(arr) {
  let str = '';

  for (let i = 0; i < arr.length; i++) {
    str += `${arr[i]}°C in ${i + 1} days ... `;
  }

  console.log('...' + str);
}

printForecast(data1);
printForecast(data2);

console.log('Weather forecast formatter working correctly!');

// ALTERNATIC IMPLEMENTATIONS

//Alternative 1
function printForecastMap(arr) {
  const formatted = arr.map((temp, index) => `${temp}°C in ${index + 1} days`);
  console.log('...' + formatted.join(' ... ') + ' ...');
}

// Alternative 2
function printForecastReduce(arr) {
  const result = arr.reduce(
    (acc, temp, index) => acc + `${temp}°C in ${index + 1} days ... `,
    '...'
  );
  console.log(result);
}

// Test alternative approaches
console.log('Testing alternative implementation:');
printForecastMap(data1);
printForecastReduce(data1);

////////////////////////////////////
// TIME-PRESSURED CHALLENGE: Work Hours Analyzer

function analyzeWorkWeek(dailyHours) {
  const totalHours = dailyHours.reduce((sum, hours) => sum + hours, 0);

  const averageHours = Math.round((totalHours / dailyHours.length) * 10) / 10;

  const maxHours = Math.max(...dailyHours);
  const maxDayIndex = dailyHours.indexOf(maxHours);
  const days = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ];
  const maxDay = days[maxDayIndex];

  const daysWorked = dailyHours.filter(hours => hours > 0).length;

  const isFullTime = totalHours >= 35;

  return {
    totalHours,
    averageHours,
    maxDay,
    daysWorked,
    isFullTime,
  };
}

const weeklyHours = [7.5, 8, 6.5, 0, 8.5, 4, 0];
const analysis = analyzeWorkWeek(weeklyHours);
console.log('Work week analysis:', analysis);

console.log('Challenge completed under time pressure!');

// Optimized version with error handling
function analyzeWorkWeekOptimized(dailyHours) {
  if (!Array.isArray(dailyHours) || dailyHours.length !== 7) {
    console.error('Invalid input: Expected array of 7 daily hours');
    return null;
  }

  const totalHours = dailyHours.reduce((sum, hours) => sum + hours, 0);
  const averageHours = Math.round((totalHours / 7) * 10) / 10;
  const maxHours = Math.max(...dailyHours);
  const maxDayIndex = dailyHours.indexOf(maxHours);
  const daysWorked = dailyHours.filter(hours => hours > 0).length;

  const dayNames = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ];

  return {
    totalHours,
    averageHours,
    maxDay: dayNames[maxDayIndex],
    daysWorked,
    isFullTime: totalHours >= 35,
    workingDays: dailyHours
      .map((hours, index) => (hours > 0 ? dayNames[index] : null))
      .filter(day => day !== null),
  };
}

const optimizedAnalysis = analyzeWorkWeekOptimized(weeklyHours);
console.log('Optimized analysis:', optimizedAnalysis);

// Buggy Code
function legacyForecastFunction(temperatures) {
  var result = '';
  for (var i = 1; i <= temperatures.length; i++) {
    result = result + temperatures[i] + ' degrees in day ' + i + ', ';
  }
  return result;
}

const testData = [15, 18, 22, 19];
console.log('Buggy function output:', legacyForecastFunction(testData));

// SYSTEMATIC DEBUGGING AND ENHANCEMENT
function enhancedForecastFunction(temperatures, options = {}) {
  if (!Array.isArray(temperatures) || temperatures.length === 0) {
    console.error('Invalid input: temperatures must be a non-empty array');
    return '';
  }

  const { unit = '°C', separator = '...', includeIndex = true } = options;

  let result = '';

  for (let i = 0; i < temperatures.length; i++) {
    const dayNumber = includeIndex ? i + 1 : i;
    result += `${temperatures[i]}${unit} in ${dayNumber} days${separator}`;
  }

  return separator + result.slice(0, -separator.length);
}

console.log('Enhanced function (default):', enhancedForecastFunction);
console.log(
  'Enhanced function (custom):',
  enhancedForecastFunction(testData, {
    unit: '°F',
    separator: ' | ',
    includeIndex: true,
  })
);

console.log('🎯 Complete developer skills successfully applied!');
console.log('Legacy code debugged, fixed, and enhanced systematically');
