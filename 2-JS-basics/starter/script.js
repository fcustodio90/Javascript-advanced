/*************************
* Variables and data types
*/

/*

var firstName =  'John';
console.log(firstName);

var lastName = 'Smith';
var age = 28;

var fullAge = true;
console.log(fullAge);

var job;
console.log(job);

job = 'Teacher';
console.log(job);

// Variable naming rules
var _3years = 3;
var johnMark = 'John and Mark';
var delete = 23;

*/

/*************************
* Variable mutation and type coercion
*/

/*
var firstName = 'John';
var age = 28;

// type coercion
console.log(firstName + ' ' + age);

var job, isMarried;
job = 'teacher';
isMarried = false;

console.log(firstName + ' is a ' + age + ' year old '
 + job + '. is he married? ' + isMarried);

// variable mutation
age = 'twenty eight';
job = 'driver';


alert(firstName + ' is a ' + age + ' year old '
 + job + '. is he married? ' + isMarried);

var lastName = prompt('What is his last Name?');
console.log(firstName + ' ' + lastName);

*/

/*************************************
* Basic Operators
*/

/*
var now, yearJohn, yearMark, ageJohn, ageMark
now = 2020;
ageJohn = 28;
ageMark = 33;

// Math operators
yearJohn = now - 28;
yearMark = now - 33;

console.log(yearJohn);

console.log(now + 2);
console.log(now * 2);
console.log(now / 10);


// Logical Operators
var johnOlder = ageJohn < ageMark;
console.log(johnOlder);

// typeof operator
console.log(typeof johnOlder);
console.log(typeof ageJohn);
console.log(typeof 'Mark is older than John');
var x;
console.log(typeof x);

*/

/**************************
* Operator precedence
*/

/*
var now = 2018;
var yearJohn = 1989;
var fullAge = 18;

// Multiple Operators
var isFullAge = now - yearJohn >= fullAge; // true
console.log(isFullAge);

// Grouping
var ageJohn = now - yearJohn;
var ageMark = 35;
var average = (ageJohn + ageMark) / 2;
console.log(average);

// Multiple assignments
var x, y;
x = y = (3 + 5) * 4 - 6; // 32 - 6 = 26
console.log(x, y);

// More operators

x *= 2;
console.log(x);
x += 10;
console.log(x);
x--;
console.log(x);
*/

/***************************************************************
* CODING CHALLENGE 1
Mark and John are trying to compare their BMI (Body Mass Index),
which is calculated using the formula: BMI = mass / height^2 = mass / (height * height). (
mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs
3. Create a boolean variable containing information about whether Mark
has a higher BMI than John.
4. Print a string to the console containing the variable from step 3.
(Something like "Is Mark's BMI higher than John's? true").

*/

/*
var markMass, markHeight, markBmi, johnMass, johnHeight, johnBmi
markMass = 80;
markHeight = 1.8;
markBmi = markMass / (markHeight * markHeight);
johnMass = 60;
johnHeight = 1.9;
johnBmi = johnMass / (johnHeight * johnHeight);

var markBmiHigher = markBmi > johnBmi;

console.log('Is Mark\'s BMI higher than John\'s?' + ' ' + markBmiHigher);

*/

/********************
* If / else statements
*/


/*
var firstName = 'John';
var civilStatus = 'single';

if (civilStatus === 'married') {
  console.log(firstName + ' is married!');
} else {
  console.log(firstName + ' is not married!');
};

var isMarried = true;

if (isMarried) {
  console.log(firstName + ' is married!');
} else {
  console.log(firstName + ' is not married!');
};

var markMass, markHeight, markBmi, johnMass, johnHeight, johnBmi

markMass = 80;
markHeight = 1.8;
markBmi = markMass / (markHeight * markHeight);

johnMass = 160;
johnHeight = 1.9;
johnBmi = johnMass / (johnHeight * johnHeight);

if (markBmi > johnBmi) {
  console.log('Mark\'s BMI is higher !');
} else {
  console.log('Mark\'s BMI is lower');
}

*/

/******************************
* Boolean logic
*/

/*
var firstName = 'John';
var age = 20;

if (age < 13) {
  console.log(firstName + ' is a boy.');
} else if (age >= 13 && age < 20) { // between 13 and 20
  console.log(firstName + ' is a teenager.');
} else if (age >= 20 && age < 30) {
  console.log(firstName + ' is a young man.');
} else {
  console.log(firstName + ' is a man.');
}
*/

/* The ternary Operator and switch statements
*
*/


