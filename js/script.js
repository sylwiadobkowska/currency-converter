{
    const formElement = document.querySelector(".js-form");
    const amountElement = document.querySelector(".js-amount");
    const submitElement = document.querySelector(".js-submit");
    const currencyElement = document.querySelector(".js-currency");

    let exchangeRate;

    const convertCurrency = (amount, currency) => {
        switch (currency) {
            case "EUR":
                exchangeRate = 4.7;
                return amount / exchangeRate;
            case "USD":
                exchangeRate = 4.33;
                return amount / exchangeRate;
            case "AUD":
                exchangeRate = 3.02;
                return amount / exchangeRate;
            case "CHF":
                exchangeRate = 4.69;
                return amount / exchangeRate;
            case "NOK":
                exchangeRate = 0.43;
                return amount / exchangeRate;
            case "CZK":
                exchangeRate = 0.2;
                return amount / exchangeRate;
            case "JPY":
                exchangeRate = 0.033;
                return amount / exchangeRate;
            case "SEK":
                exchangeRate = 0.41;
                return amount / exchangeRate;
        }
    };

    formElement.addEventListener("submit", (event) => {
        event.preventDefault();

        const amount = +amountElement.value;
        const currency = currencyElement.value;

        const result = convertCurrency(amount, currency);
        submitElement.innerHTML = `${amount.toFixed(2)} PLN jest równe <strong>${result.toFixed(2)} ${currency}.`;
    });
};


