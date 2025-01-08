import {countryList } from "./codes.js";

let from_currency = document.querySelector("#from-currency");
let to_currency = document.querySelector("#to-currency");
let input_amount = document.querySelector(".amount-container > input");
let from_flag = document.querySelector("#from-flag");
let to_flag = document.querySelector("#to-flag");
let dropdown = document.querySelectorAll(".currency-container > div > select");

// Form submit event
const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(from_currency.value, to_currency.value, input_amount.value);
    let from_currency_value = from_currency.value;
    let to_currency_value = to_currency.value;
    let input_amount_value = input_amount.value;
    let exchange_rate = countryList[to_currency_value]/countryList[from_currency_value];
    let result = input_amount_value * exchange_rate;
    result = result.toFixed(5); // round to 2 decimal places
    document.querySelector(".result-container > .result-msg").innerText = `${input_amount_value} ${from_currency_value} = ${result} ${to_currency_value}`;
    document.querySelector(".result-container > .result-msg").classList.remove("hide");
});

// Updating country list in dropdown menu
for (let select of dropdown) {
    for (let key in countryList) {
        let option = document.createElement("option");
        option.value = key;
        option.innerText = key;
        select.appendChild(option);
        if(select.name === "from-currency" && key === "USD"){
            option.selected = "selected";
        }
        if(select.name === "to-currency" && key === "INR"){
            option.selected = "selected";
        }
    }

    select.addEventListener("change", () => {
        upgradeFlag();
    });
}

const upgradeFlag = () => {
    let from_currency_value = from_currency.value;
    let to_currency_value = to_currency.value;
    from_flag.src = `https://flagsapi.com/${from_currency_value.slice(0, 2)}/flat/64.png`;
    to_flag.src = `https://flagsapi.com/${to_currency_value.slice(0, 2)}/flat/64.png`;
}

const updateExchangeRate = () => {

}