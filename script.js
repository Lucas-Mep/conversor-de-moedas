const convertButton = document.querySelector(".convert-button");
const currencySelect = document.querySelector(".currency-select");

function convertValues() {
  const inputCurrencyValue = document.querySelector(".input-currency").value;
  const currencyValueToConvert = document.querySelector(
    ".currency-value-to-convert"
  );
  const currencyConverted = document.querySelector(".currency-value");

  const dolarToday = 4.9;
  const euroToday = 5.3;
  const libraToday = 6.2;
  const pesoToday = 0.013;

  if (currencySelect.value == "dolar") {
    currencyConverted.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(inputCurrencyValue / dolarToday);
  }
  if (currencySelect.value == "euro") {
    currencyConverted.innerHTML = new Intl.NumberFormat("de-De", {
      style: "currency",
      currency: "EUR",
    }).format(inputCurrencyValue / euroToday);
  }
  if (currencySelect.value == "libra") {
    currencyConverted.innerHTML = new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "GBP",
    }).format(inputCurrencyValue / libraToday);
  }
  if (currencySelect.value == "peso") {
    currencyConverted.innerHTML = new Intl.NumberFormat("es-ES", {
      style: "currency",
      currency: "ARS",
    }).format(inputCurrencyValue / pesoToday);
  }

  currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BLR",
  }).format(inputCurrencyValue);
}

function changeCurrency() {
  const currencyName = document.getElementById("currency-name");
  currencyImage = document.querySelector(".currency-img");

  if (currencySelect.value == "dolar") {
    currencyName.innerHTML = "Dólar americano";
    currencyImage.src = "./assets/estados-unidos (1) 1.png";
  }

  if (currencySelect.value == "euro") {
    currencyName.innerHTML = "Euro";
    currencyImage.src = "./assets/Euro.png";
  }

  if (currencySelect.value == "peso") {
    currencyName.innerHTML = "Peso Argentino";
    currencyImage.src = "./assets/peso.png";
  }

  if (currencySelect.value == "libra") {
    currencyName.innerHTML = "Libra";
    currencyImage.src = "./assets/libra.png";
  }

  convertValues();
}

currencySelect.addEventListener("change", changeCurrency);
convertButton.addEventListener("click", convertValues);
