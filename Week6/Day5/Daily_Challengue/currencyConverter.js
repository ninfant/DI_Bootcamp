// // The program should take the currency which the user currently has and the currency in which they would like to receive, as well as the amount of money. Afterwards, the program will output the correct exchange rate based on the data from the APIs.
// // First, you need to fetch all the supported currencies, in order to add the currencies options (ie FROM - To) in the currency converter. Check out this page on Supported Codes Endpoint from the ExchangeRate API documentation.
// // To convert from a currency, to another one, you need to fetch conversion rate from the Pair Conversion API endpoint. Check out this page on Pair conversion requests from the ExchangeRate API documentation.
// // Hint: You could also supply an optional AMOUNT variable in the query of the request.
// // Bonus: Add this “switch” button on the page, when clicked on it will switch the currencies and display the new amount converted.
// // Example : if the conversion was from EUR to GBP, as soon as the button is clicked on, the conversion should be from GBP to EUR.

// const currencySelectone = document.getElementById("currencySelectone");
// const currencySelecttwo = document.getElementById("currencySelecttwo");
// const btn = document.getElementById("mybtn");
// const switchBtn = document.getElementById("switchBtn");
// const amountInput = document.getElementById("inputAmount");
// const resultContainer = document.getElementById("result");

// //  to fetch supported currencies from the API
// async function getSupportedCurrencies() {
//   const url =
//     "https://v6.exchangerate-api.com/v6/c3580d52482355910a7de857/codes";
//   try {
//     const response = await fetch(url);
//     if (!response.ok) {
//       throw new Error(`Error: ${response.status} - ${response.statusText}`);
//     }
//     const mydata = await response.json();
//     return mydata.supported_codes; // como esto devuelve una Promise, no un array, cuando lo llame abajo en el otro metodo tengo q ponerle await para obtener los datos antes de recorrerlos
//   } catch (error) {
//     console.error(`Error getting codes: ${error.message}`);
//     return [];
//   }
// }

// // to fetch the exchange rate for a given currency pair and amount
// async function getConversionRate(firstCurrency, secondCurrency, amount) {
//   const url = `https://v6.exchangerate-api.com/v6/c3580d52482355910a7de857/pair/${firstCurrency}/${secondCurrency}/${amount}`;
//   try {
//     const response = await fetch(url);
//     if (!response.ok) {
//       throw new Error(`Error: ${response.status} - ${response.statusText}`);
//     }
//     const mydata = await response.json();
//     return mydata;
//   } catch (error) {
//     console.error(`Error getting conversion: ${error.message}`);
//     return null;
//   }
// }

// async function ManagingData() {
//   currencySelectone.innerHTML = ""; // Clear dropdowns before adding new options
//   currencySelecttwo.innerHTML = "";

//   const supported_codes = await getSupportedCurrencies(); // fetch supported currencies from the API

//   // populate both dropdowns with currency options
//   supported_codes.forEach((currency) => {
//     const option = document.createElement("option");
//     option.value = currency[0];
//     option.textContent = `${currency[0]} - ${currency[1]}`;
//     currencySelectone.appendChild(option.cloneNode(true));
//     currencySelecttwo.appendChild(option);
//   });

//   btn.addEventListener("click", doTheConversion); // to add event listeners to the buttons
//   switchBtn.addEventListener("click", switchCurrencies);
// }

// // function to perform currency conversion
// async function doTheConversion(event) {
//   event.preventDefault();

//   const amountValue = amountInput.value.trim(); // si solo escribo amount.value.trim(), solo lo limpiaria por eso tengo q guardarlo en amountValue

//   // validate that the amount is not empty and is a valid number
//   if (!amountValue || isNaN(amountValue)) {
//     alert("Please enter a valid amount.");
//     return;
//   }

//   const fromCurrency = currencySelectone.value;
//   const toCurrency = currencySelecttwo.value;

//   // fetch the conversion rate
//   const result = await getConversionRate(fromCurrency, toCurrency, amountValue);

//   // to ddisplay the result
//   if (result) {
//     resultContainer.textContent = `${result.conversion_result} - ${toCurrency}`;
//   } else {
//     resultContainer.textContent = "Conversion failed. Try again";
//   }
// }

// async function switchCurrencies() {
//   // swittch the selected currencies (se intercambia los valores de los <select> usando destructuring ([a, b] = [b, a]))
//   [currencySelectone.value, currencySelecttwo.value] = [
//     currencySelecttwo.value,
//     currencySelectone.value,
//   ];

//   const amountValue = amountInput.value.trim();

//   if (!amountValue || isNaN(amountValue)) {
//     alert("Please enter a valid amount");
//     return;
//   }

//   // to fetch the conversion rate for the swapped currencies
//   const result = await getConversionRate(
//     currencySelectone.value,
//     currencySelecttwo.value,
//     amountValue
//   );

//   // to display the updated conversion result
//   if (result) {
//     resultContainer.textContent = ` ${result.conversion_result} - ${currencySelecttwo.value}`;
//   } else {
//     resultContainer.textContent = "Conversion failed. Try again";
//   }
// }
// ManagingData();

// // getSupportedCurrencies('USD', 'ILS', 1)
// //     .then(data => console.log(data))
// //     .catch(error => console.error(error))
