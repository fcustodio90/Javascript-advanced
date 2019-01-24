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

/*
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
*/

/*
--- Let's build a fun quiz game in the console! ---

1. Build a function constructor called Question to describe a question.
A question should include:
a) question itself
b) the answers from which the player can choose the correct one
(choose an adequate data structure here, array, object, etc.)
c) correct answer (I would use a number for this)

2. Create a couple of questions using the constructor

3. Store them all inside an array

4. Select one random question and log it on the console,
together with the possible answers (each question should have a number)
(Hint: write a method for the Question objects for this task).

5. Use the 'prompt' function to ask the user for the correct answer.
The user should input the number of the correct answer such as you
displayed it on Task 4.

6. Check if the answer is correct and print to the console whether
the answer is correct ot nor (Hint: write another method for this).

7. Suppose this code would be a plugin for other programmers to use
in their code. So make sure that all your code is private and doesn't interfere
 with the other programmers code (Hint: we learned a special technique to do
 exactly that).
*/
/*
--- Expert level ---

8. After you display the result, display the next random question,
 so that the game never ends (Hint: write a function for this and
 call it right after displaying the result)

9. Be careful: after Task 8, the game literally never ends.
So include the option to quit the game if the user writes 'exit'
instead of the answer. In this case, DON'T call the function from task 8.

10. Track the user's score to make the game more fun! So each time an answer is correct, add 1 point to the score (Hint: I'm going to use the power of closures for this, but you don't have to, just do this with the tools you feel more comfortable at this point).

11. Display the score in the console. Use yet another method for this.
*/

(function () {
  var Question = function(questions, answers, solution) {
      this.questions = questions;
      this.answers = answers;
      this.solution =  solution
  };

  // 1- Question: Is javascript the coolest programming language in the world?
  // 1- Answer: Yes or No
  var questionOne = new Question('Is Javascript the coolest programming in the world?',
                                  ['Yes', 'No'], 0);

  // 2- Question: What is the name of this course teacher?
  // 2- Answer: John, Michael, Jonas
  var questionTwo = new Question('What is the name of this course teacher?',
                                  ['John', 'Michael', 'Jonas'], 2);

  // 3- Question: What does best describe coding?
  // 3- Boring, Hard, Fun, Tedious
  var questionThree = new Question('What does best describe coding?',
                                    ['Boring','Hard','Fun','Tedious'], 2);

  Question.prototype.logQuestions = function() {
    // log the specific object question
    console.log(this.questions);
    // set the counter to log the indexes later
    var counter = 0
    // iterate the answers array
    this.answers.forEach(function(el) {
      // increment the index
      counter ++
      // log the index + answer
      console.log(`${counter}:${el}`);
    });
  }

  Question.prototype.correctAnswer = function(answer) {
    // check if user answer is the same as object solution
    if (answer === this.solution) {
      console.log('Super!! Correct Answer');
      // callback function
    } else {
      console.log('Ups!! Wrong answer');
      // callback function
    }
  }

  // store the question objects into an array
  var questionsSample = [questionOne, questionTwo, questionThree];
  // randomize a question
  var questionsRand = Math.floor(Math.random(questionsSample) * questionsSample.length);

  // initialize the quiz game
  questionsSample[questionsRand].logQuestions();

  // prompt the question and save the answer in a variable
  // prompt inputs are always strings so we need to parse to int to match with
  // the array index
  var userAnswer = parseInt(window.prompt('Please type the correct answer!')) - 1;

  // check if the user answer is correct!!
  questionsSample[questionsRand].correctAnswer(userAnswer);
})();































