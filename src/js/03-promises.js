function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    // Fulfill
     
  } else {
    // Reject

  }
}

const delayInput = document.getElementsByName('delay');
const stepInput = document.getElementsByName('step');
const amountInput = document.getElementsByName('amount');

console.log(delayInput);
console.log(stepInput);
console.log(amountInput);
