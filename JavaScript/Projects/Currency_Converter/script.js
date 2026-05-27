const country1 = document.getElementById("country1");
const country2 = document.getElementById("country2");

const flag1 = document.getElementById("flag1");
const flag2 = document.getElementById("flag2");

const convertBtn = document.getElementById("convertBtn");
const swapBtn = document.getElementById("swapBtn");

const orgAmount = document.getElementById("orgAmount");

const newAmount = document.getElementById("newAmount");
const exchangeRate = document.getElementById("exchangeRate");

const resultBox = document.getElementById("resultBox");

const loadingText = document.getElementById("loadingText");

const amountError = document.getElementById("amountError");
const country1Error = document.getElementById("country1Error");
const country2Error = document.getElementById("country2Error");

const generalError = document.getElementById("generalError");

async function loadCountries() {
  const response = await fetch("./codes.json");

  const data = await response.json();

  const uniqueCountries = [];

  data.forEach((country) => {
    if (
      country.Currency_Code !== "" &&
      !uniqueCountries.some((item) => item.Country === country.Country)
    ) {
      uniqueCountries.push(country);
    }
  });

  uniqueCountries.forEach((country) => {
    const option1 = document.createElement("option");

    option1.value = `${country.Currency_Code},${country.Country_Code}`;

    option1.innerText = country.Country;

    country1.append(option1);

    const option2 = document.createElement("option");

    option2.value = `${country.Currency_Code},${country.Country_Code}`;

    option2.innerText = country.Country;

    country2.append(option2);
  });

  country1.value = "";

  country2.value = "";

  updateFlag(country1, flag1);

  updateFlag(country2, flag2);
}

loadCountries();

function updateFlag(selectTag, flagTag) {
  const value = selectTag.value;

  if (value === "") {
    // flagTag.src = "https://via.placeholder.com/64";
    flag1.classList.add("d-none");
    flag2.classList.add("d-none");

    return;
  }

  flag1.classList.remove("d-none");
  flag2.classList.remove("d-none");

  const countryCode = value.split(",")[1];

  flagTag.src = `https://flagsapi.com/${countryCode}/flat/64.png`;

  flagTag.onerror = () => {
    flagTag.src = "https://via.placeholder.com/64";
  };
}

country1.addEventListener("change", () => {
  updateFlag(country1, flag1);

  country1Error.innerText = "";
});

country2.addEventListener("change", () => {
  updateFlag(country2, flag2);

  country2Error.innerText = "";
});

function validateInputs() {
  amountError.innerText = "";
  country1Error.innerText = "";
  country2Error.innerText = "";

  generalError.classList.add("d-none");

  if (country1.value === "") {
    country1Error.innerText = "Please select a 'From' country.";

    return false;
  }

  if (country2.value === "") {
    country2Error.innerText = "Please select a 'To' country.";

    return false;
  }

  if (orgAmount.value === "") {
    amountError.innerText = "Please enter an amount.";

    return false;
  }

  if (Number(orgAmount.value) <= 0) {
    amountError.innerText = "Amount must be greater than zero.";

    return false;
  }

  return true;
}

async function convertCurrency() {
  const isValid = validateInputs();

  if (!isValid) {
    return;
  }

  try {
    resultBox.classList.add("d-none");

    loadingText.classList.remove("d-none");

    convertBtn.innerText = "Loading...";

    const amount = Number(orgAmount.value);

    const fromCurrency = country1.value.split(",")[0];

    const toCurrency = country2.value.split(",")[0];

    if (fromCurrency === toCurrency) {
      newAmount.innerText = `${amount.toFixed(2)} ${toCurrency.toUpperCase()}`;

      exchangeRate.innerText = `1 ${fromCurrency.toUpperCase()} = 1 ${toCurrency.toUpperCase()}`;

      resultBox.classList.remove("d-none");

      loadingText.classList.add("d-none");

      convertBtn.innerText = "Convert";

      return;
    }

    const API_URL = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${fromCurrency}.json`;

    const response = await fetch(API_URL);

    const data = await response.json();

    const rate = data[fromCurrency][toCurrency];

    const finalAmount = amount * rate;

    newAmount.innerText = `${finalAmount.toFixed(2)} ${toCurrency.toUpperCase()}`;

    exchangeRate.innerText = `1 ${fromCurrency.toUpperCase()} = ${rate.toFixed(2)} ${toCurrency.toUpperCase()}`;

    resultBox.classList.remove("d-none");
  } catch (error) {
    generalError.classList.remove("d-none");
  } finally {
    loadingText.classList.add("d-none");

    convertBtn.innerText = "Convert";
  }
}

convertBtn.addEventListener("click", convertCurrency);

swapBtn.addEventListener("click", () => {
  const temp = country1.value;

  country1.value = country2.value;

  country2.value = temp;

  updateFlag(country1, flag1);

  updateFlag(country2, flag2);

  if (orgAmount.value !== "") {
    convertCurrency();
  }
});

orgAmount.addEventListener("input", () => {
  amountError.innerText = "";
});

document.addEventListener("keydown", function (event) {
  const key = event.key;

  if (key === "Enter") {
    convertCurrency();
  }
});
