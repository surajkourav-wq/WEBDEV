const calcBtn = document.getElementById("calcBtn");
const kmInput = document.getElementById("kmInput");
const errorMsg = document.getElementById("errorMsg");
const totalBill = document.getElementById("totalBill");
const breakdown = document.getElementById("breakdown");

calcBtn.addEventListener("click", function () {
  let km = parseFloat(kmInput.value);

  if (kmInput.value.trim() === "" || isNaN(km) || km < 0) {
    errorMsg.innerText =
      "Please enter a non-negative number of kilometres";

    totalBill.innerText = "0";

    breakdown.innerHTML = `
      <p class="text-muted">No calculation yet.</p>
    `;

    return;
  }

  errorMsg.innerText = "";

  let remainingKm = km;
  let total = 0;

  let breakdownHTML = "";

  let firstSlabKm = Math.min(remainingKm, 10);
  let firstSlabCost = firstSlabKm * 11;

  total += firstSlabCost;
  remainingKm -= firstSlabKm;

  breakdownHTML += `
    <div class="d-flex justify-content-between border-bottom py-2">
      <span>${firstSlabKm.toFixed(2)} km × Rs.11</span>
      <span>Rs. ${formatNumber(firstSlabCost)}</span>
    </div>
  `;

  let secondSlabKm = Math.min(remainingKm, 40);
  let secondSlabCost = secondSlabKm * 10;

  total += secondSlabCost;
  remainingKm -= secondSlabKm;

  breakdownHTML += `
    <div class="d-flex justify-content-between border-bottom py-2">
      <span>${secondSlabKm.toFixed(2)} km × Rs.10</span>
      <span>Rs. ${formatNumber(secondSlabCost)}</span>
    </div>
  `;

  let thirdSlabKm = remainingKm > 0 ? remainingKm : 0;
  let thirdSlabCost = thirdSlabKm * 8;

  total += thirdSlabCost;

  breakdownHTML += `
    <div class="d-flex justify-content-between py-2">
      <span>${thirdSlabKm.toFixed(2)} km × Rs.8</span>
      <span>Rs. ${formatNumber(thirdSlabCost)}</span>
    </div>
  `;

  totalBill.innerText = formatNumber(total);

  breakdown.innerHTML = breakdownHTML;
});

function formatNumber(num) {
  return Number(num.toFixed(2)).toLocaleString("en-IN");
}