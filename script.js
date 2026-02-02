function calculateButton() {
    let billAmount = parseFloat(document.getElementById("billAmount").value);
    let percentageTip = parseFloat(document.getElementById("percentageTip").value);
    let errorMessage = document.getElementById("errorMessage");

    if (isNaN(billAmount) || isNaN(percentageTip)) {
        errorMessage.textContent = "Please enter valid numbers";
        return;
    }

    errorMessage.textContent = "";

    let tipAmount = (percentageTip / 100) * billAmount;
    document.getElementById("tipAmount").value = tipAmount.toFixed(2);

    let totalAmount = billAmount + tipAmount;
    document.getElementById("totalAmount").value = totalAmount.toFixed(2);
}
