{
    const claculateResult = (currency, amount) => {

        const rateEUR = 4.6965;
        const rateUSD = 4.4369;
        const rateGBP = 5.4655;

        switch (currency) {
            case "EUR":
                return amount / rateEUR;

            case "USD":
                return amount / rateUSD;

            case "GBP":
                return amount / rateGBP;
        }

    };

    const updateResultText = (amount, result, currency) => {

        const resultElement = document.querySelector(".js-result");
        
        resultElement.innerHTML = `<strong>${amount.toFixed(2)}</strong>&nbsp;PLN = <strong>${result.toFixed(2)}</strong>&nbsp;${currency}`
        
    }

    const onFormSubmit = (event) => {
        event.preventDefault();

        const amountElement = document.querySelector(".js-amount");
        const currencyElement = document.querySelector(".js-select");

        const amount = +amountElement.value;
        const currency = currencyElement.value;

        const result = claculateResult(currency, amount)

        updateResultText(amount, result, currency);
    };

    const init = () => {

        const converterElement = document.querySelector(".js-converter");

        converterElement.addEventListener("submit", onFormSubmit);
    };

    init();
}