let converterElement = document.querySelector(".js-converter");
let amountElement = document.querySelector(".js-amount");
let resultElement = document.querySelector(".js-result");
let currencyElement = document.querySelector(".js-select");

converterElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let amount = +amountElement.value;
    let currency = currencyElement.value;
    let rate;

    switch (currency) {
        case "EUR":
            rate = 4.6965;
            break;

        case "USD":
            rate = 4.4369;
            break;

        case "GBP":
            rate = 5.4655;
    };

    result = (amount / rate);
    resultElement.innerHTML = `<strong>${amount.toFixed(2)}</strong>&nbsp;PLN = <strong>${result.toFixed(2)}</strong>&nbsp;${currency}`
});