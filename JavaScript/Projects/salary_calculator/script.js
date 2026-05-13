const basicSalaryInput = document.getElementById("basicSalary");
const calculateBtn = document.getElementById("calculateBtn");
const resetBtn = document.getElementById("resetBtn");

const basicResult = document.getElementById("basicResult");
const hraResult = document.getElementById("hraResult");
const daResult = document.getElementById("daResult");
const grossResult = document.getElementById("grossResult");

const errorMsg = document.getElementById("errorMsg");
const successMsg = document.getElementById("successMsg");

function calculateGrossSalary(basic) {

  let hra = 0;
  let da = 0;

  hra = basic * 0.20;
  da = basic * 0.10;

  const gross = basic + hra + da;

  return {
    basic,
    hra,
    da,
    gross
  };
}


function formatCurrency(amount) {

  return amount.toLocaleString("en-IN", {
    style: "currency",
    currency: "INR",
    minimumFractionDigits: 2
  });

}


calculateBtn.addEventListener("click", function () {

  const basic = parseFloat(basicSalaryInput.value);

  if (
    basicSalaryInput.value.trim() === "" ||
    basic < 0
  ) {

    errorMsg.innerText =
      "Please enter a valid non-negative salary.";

    successMsg.innerText = "";

    return;
  }

  errorMsg.innerText = "";

  calculateBtn.disabled = true;

  setTimeout(() => {

    const result = calculateGrossSalary(basic);

    basicResult.innerText = formatCurrency(result.basic);

    hraResult.innerText = formatCurrency(result.hra);

    daResult.innerText = formatCurrency(result.da);

    grossResult.innerText = formatCurrency(result.gross);

    successMsg.innerText =
      "Salary calculated successfully!";

    calculateBtn.disabled = false;

  }, 500);

});


resetBtn.addEventListener("click", function () {

  basicSalaryInput.value = "";

  basicResult.innerText = "₹0.00";
  hraResult.innerText = "₹0.00";
  daResult.innerText = "₹0.00";
  grossResult.innerText = "₹0.00";

  errorMsg.innerText = "";
  successMsg.innerText = "";
});