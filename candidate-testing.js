const input = require('readline-sync');

let candidateName = input.question("What is your name?");
console.log(`\nCandidate Name: ${candidateName}`);

let question = [
  "1) True or false: 5000 meters = 5 kilometers.",
  "2) (5 + 3)/2 * 10 = ?",
  "3) Given the array [8, \"Orbit\", \"Trajectory\", 45], what entry is at index 2?",
  "4) Who was the first American woman in space?",
  "5) What is the minimum crew size for the International Space Station (ISS)?"
  ]
  
let correctAnwer = [
  "True",
  40,
  "Trajectory",
  "Sally Ride",
  3
  ]

let userAnswers = [];
let correctAnswers = 0;

for (let i = 0; i < question.length; i++) {
  
console.log(question[i]);
userAnswers.push(input.question(question[i]));

console.log(`Your Answer: ${userAnswers[i]}`);
console.log(`Correct Answer: ${correctAnwer[i]}\n`);

if (userAnswers[i].toString().toLowerCase() === correctAnwer[i].toString().toLowerCase()) {
  correctAnswers++;
}
}

let score = correctAnswers / question.length * 100;
console.log(`>>> Overall Grade: ${score}% (${correctAnswers} of 5 responses correct) <<<`);

if (score >= 80) {
  console.log(">>> Status: PASS <<<");
} else {
  console.log(">>> Status: FAILED <<<");
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
