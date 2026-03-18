const questions = [
  {
    question: "Who is known as the God of Cricket?",
    options: ["Virat Kohli", "Sachin Tendulkar", "MS Dhoni", "Ricky Ponting"],
    answer: "Sachin Tendulkar"
  },
  {
    question: "How many players are there in one cricket team?",
    options: ["10", "11", "12", "9"],
    answer: "11"
  },
  {
    question: "Who is called the 'Hitman' of cricket?",
    options: ["Virat Kohli", "Rohit Sharma", "AB de Villiers", "David Warner"],
    answer: "Rohit Sharma"
  }
];

let currentQ = 0;
let score = 0;
let time = 10;
let timer;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("nextBtn");
const timerEl = document.getElementById("timer");

function loadQuestion() {
  resetTimer();
  startTimer();

  const q = questions[currentQ];
  questionEl.innerText = q.question;
  optionsEl.innerHTML = "";

  q.options.forEach(option => {
    const btn = document.createElement("button");
    btn.innerText = option;
    btn.classList.add("option");

    btn.onclick = () => {
      const allOptions = document.querySelectorAll(".option");

      allOptions.forEach(b => b.disabled = true);

      if (option === q.answer) {
        btn.classList.add("correct");
        score++;
      } else {
        btn.classList.add("wrong");

        allOptions.forEach(button => {
          if (button.innerText === q.answer) {
            button.classList.add("correct");
          }
        });
      }

      clearInterval(timer);

      setTimeout(() => {
        nextQuestion();
      }, 1000);
    };

    optionsEl.appendChild(btn);
  });
}

function nextQuestion() {
  clearInterval(timer);
  currentQ++;

  if (currentQ < questions.length) {
    loadQuestion();
  } else {
    showResult();
  }
}

nextBtn.onclick = nextQuestion;

function showResult() {
  document.querySelector(".quiz-container").classList.add("hide");
  document.getElementById("result").classList.remove("hide");
  document.getElementById("score").innerText = score + "/" + questions.length;
}

function startTimer() {
  time = 10;
  timerEl.innerText = "Time: " + time;

  timer = setInterval(() => {
    time--;
    timerEl.innerText = "Time: " + time;

    if (time === 0) {
      nextQuestion();
    }
  }, 1000);
}

function resetTimer() {
  clearInterval(timer);
}

loadQuestion();