/*

var firstName = 'John';
var age = 14;

// Ternary operator
age >= 18 ? console.log(firstName + ' drinks beer!')
          : console.log(firstName + ' drinks juice!');

var drink = age >= 18 ? 'beer' : 'juice';
console.log(drink);

// if (age >= 18) {
//   var drink = 'beer';
// } else  {
//   var drink = 'water';
// }

// Switch statement
var job = 'instructor';

switch(job) {
  case 'teacher':
  case 'instructor':
    console.log(firstName + ' teaches kids how to code.');
    break;
  case 'driver':
    console.log(firstName + ' drives an uber in Lisbon.');
    break;
  case 'designer':
    console.log(firstName + ' designs websites.');
    break;
  default:
    console.log(firstName + ' Does not have a work.');
}


switch(true) {
  case age < 13:
    console.log(firstName + ' is a boy.');
    break;
  case age >= 13 && age < 20:
    console.log(firstName + ' is a teenager.');
    break;
  case age >= 20 && age < 30:
    console.log(firstName + ' is a young man.');
    break;
  default:
    console.log(firstName + ' is a man.')
}
*/

/**********************************************
*Truthy and Falsy values and equality operators
*/

// falsy values: undefined, null, 0, '', NaN
// truthy values: Not falsy values

/*
var height;

height = 23;

if (height || height === 0) {
  console.log('Variable is defined');
} else {
  console.log('The variable has not been defined.');
}

// Equality operators

if (height === '23') {
  console.log('The == operator des type coercion!');
}
*/

/*****************************
* CODING CHALLENGE 2
*/

/*
John and Mike both play basketball in different teams.
In the latest 3 games, John's team scored 89, 120 and 103 points,
while Mike's team scored 116, 94 and 123 points.

1. Calculate the average score for each team

2. Decide which teams wins in average (highest average score),
and print the winner to the console. Also include the average
score in the output.

3. Then change the scores to show different winners. Don't forget
to take into account there might be a draw (the same average score)

4. EXTRA: Mary also plays basketball, and her team scored 97, 134 and
105 points. Like before, log the average winner to the console. HINT:
you will need the && operator to take the decision. If you can't solve
this one, just watch the solution, it's no problem :)

5. Like before, change the scores to generate different winners,
keeping in mind there might be draws.

GOOD LUCK 😀
*/

/*
var scoreMike, scoreJohn, scoreMary
var avgMike, avgJohn, avgMary

scoreMike = [89, 120, 103];
scoreJohn = [116, 94, 123];
scoreMary = [97, 134, 105];

avgMike = eval(scoreMike.join('+'))/(scoreMike.length);
avgJohn = eval(scoreJohn.join('+'))/(scoreJohn.length);
avgMary = eval(scoreMary.join('+'))/(scoreMary.length);

console.log(avgMike, avgJohn, avgMary);

switch(true) {
  case avgMike > avgJohn && avgMike > avgMary:
    console.log('Mike wins the game!');
    break;
  case avgJohn > avgMike && avgJohn > avgMary:
    console.log('John wins the game!');
    break;
  case avgMary > avgMike && avgMary > avgJohn:
    console.log('Mary wins the game!');
    break;
  default:
    console.log('A DRAW MOTHAFOCKAS!!!');
    break;
}

*/


/**********************************
* Functions
*/

/*
function calculateAge(birthYear) {
  return 2018 - birthYear;
}

var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1948);
var ageJane = calculateAge(1969);
console.log(ageJohn, ageMike, ageJane);

function yearsUntilRetirement(year, firstName) {
  var age = calculateAge(year);
  var retirement = 65 - age;

  if (retirement > 0 ) {
    console.log(firstName + ' retires in ' + retirement + ' years');
  } else {
    console.log(firstName + ' is retired already');
  }
}

yearsUntilRetirement(1990, 'John');
yearsUntilRetirement(1948, 'Mike');
yearsUntilRetirement(1969, 'Jane');

*/

/************************************
* Function statements and Expressions
*/

// Function Declaration

//function whatDoYouDo(job, firstName) {

//}


// Function expression
var whatDoYouDo = function(job, firstName) {
  switch(job) {
    case 'teacher':
      return firstName + ' teaches kids how to code';
    case 'driver':
      return firstName + ' drives an uber in Lisbon.';
    case 'designer':
      return firstName + ' designs websites.';
    default:
      return firstName + ' does something else.';
  }
}

console.log(whatDoYouDo('teacher', 'John'));
console.log(whatDoYouDo('driver', 'John'));
console.log(whatDoYouDo('designer', 'John'));
console.log(whatDoYouDo('investor', 'John'));


























































































































































































































































































