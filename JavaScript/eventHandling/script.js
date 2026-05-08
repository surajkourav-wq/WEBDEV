function Bulb1On() {
  document.getElementById("bulb1").style.backgroundColor = "yellow";
}
function Bulb1Off() {
  document.getElementById("bulb1").style.backgroundColor = "white";
}
function red() {
  document.getElementById("bulb1").style.backgroundColor = "red";
}
function blue() {
  document.getElementById("bulb1").style.backgroundColor = "blue";
}
function green() {
  document.getElementById("bulb1").style.backgroundColor = "green";
}

document
  .getElementById("bulb1Color")
  .addEventListener("change", changeBulbcolor);

function changeBulbcolor() {
  const color = document.getElementById("bulb1Color").value;
  document.getElementById("ABCD").style.color = color;
}

