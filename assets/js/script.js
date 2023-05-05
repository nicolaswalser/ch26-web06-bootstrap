console.log("Hello from an external script.js");
const refName = document.getElementById("myName");
console.log(refName);

function changeColorTo(color) {
  const refName = document.getElementById("myName");
  refName.style.color = color;
}

function changeColorToOriginal() {
  const refName = document.getElementById("myName");
  refName.style.color = "black";
}

function changeTextColor(color, refObj) {
  console.log(refObj); // shows in console the object being referenced
  refObj.style.color = color;
}

function resetColors() {
  const refObjs = document.getElementsByClassName("text-color");
  console.log(refObjs);
  for (let index = 0; index < refObjs.length; index++) {
    const element = refObjs[index];
    element.style.color = "black";
  }
}

function promptAndChange() {
  const newName = prompt("Enter your name:");
  document.getElementById("yourName").innerHTML = "Your name is: " + newName;
}

function performOperation(operation) {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
  let result;
  switch (operation) {
    case "add":
      result = num1 + num2;
      break;
    case "subtract":
      result = num1 - num2;
      break;
    case "multiply":
      result = num1 * num2;
      break;
    case "divide":
      result = num1 / num2;
      break;
    default:
      result = "Invalid operation";
  }
  document.getElementById("result").value = result;
}

// Pick a number 1 - 100
function guessNumber() {
  let min = 1;
  let max = 100;
  let guess;
  let result = document.getElementById("result");

  while (min <= max) {
    guess = Math.floor((min + max) / 2);

    let response = confirm(`Is your number ${guess}?`);

    if (response) {
      result.innerText = `Your number is ${guess}!`;
      return;
    } else {
      response = confirm(`Is your number higher than ${guess}?`);

      if (response) {
        min = guess + 1;
      } else {
        max = guess - 1;
      }
    }
  }

  result.innerText = `Sorry, I couldn't guess your number.`;
}

// Date

const dayInput = document.getElementById("day");
const monthInput = document.getElementById("month");
const yearInput = document.getElementById("year");
const resultInput = document.getElementById("result");
const buttonCalculate = document.getElementById("calculate");

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const isWorkable = (weekDay) => {
  switch (weekDay) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
      return "is workable";
      break;
    default:
      return "is a weekend. It is not workable";
      break;
  }
};
const calculate = () => {
  const d = new Date(yearInput.value, monthInput.value - 1, dayInput.value);
  const dayOfTheWeek = d.getDay();
  resultInput.value = `${
    days[dayOfTheWeek][0] + days[dayOfTheWeek].slice(1)
  }, ${isWorkable(dayOfTheWeek)}`;
  console.log(`${resultInput}`);
};
function validateInputs(event) {
  event.preventDefault();
  if (yearInput.value && monthInput.value && dayInput.value) {
    calculate();
  } else {
    alert("All fields need to be filled");
  }
}
buttonCalculate.addEventListener("click", validateInputs);
