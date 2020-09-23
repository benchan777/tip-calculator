// display 
const display = document.querySelector('#display')
const displayTotal = document.querySelector('#total-amount')
const displayTotalPerPerson = document.querySelector('#per-person-price')
const displayTipTotalPerPerson = document.querySelector('#per-person-tip')

// inputs
const billInput = document.querySelector('#bill')
const tipInput = document.querySelector('#tip')
const peopleInput = document.querySelector('#people')
const plusOneBill = document.querySelector('#plus-bill')
const minusOneBill = document.querySelector('#minus-bill')
const plusOneTip = document.querySelector('#plus-tip')
const minusOneTip = document.querySelector('#minus-tip')
const plusOnePerson = document.querySelector('#plus-person')
const minusOnePerson = document.querySelector('#minus-person')

// event listeners 
billInput.addEventListener('input', calculateTip)
tipInput.addEventListener('input', calculateTip)
peopleInput.addEventListener('input', calculateTip)
plusOneBill.addEventListener('click', addOneBill)
plusOneBill.addEventListener('click', calculateTip)
minusOneBill.addEventListener('click', subtractOneBill)
minusOneBill.addEventListener('click', calculateTip)
plusOneTip.addEventListener('click', addOneTip)
plusOneTip.addEventListener('click', calculateTip)
minusOneTip.addEventListener('click', subtractOneTip)
minusOneTip.addEventListener('click', calculateTip)
plusOnePerson.addEventListener('click', addOnePerson)
plusOnePerson.addEventListener('click', calculateTip)
minusOnePerson.addEventListener('click', subtractOnePerson)
minusOnePerson.addEventListener('click', calculateTip)

calculateTip()

// This function calculates the tip
function calculateTip() {
    const billValue = parseFloat(billInput.value)
    const tipValue = parseFloat(tipInput.value)
    const peopleValue = parseInt(peopleInput.value)

    const tipAmount = billValue * tipValue / 100
    const totalAmount = billValue + tipAmount
    const perPersonTip = tipAmount / peopleValue
    const amountPerPerson = totalAmount / peopleValue

    display.innerHTML = '$' + tipAmount.toFixed(2)
    displayTotal.innerHTML = '$' + totalAmount.toFixed(2)
    displayTipTotalPerPerson.innerHTML = '$' + perPersonTip.toFixed(2)
    displayTotalPerPerson.innerHTML = '$' + amountPerPerson.toFixed(2)
}

function addOneBill() {
    let quantity = parseFloat(billInput.value)
    quantity += 1.00;
    billInput.value = parseFloat(quantity)
}

function subtractOneBill() {
    let quantity = parseFloat(billInput.value)
    quantity -= 1.00;
    billInput.value = parseFloat(quantity)
}

function addOneTip() {
    let quantity = parseFloat(tipInput.value)
    quantity += 1.00;
    tipInput.value = parseFloat(quantity)
}

function subtractOneTip() {
    let quantity = parseFloat(tipInput.value)
    quantity -= 1.00;
    tipInput.value = parseFloat(quantity)
}

function addOnePerson() {
    let quantity = parseFloat(peopleInput.value)
    quantity += 1.00;
    peopleInput.value = parseFloat(quantity)
}

function subtractOnePerson() {
    let quantity = parseFloat(peopleInput.value)
    quantity -= 1.00;
    peopleInput.value = parseFloat(quantity)
}