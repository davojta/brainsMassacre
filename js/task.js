import mylib from "./mylib";
import {
  dictTranslateTask,
  dictListeningTask,
  dictCapitalsTask,
  dictSortTask,
  dictRedundantTask,
  dictTriangleTask
} from "./dict";

class Task {
  constructor() {
    this.type;
    this.condition;
    this.solution = [];
    this.answer;
  }

  generate() {
    document.querySelector(".modal-window__task_media").innerHTML = "";
    document.getElementById("answer").value = "";
    const tasks = [
      this.arithmetics,
      this.translate,
      this.listening,
      this.capitals,
      this.sort,
      this.redundant,
      this.equation,
      this.triangle
    ];
    const currentTask = mylib.getRandomArrayElement(tasks).bind(this);
    currentTask();
  }

  arithmetics() {
    this.type = "arithmetics";
    let firstNumber;
    let secondNumber;
    const operations = ["+", "-", "*", "/"];
    const operation = mylib.getRandomArrayElement(operations);
    if (operation === "/") {
      const RandNumber = mylib.getRandomFromTo(1, 15);
      secondNumber = mylib.getRandomFromTo(1, 15);
      firstNumber = RandNumber * secondNumber;
    } else if (operation === "*") {
      firstNumber = mylib.getRandomFromTo(0, 30);
      secondNumber = mylib.getRandomFromTo(0, 30);
    } else {
      firstNumber = mylib.getRandomFromTo(0, 100);
      secondNumber = mylib.getRandomFromTo(0, 100);
    }
    this.condition = firstNumber + operation + secondNumber;
    this.solution.push(eval(this.condition).toString());
    document.querySelector(".modal-window__task_description").innerHTML =
      "solve the task:<br>" + this.condition;
  }

  translate() {
    this.type = "translate";
    const arrayOfWords = Object.keys(dictTranslateTask);
    const arrayOfWordsLength = arrayOfWords.length;
    this.condition =
      arrayOfWords[mylib.getRandomFromTo(0, arrayOfWordsLength - 1)];
    this.solution = dictTranslateTask[this.condition];

    document.querySelector(".modal-window__task_description").innerHTML =
      "translate into russian:<br>" + this.condition;
  }

  listening() {
    this.type = "listening";
    const arrayOfWords = Object.keys(dictListeningTask);
    const arrayOfWordsLength = arrayOfWords.length;
    this.condition =
      arrayOfWords[mylib.getRandomFromTo(0, arrayOfWordsLength - 1)];
    this.solution.push(dictListeningTask[this.condition]);

    const insertingAudio = document.createElement("audio");
    insertingAudio.setAttribute("src", this.condition);
    insertingAudio.setAttribute("controls", "");
    document
      .querySelector(".modal-window__task_media")
      .appendChild(insertingAudio);
    document.querySelector(".modal-window__task_description").innerHTML =
      "type the word you heard";
  }

  capitals() {
    this.type = "capitals";
    const arrayOfWords = Object.keys(dictCapitalsTask);
    const arrayOfWordsLength = arrayOfWords.length;
    this.condition =
      arrayOfWords[mylib.getRandomFromTo(0, arrayOfWordsLength - 1)];
    this.solution = dictCapitalsTask[this.condition];

    const insertingFlag = document.createElement("img");
    insertingFlag.setAttribute("src", this.condition);
    document
      .querySelector(".modal-window__task_media")
      .appendChild(insertingFlag);
    document.querySelector(".modal-window__task_description").innerHTML =
      "what is the capital of:";
  }

  sort() {
    this.type = "sort";
    document.getElementById("answer").style.display = "none";

    const arrayOfWords = Object.keys(dictSortTask);
    const arrayOfWordsLength = arrayOfWords.length;
    this.condition =
      arrayOfWords[mylib.getRandomFromTo(0, arrayOfWordsLength - 1)];
    this.solution = dictSortTask[this.condition];

    const chosenWordShuffledArr = mylib.shuffle(this.condition.split(""));

    const ul = document.createElement("ul");
    ul.classList.add("sortable");

    for (let i = 0; i < chosenWordShuffledArr.length; i++) {
      const li = document.createElement("li");
      li.innerHTML = chosenWordShuffledArr[i];
      ul.appendChild(li);
    }

    document.querySelector(".modal-window__task_media").appendChild(ul);

    $(function() {
      $(".sortable")
        .sortable()
        .disableSelection();
    });

    document.querySelector(".modal-window__task_description").innerHTML =
      "put the letters in the correct order:";
  }

