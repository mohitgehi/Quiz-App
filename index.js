let questions = [
  {
    text:
      "Which Bollywood personality has launched an online platform called" +
      "‘Pravasi Rojgar’ to help migrants find job opportunities?",
    options: [
      "Nana Patekar",
      "Nawazuddin Siddiqui",
      "Sonu Sood",
      "Amitabh Bachchan"
    ],
    answer: 2
  },
  {
    text:
      "Which Bollywood personality has launched an online platform called" +
      "‘Pravasi Rojgar’ to help migrants find job opportunities?",
    options: [
      "Nana Patekar",
      "Nawazuddin Siddiqui",
      "Sonu Sood",
      "Amitabh Bachchan"
    ],
    answer: 2
  },
  {
    text:
      "Which Bollywood personality has launched an online platform called" +
      "‘Pravasi Rojgar’ to help migrants find job opportunities?",
    options: [
      "Nana Patekar",
      "Nawazuddin Siddiqui",
      "Sonu Sood",
      "Amitabh Bachchan"
    ],
    answer: 2
  },
  {
    text:
      "Which Bollywood personality has launched an online platform called" +
      "‘Pravasi Rojgar’ to help migrants find job opportunities?",
    options: [
      "Nana Patekar",
      "Nawazuddin Siddiqui",
      "Sonu Sood",
      "Amitabh Bachchan"
    ],
    answer: 2
  },
  {
    text:
      "Which Bollywood personality has launched an online platform called" +
      "‘Pravasi Rojgar’ to help migrants find job opportunities?",
    options: [
      "Nana Patekar",
      "Nawazuddin Siddiqui",
      "Sonu Sood",
      "Amitabh Bachchan"
    ],
    answer: 2
  },
  {
    text:
      "Which Bollywood personality has launched an online platform called" +
      "‘Pravasi Rojgar’ to help migrants find job opportunities?",
    options: [
      "Nana Patekar",
      "Nawazuddin Siddiqui",
      "Sonu Sood",
      "Amitabh Bachchan"
    ],
    answer: 2
  }
];

{
  /* <li>
          Which Bollywood personality has launched an online platform called
          ‘Pravasi Rojgar’ to help migrants find job opportunities?
        </li>
        <ol type="a">
          <li><span class="option">A</span>Nana Patekar</li>
          <li><span class="option">B</span>Nawazuddin Siddiqui</li>
          <li class="correct">
            <span class="option fast-flicker">C</span>Sonu Sood
          </li>
          <li>
            <span class="option">D</span>
          </li>
        </ol> */
}

let questionList = document.getElementById("question-list");

for (let i = 0; i < questions.length; i++) {
  let question = questions[i];
  let questionText = document.createElement("li");
  questionText.innerHTML = question.text;

  let optionContainer = document.createElement("ol");
  optionContainer.type = "a";

  for (let j = 0; j < question.options.length; j++) {
    let option = document.createElement("li");
    let spanElement = document.createElement("span");
    spanElement.innerHTML = ["A", "B", "C", "D"][j];
    spanElement.className = `option ${
      question.answer === j ? "fast-flicker" : ""
    }`;
    option.appendChild(spanElement);
    option.innerHTML += question.options[j];
    optionContainer.appendChild(option);
  }

  questionList.appendChild(questionText);
  questionList.appendChild(optionContainer);
}
