// Function construtor

/*
var Person = function(name, yearOfBirth, job) {
  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.job = job;
};

Person.prototype.calculateAge = function() {
  console.log(2016 - this.yearOfBirth);
};

Person.prototype.lastName = 'Smith';

Person.prototype.isRetired = function() {
 this.job === 'retired' ? console.log('is retired') : console.log('not retired')
};


var john = new Person('John', 1990, 'teacher');

var jane = new Person('Jane', 1969, 'designer');

var mark = new Person('Mark', 1948, 'retired');

john.isRetired();

console.log(john);
*/

// Object.create

/*
var personProto = {
  calculateAge: function () {
    console.log(2016 - this.yearOfBirth);
  }
}

var john = Object.create(personProto);
john.name = 'John';
john.yearOfBirth = 1990;
john.job = 'teacher';

var jane = Object.create(personProto, {
  name: { value: 'Jane' },
  yearOfBirth: { value: 1969},
  job: { value: 'designer'}
});
*/

// Primitives vs objects

/*
// oprimitives
var a = 23;
var b = a;
a = 46;

console.log(a, b);


// objects
var obj1 = {
  name: 'John',
  age: 26
};
var obj2 = obj1
obj1.age = 30;

console.log(obj1.age, obj2.age);

// functions

var age = 27;
var obj = {
  name: 'Jonas',
  city: 'Lisbon'
};

function change(a,b) {
  a = 30;
  b.city = 'San francisco';
}

change(age, obj);
console.log(age);
console.log(obj);
*/
// Lecture: Passing functions as arguments

/*
var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn) {
  var arrRes = [];
  for (var i = 0; i < arr.length; i++) {
    arrRes.push(fn(arr[i]));
  }
  return arrRes;
}

function calculateAge(el) {
  return 2016 - el;
}

function isFullAge(el) {
  return el >= 18
}

function maxHeartRate(el) {
  if (el >= 18 && el <= 81) {
    return Math.round(206.9 - ( 0.67 * el ));
  } else {
    return -1;
  }
}


var ages = arrayCalc(years, calculateAge);
console.log(ages);

var fullAges = arrayCalc(ages, isFullAge);
console.log(fullAges);

var heartRates = arrayCalc(ages, maxHeartRate)
console.log(heartRates);
*/
///////////////////////////////////////
// Lecture: Functions returning functions

/*
function interviewQuestion(job) {
  if (job === 'designer') {
      return function(name) {
        console.log(name + ', can you please explain what UX design is?');
    }
  } else if (job === 'teacher') {
      return function(name) {
        console.log(name + ', What subject do you teach?');
    }
  } else {
      return function(name) {
        console.log('Hello' + ', What do you do?');
    }
  }
}

var teacherQuestion = interviewQuestion('teacher');
var designerQuestion = interviewQuestion('designer');
teacherQuestion('John');
designerQuestion('John');
designerQuestion('Jane');
designerQuestion('Mark');

interviewQuestion('teacher')('Filipe');

function typeOfGame(game) {
  if (game === 'mmorpg') {
      return function() {
        return x = ['Wow', 'Warhammer', 'Destiny'];
    }
  } else if (game === 'fps') {
      return function() {
        return x = ['Counter-strike', 'Call of Duty', 'Fortnite'];
      }
  } else {
      return function() {
        console.log('Sorry we do know that type of game');
    }
  }
}

mmorpgArray = typeOfGame('mmorpg')();
fpsArray = typeOfGame('fps')();
console.log(mmorpgArray, fpsArray);
*/

///////////////////////////////////////////
// Lecture: IIFE

/*
function game() {
  var score = Math.random() * 10;
  console.log(score >= 5);
}

game();
*/

/*
(function () {
  var score = Math.random() * 10;
  console.log(score >= 5);
})();

// console.log(score);

(function (goodLuck) {
  var score = Math.random() * 10;
  console.log(score >= 5 - goodLuck);
})(5);
*/

///////////////////////////////
// Lecture: Closures

/*

function retirement(retirementAge) {
  return function(yearOfBirth) {
    var a = ' years left until retirement.';
    var age = 2016 - yearOfBirth
    console.log((retirementAge - age) + a)
  }
}

var retirementUS = retirement(66);
var retirementDE = retirement(65);
var retirementIsland = retirement(67);

retirementUS(1990);
retirementDE(1990);
retirementIsland(1990);

//retirement(66)(1990);

//////////////////////////////
// Small Challenge: Re-write the interview Question
// using closures

function interviewQuestion(job) {
  return function(name) {
    if (job === 'designer') {
      var a = ', can you please explain what UX design is?'
      console.log(name + a);
    } else if (job === 'teacher') {
      var a = ', What subject do you teach?'
      console.log(name + a);
    } else {
      a = ', What do you do?'
      console.log(name + a);
    }
  }
}

var questionDesigner = interviewQuestion('designer');
var questionTeacher = interviewQuestion('teacher');

questionDesigner('Filipe');
questionTeacher('Filipe');
*/


///////////////////////////////////////
// Lecture: Bind, call and apply

var john = {
    name: 'John',
    age: 26,
    job: 'teacher',
    presentation: function(style, timeOfDay) {
      if (style === 'formal') {
        console.log('Good ' + timeOfDay +
                    ', Ladies and gentlemen! I\'m ' + this.name
                    + ', I\'m a ' + this.job + ', and I\'m '
                    + this.age + ' years old.' );
      } else if (style === 'friendly') {
        console.log('Hey! What\'s up? I\'m ' + this.name
                    + ', I\'m a ' + this.job + ' and I\'m '
                    + this.age + ' years old.' + ' Have a nice '
                    + timeOfDay);
      }
    }
}

var emily = {
    name: 'Emily',
    age: 35,
    job: 'designer'
}

john.presentation('formal', 'morning');

john.presentation.call(emily, 'friendly', 'afternoon');

// john.presentation.apply(emily, ['friendly', 'afternoon']);

var johnFriendly = john.presentation.bind(john, 'friendly');

johnFriendly('morning');
johnFriendly('night');

var emilyFormal = john.presentation.bind(emily, 'formal');
emilyFormal('afternoon');

var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn) {
  var arrRes = [];
  for (var i = 0; i < arr.length; i++) {
    arrRes.push(fn(arr[i]));
  }
  return arrRes;
}

function calculateAge(el) {
  return 2016 - el;
}

function isFullAge(limit, el) {
  return el >= limit
}

var ages = arrayCalc(years, calculateAge)

var fullJapan = arrayCalc(ages, isFullAge.bind(this, 20));
console.log(ages);
console.log(fullJapan);
















































