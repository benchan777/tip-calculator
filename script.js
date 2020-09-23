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
        if(billValue < 0 ) {
            alert("You can't input a negative number!")
        }
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

// add one to the bill
function addOneBill() {
    let quantity = parseFloat(billInput.value)
    quantity += 1.00;
    billInput.value = parseFloat(quantity)
}

// subtract one from the bill
function subtractOneBill() {
    let quantity = parseFloat(billInput.value)
    quantity -= 1.00;
    billInput.value = parseFloat(quantity)
}

// add one to the tip
function addOneTip() {
    let quantity = parseFloat(tipInput.value)
    quantity += 1.00
    tipInput.value = parseFloat(quantity)
}

// subtract one from the ip
function subtractOneTip() {
    let quantity = parseFloat(tipInput.value)
    quantity -= 1.00
        if(quantity < 0) {
            alert("You can't have negative tip!")
            quantity += 1.00
        }
    tipInput.value = parseFloat(quantity)
}

// add one person
function addOnePerson() {
    let quantity = parseFloat(peopleInput.value)
    quantity += 1.00
    peopleInput.value = parseFloat(quantity)
}

// subtract one person
function subtractOnePerson() {
    let quantity = parseFloat(peopleInput.value)
    quantity -= 1.00
        if(quantity <= 0) {
            alert("You can't have 0 people!")
            quantity += 1.00
        }
    peopleInput.value = parseFloat(quantity)
}