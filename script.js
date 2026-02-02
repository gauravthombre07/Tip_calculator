let billAmountElement = (document.getElementById("billAmount"));
let percentageTipElement = (document.getElementById("percentageTip"));
let tipAmountElement = (document.getElementById("tipAmount"));
let totalAmountElement = (document.getElementById("totalAmount"));

let errorMessage = document.getElementById("errorMessage");

function calculateButton() {
    let billAmount = parseInt(billAmountElement.value);
    let percentagetip = parseInt(percentageTipElement.value);
    if (isNaN(billAmount) || isNaN(percentagetip)) {
        errorMessage.textContent = "Please Enter a Valid Input";
        return;
    }
    errorMessage.textContent = '';
    let calculateTip = ((percentagetip / 100) * billAmount);
    tipAmountElement.value = calculateTip.toFixed(2);
    let total = billAmount + calculateTip;
    totalAmountElement.value = total.toFixed(2);
}
