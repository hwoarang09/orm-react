var container = document.getElementById("container");

var topResultColor = "#4C4C4C";
var row1Color = "#D6D6D6";
var row2345Color = "#E0E0E0";
var borderColor = "#B0B0B0";
var buttonRightColor = "#F5923E";

var topRow = document.createElement("div");
var resultRow = document.createElement("div");
topRow.classList.add("grid-item");
topRow.classList.add("topRow");
resultRow.classList.add("grid-item");
resultRow.classList.add("resultRow");

topRow.style.backgroundColor = topResultColor;
var topRowRed = document.createElement("span");
var topRowYellow = document.createElement("span");
var topRowGreen = document.createElement("span");
topRowRed.classList.add("circle");
topRowYellow.classList.add("circle");
topRowGreen.classList.add("circle");
topRowRed.style.backgroundColor = "#FC5652";
topRowYellow.style.backgroundColor = "#FDBC40";
topRowGreen.style.backgroundColor = "#34C84A";

topRow.appendChild(topRowRed);
topRow.appendChild(topRowYellow);
topRow.appendChild(topRowGreen);
resultRow.style.backgroundColor = topResultColor;
container.appendChild(topRow);
container.appendChild(resultRow);

function buttonFunc(button, text, classArray, color) {
  button.textContent = text;
  classArray.forEach(function (ele) {
    button.classList.add(ele);
    button.classList.add("button");
  });
  button.style.backgroundColor = color[0];
  button.style.color = color[1];

  if (text === "X") button.dataset.value = `*`;
  else button.dataset.value = `${text}`;
  container.appendChild(button);
}
var textArray = [
  "C",
  "+/-",
  "%",
  "/",
  "7",
  "8",
  "9",
  "X",
  "4",
  "5",
  "6",
  "-",
  "1",
  "2",
  "3",
  "+",
  "0",
  ".",
  "=",
];

textArray.forEach(function (text, i) {
  var button = document.createElement("div");
  var color = [];
  if (i <= 2) color = [row1Color, "#0A0A0A"];
  else if (i % 4 === 3 || text === "=") color = [buttonRightColor, "#FEF9F5"];
  else color = [row2345Color, "#0A0A0A"];
  var classArray = [];
  if (text === "0") classArray = ["commandButton", "grid-item", "fill-row-2"];
  else classArray = ["commandButton", "grid-item"];
  buttonFunc(button, text, classArray, color);
});

var resultText = "";
resultRow.textContent = resultText;

container.addEventListener("click", function (e) {
  try {
    const clicked = e.target;

    if (clicked.dataset.value === "C") {
      resultText = "";
      resultRow.textContent = resultText;
    } else if (clicked.dataset.value === "=") {
      resultText = eval(resultText);
      resultRow.textContent = resultText;
    } else if (clicked.dataset.value != "=") {
      resultText += clicked.dataset.value;
      resultRow.textContent = resultText;
    }
  } catch (err) {
    resultRow.textContent = "계산기 입력값 에러!!";
    resultText = "";
  }
});
