console.log("Hello from an external script.js");
const refName = document.getElementById("myName");
console.log(refName);
refName.innerHTML = "Nicolas <strong>Walser</strong>";

function changeColorToRed() {
  const refName = document.getElementById("myName");

  refName.style.color = "red";
}
