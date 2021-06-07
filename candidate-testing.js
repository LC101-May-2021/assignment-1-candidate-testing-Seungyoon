const input = require('readline-sync');

let candidateName = "";
let candidateAnswers = [];
let correctAnswers = 0;
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer = "" ;

let questions = [
  "1) Who was the first American woman in space? ",
  "2) True or false: 5000 meters = 5 kilometers. ",
  "3) (5 + 3)/2 * 10 = ? ",
  "4) Given the array [8, \"Orbit\", \"Trajectory\", 45], what entry is at index 2? ",
  "5) What is the minimum crew size for the ISS? "
  ]
  
let answerKeys = [
  "Sally Ride",
  "true",
  40,
  "Trajectory",
  3
  ]


function askForName() {
  
let candidateName = input.question("What is your name? ");
console.log(`\nCandidate Name: ${candidateName}`);

}

function askQuestion() {

for (let i = 0; i < questions.length; i++) {

candidateAnswers.push(input.question(questions[i]));

console.log(`Your Answer: ${candidateAnswers[i]}`);
console.log(`Correct Answer: ${answerKeys[i]}\n`);

if (candidateAnswers[i].toString().toLowerCase() === answerKeys[i].toString().toLowerCase()) {
  correctAnswers++;
}
}
}

function gradeQuiz() {

let score = correctAnswers / questions.length * 100;
console.log(`>>> Overall Grade: ${score}% (${correctAnswers} of 5 responses correct) <<<`);

if (score >= 80) {
  console.log(">>> Status: PASS <<<");
} else {
  console.log(">>> Status: FAILED <<<");
}
}

function runProgram() {
  askForName();
  askQuestion();
  gradeQuiz();
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};
