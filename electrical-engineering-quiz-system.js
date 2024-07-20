// מאגר שאלות ותשובות
const questions = [
  {
    question: "מהו חוק אוהם?",
    options: [
      "היחס בין הזרם לקיבול",
      "היחס בין המתח להתנגדות",
      "היחס בין ההספק לזרם",
      "היחס בין המתח לזרם"
    ],
    correctAnswer: 3,
    explanation: "חוק אוהם קובע כי המתח (V) שווה למכפלת הזרם (I) בהתנגדות (R): V = I * R"
  },
  // הוסף עוד שאלות כאן...
];

// פונקציה להצגת שאלה אקראית
function getRandomQuestion() {
  return questions[Math.floor(Math.random() * questions.length)];
}

// פונקציה לבדיקת תשובת המשתמש
function checkAnswer(question, userAnswer) {
  if (userAnswer === question.correctAnswer) {
    return {
      correct: true,
      message: "כל הכבוד! תשובה נכונה."
    };
  } else {
    return {
      correct: false,
      message: `טעות. התשובה הנכונה היא: ${question.options[question.correctAnswer]}`,
      explanation: question.explanation
    };
  }
}

// דוגמה לשימוש
const currentQuestion = getRandomQuestion();
console.log(currentQuestion.question);
currentQuestion.options.forEach((option, index) => {
  console.log(`${index + 1}. ${option}`);
});

// נניח שהמשתמש בחר תשובה 2
const userAnswer = 1;
const result = checkAnswer(currentQuestion, userAnswer);
console.log(result.message);
if (!result.correct) {
  console.log(result.explanation);
}
