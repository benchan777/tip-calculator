// display 
const display = document.querySelector('#display')
const displayTotal = document.querySelector('#total-amount')
const displayTotalPerPerson = document.querySelector('#per-person-price')
const displayTipTotalPerPerson = document.querySelector('#per-person-tip')

// inputs
const billInput = document.querySelector('#bill')
const tipInput = document.querySelector('#tip')
const peopleInput = document.querySelector('#people')
const plusOne = document.querySelector('#plus')
const minusOne = document.querySelector('#minus')

// event listeners 
billInput.addEventListener('input', calculateTip)
tipInput.addEventListener('input', calculateTip)
peopleInput.addEventListener('input', calculateTip)
plusOne.addEventListener('click', addOnePerson)
plusOne.addEventListener('click', calculateTip)
minusOne.addEventListener('click', subtractOnePerson)
minusOne.addEventListener('click', calculateTip)

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

function addOnePerson() {
    document.querySelector('#people').stepUp()
}

function subtractOnePerson() {
    document.querySelector('#people').stepDown()
}