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

  // easy solution for score, no need to create extra functions
  // because objects are mutable through functions and methods :)
  var game = {
    score: 0
  }

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
      game.score ++
    } else {
      console.log('Ups!! Wrong answer');
    }
  }


  // store the question objects into an array
  var questionsSample = [questionOne, questionTwo, questionThree];
  // randomize a question
  var questionsRand = Math.floor(Math.random(questionsSample) * questionsSample.length);


  function init() {
    // initialize the quiz game
    questionsSample[questionsRand].logQuestions();

    // prompt the question and save the answer in a variable
    // prompt inputs are always strings so we need to parse to int to match with
    // the array index
    var userAnswer = parseInt(window.prompt('Please type the correct answer!')) - 1;
    if (!isNaN(userAnswer)) {
      // check if the user answer is correct!!
      questionsSample[questionsRand].correctAnswer(userAnswer);
      console.log(`Your score: ${game.score}`)
      init();
    }
  }
  init();
})();
