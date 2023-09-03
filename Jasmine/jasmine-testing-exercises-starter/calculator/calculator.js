window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  let amount =document.getElementById("loan-amount")
  amount.value=100
  let year= document.getElementById("loan-years")
  year.value=3
  let rate=document.getElementById("loan-rate")
  rate.value=2.0
  let values={amount:amount.value,year:year.value,rate:rate.value}
  let payment=  calculateMonthlyPayment(values)

  let monthlyPayment=document.getElementById('monthly-payment')
  monthlyPayment.innerText=payment
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  let amount= document.getElementById('loan-amount')
  let amountInput= amount.value
  let year=document.getElementById('loan-years')
  let yearInput=year.value
  let rate=document.getElementById('loan-rate')
  let rateInput= rate.value
  let values={amount:amountInput,year:yearInput,rate:rateInput}
 // return values
   let payment=calculateMonthlyPayment(values)
   let monthlyPayment=document.getElementById('monthly-payment')
   monthlyPayment.innerText=payment
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  let p= values.amount
  let rate=values.rate
  let year=values.year
  let i=(rate/100)/12
  
  let n=Math.floor(year*12)
  console.log(n)
  let monthlyPayment= (p*i)/(1-((1+i)**-n))
 
  return monthlyPayment.toFixed(2)
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(payment) {
  let monthlyPayment=document.getElementById('monthly-payment')
  monthlyPayment.innerText=payment
}
