// Function construtor

var Person = function(name, yearOfBirth, job) {
  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.job = job;
  this.calculateAge = function() {
    console.log(2016 - this.yearOfBirth)
  }
};

var john = new Person('John', 1990, 'teacher');

john.calculateAge();

