/*
  TODO: 2. Select all elements needed
    * The form element (has the id `quiz-form`)
    * The answer inputs (have the class `answer`)
    * BONUS: The questions (have the class `question-item`)
    * BONUS: The alert (has the id `alert`)
*/

const form = document.querySelector("#quiz-form");
const answers = document.querySelectorAll(".answer");
const questionItems = document.querySelectorAll(".question-item");
const alert = document.querySelector("#alert");

form.addEventListener("submit", e => {
  e.preventDefault();

  questionItems.forEach(questionItem => {
    questionItem.classList.add("incorrect");
    questionItem.classList.remove("correct");
  });

  const checkedAnswers = Array.from(answers).filter(answer => answer.checked);

  checkedAnswers.forEach(answer => {
    const isCorrect = answer.value === "true";
    const questionItem = answer.closest(".question-item");

    if (isCorrect) {
      questionItem.classList.add("correct");
      questionItem.classList.remove("incorrect");
    } else {
      questionItem.classList.add("incorrect");
      questionItem.classList.remove("correct");
    }

    const allTrue = checkedAnswers.every(answer => answer.value === "true");
    const allAnswered = checkedAnswers.length === questionItems.length;

    if (allTrue && allAnswered) {
      alert.classList.add("active");
      setTimeout(() => {
        alert.classList.remove("active");
      }, 1000);
    }
  });
});
