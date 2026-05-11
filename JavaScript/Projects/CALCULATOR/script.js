function Calculate(data) {
  const equation = document.getElementById("text");
  if (data === "AC") {
    equation.innerText = "0";
    return;
  }

  if (data === "C") {
    equation.innerText = equation.innerText.slice(0, -1);
    return;
  }

  if (data === "=") {
    const EQ = equation.innerText;
    const solution = eval(EQ);
    equation.innerText = solution;
    return;
  }

  if (equation.innerText === "0") {
    equation.innerText = data;
  } else {
    equation.innerText = equation.innerText + data;
  }
}

let display = document.getElementById("text");
let expression = "";

function Calculate(value) {
  if (value === "AC") {
    expression = "";
    display.innerText = "0";
  } 
  else if (value === "C") {
    expression = expression.slice(0, -1);
    display.innerText = expression || "0";
  } 
  else if (value === "=") {
    try {
      expression = eval(expression).toString();
      display.innerText = expression;
    } catch {
      display.innerText = "Error";
      expression = "";
    }
  } 
  else {
    expression += value;
    display.innerText = expression;
  }
}

document.addEventListener("keydown", function (event) {
  const key = event.key;

  if (
    (key >= "0" && key <= "9") ||
    key === "+" ||
    key === "-" ||
    key === "*" ||
    key === "/" ||
    key === "." ||
    key === "%"
  ) {
    Calculate(key);
  }

  else if (key === "Enter") {
    Calculate("=");
  }

  else if (key === "Backspace") {
    Calculate("C");
  }

  else if (key === "Escape") {
    Calculate("AC");
  }
});