
// Function Constructor


(function() {
  function Question(quest, answers, correctAnswer) {
    this.quest = quest;
    this.answers = answers;
    this.correctAnswer = correctAnswer;
  };

  Question.prototype.displayQuestion = function() {
    console.log(this.quest);
    for (var i = 0; i < this.answers.length; i++) {
      console.log(i + ': ' + this.answers[i]);
    }
  }

  Question.prototype.checkAnswer = function(ans, callback) {
    var sc;
    if(ans === this.correctAnswer) {
      console.log('Correct!');
      sc = callback(true);
    } else {
      console.log('Incorrect!');

      sc = callback(false);
    }

    this.displayScore(sc);
  }

Question.prototype.displayScore = function(score) {
   console.log('----------------------')
   console.log('Your current score is: ' + score);
   console.log('----------------------')
}



function score() {
  var sc = 0;
  return  function(correct) {
    if(correct) {
      sc++;
    }
    return sc;
  }
}

var keepScore =  score();

var quest1 = new Question("How is life?", ["Good", "Bad"], 0);
var quest2 = new Question("Do you Work?", ["No", "Yes"], 1);
var quest3 = new Question("What is your favorite color?", ["Red", "Green", "Blue"], 2);

var questions = [quest1, quest2, quest3];

function nextQuestion() {

  var n = Math.floor(Math.random()* questions.length);

  questions[n].displayQuestion();

  var answer = prompt('Please select answer.');

  if(answer !== 'exit') {
    questions[n].checkAnswer(parseInt(answer), keepScore);
    nextQuestion();
  }


}

nextQuestion();



}) ();
