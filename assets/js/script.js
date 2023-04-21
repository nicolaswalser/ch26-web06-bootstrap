console.log("Hello from an external script.js");
const refName = document.getElementById("myName");
console.log(refName);
refName.innerHTML = "Nicolas <strong>Walser</strong>";

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