  redundant() {
    this.type = "redundant";
    document.getElementById("answer").style.display = "none";

    const arrayOfWords = Object.keys(dictRedundantTask);
    const arrayOfWordsLength = arrayOfWords.length;
    this.solution.push(
      arrayOfWords[mylib.getRandomFromTo(0, arrayOfWordsLength - 1)]
    );
    this.condition = dictRedundantTask[this.solution];

    const media = document.querySelector(".modal-window__task_media");
    for (let i = 0; i < 3; i++) {
      const label = document.createElement("label");
      const input = document.createElement("input");
      input.setAttribute("type", "radio");
      input.setAttribute("name", "redundantPic");
      input.setAttribute("value", this.condition[i]);
      const img = document.createElement("img");
      img.setAttribute("src", this.condition[i]);
      label.appendChild(input);
      label.appendChild(img);
      media.appendChild(label);
    }

    document.querySelector(".modal-window__task_description").innerHTML =
      "choose the redundant picture:";
  }

  equation() {
    this.type = "equation";

    const apple = document.createElement("img");
    const banana = document.createElement("img");
    const coconut = document.createElement("img");

    const appleValue = mylib.getRandomFromTo(2, 10);
    const bananaValue = mylib.getRandomFromTo(2, 10);
    const coconutValue = mylib.getRandomFromTo(2, 10);

    apple.setAttribute("src", "img/equationTask/apple.png");
    banana.setAttribute("src", "img/equationTask/banana.png");
    coconut.setAttribute("src", "img/equationTask/coconut.png");

    const plus = document.createElement("h3");
    const minus = document.createElement("h3");
    plus.innerText = " + ";
    minus.innerText = " - ";

    const firstResult = document.createElement("h3");
    const secondResult = document.createElement("h3");
    const thirdResult = document.createElement("h3");
    const fourthResult = document.createElement("h3");

    firstResult.innerText = ` = ${appleValue * 3}`;
    secondResult.innerText = ` = ${appleValue + bananaValue * 2}`;
    thirdResult.innerText = ` = ${bananaValue - coconutValue}`;
    fourthResult.innerText = ` = ?`;

    const firstRow = document.createElement("div");
    firstRow.classList.add("equation-row");
    const secondRow = firstRow.cloneNode();
    const thirdRow = firstRow.cloneNode();
    const fourthRow = firstRow.cloneNode();

    firstRow.appendChild(apple.cloneNode(true));
    firstRow.appendChild(plus.cloneNode(true));
    firstRow.appendChild(apple.cloneNode(true));
    firstRow.appendChild(plus.cloneNode(true));
    firstRow.appendChild(apple.cloneNode(true));
    firstRow.appendChild(firstResult);

    secondRow.appendChild(apple.cloneNode(true));
    secondRow.appendChild(plus.cloneNode(true));
    secondRow.appendChild(banana.cloneNode(true));
    secondRow.appendChild(plus.cloneNode(true));
    secondRow.appendChild(banana.cloneNode(true));
    secondRow.appendChild(secondResult);

    thirdRow.appendChild(banana.cloneNode(true));
    thirdRow.appendChild(minus.cloneNode(true));
    thirdRow.appendChild(coconut.cloneNode(true));
    thirdRow.appendChild(thirdResult);

    fourthRow.appendChild(apple.cloneNode(true));
    fourthRow.appendChild(plus.cloneNode(true));
    fourthRow.appendChild(banana.cloneNode(true));
    fourthRow.appendChild(plus.cloneNode(true));
    fourthRow.appendChild(coconut.cloneNode(true));
    fourthRow.appendChild(fourthResult);

    const media = document.querySelector(".modal-window__task_media");
    media.appendChild(firstRow);
    media.appendChild(secondRow);
    media.appendChild(thirdRow);
    media.appendChild(fourthRow);

    this.solution.push(String(appleValue + bananaValue + coconutValue));

    document.querySelector(".modal-window__task_description").innerHTML =
      "solve the equation:";
  }

  triangle() {
    this.type = "triangle";
    let [firstNumber, secondNumber, result] = mylib.getRandomArrayElement(
      dictTriangleTask
    );

    this.solution.push(result.toString());

    const div = document.createElement("div");
    div.classList.add("container-triangle");
    const image = document.createElement("img");
    image.classList.add("image-triangle");
    image.setAttribute("src", "img/triangle.png");

    const firstCathette = document.createElement("h2");
    const secondCathette = document.createElement("h2");
    firstCathette.classList.add("first-cathette");
    secondCathette.classList.add("second-cathette");
    firstCathette.innerText = secondNumber;
    secondCathette.innerText = firstNumber;

    div.appendChild(image);
    div.appendChild(firstCathette);
    div.appendChild(secondCathette);

    document.querySelector(".modal-window__task_media").appendChild(div);
    document.querySelector(".modal-window__task_description").innerHTML =
      "find x";

    image.addEventListener("click", e => {
      if (
        e.offsetX > 125 &&
        e.offsetX < 145 &&
        e.offsetY > 70 &&
        e.offsetY < 90
      ) {
        image.setAttribute("src", "img/triangle1.png");
        document.getElementById("answer").style.display = "none";
        document.getElementById("answer").value = this.solution[0];
      }
    });
  }

  isSolved() {
    return this.solution.includes(this.answer.toLowerCase());
  }
}

export default Task;
