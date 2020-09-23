const display = document.querySelector('#display')
const displayTotal = document.querySelector('#total-amount')
const billInput = document.querySelector('#bill')
const tipInput = document.querySelector('#tip')
const peopleInput = document.querySelector('#people')

calculateTip()
billInput.addEventListener('input', calculateTip)
tipInput.addEventListener('input', calculateTip)
peopleInput.addEventListener('input', calculateTip)

// This function calculates the tip
function calculateTip() {
    const billValue = parseFloat(billInput.value)
    const tipValue = parseFloat(tipInput.value)
    const peopleValue = parseInt(peopleInput.value)

    const tipAmount = billValue * tipValue / 100 / peopleValue
    const totalAmount = billValue + tipAmount

    display.innerHTML = tipAmount.toFixed(2)
    displayTotal.innerHTML = totalAmount.toFixed(2)
}