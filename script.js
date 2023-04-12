let formElement = document.querySelector(".js-form");
let ammountElement = document.querySelector(".js-ammount");
let resultElement = document.querySelector(".js-result");
let submitElement = document.querySelector(".js-submit");


submitElement.style.display = "none";

formElement.addEventListener("submit", (event) => {
    event.preventDefault();
    let currencyElement = document.querySelector(".js-currency");
    let submitCurrencyElement = document.querySelector(".js-submit__currency");
    let submitAmmountElement = document.querySelector(".js-submit__ammount");
    let ammount = ammountElement.value;
    let exchangeRate;

    submitCurrencyElement.innerText = currencyElement.value;

    switch (submitCurrencyElement.innerText) {
        case "EUR":
            exchangeRate = 4.7;
            break;
        case "USD":
            exchangeRate = 4.33;
            break;
        case "AUD":
            exchangeRate = 3.02;
            break;
        case "CHF":
            exchangeRate = 4.69;
            break;
        case "NOK":
            exchangeRate = 0.43;
            break;
        case "CZK":
            exchangeRate = 0.2;
            break;
        case "JPY":
            exchangeRate = 0.033;
            break;
        case "SEK":
            exchangeRate = 0.41;
    }

    let result = ammount / exchangeRate;

    submitAmmountElement.innerText = ammountElement.value;
    resultElement.innerText = result.toFixed(2);

    submitElement.style.display = "block";
});

