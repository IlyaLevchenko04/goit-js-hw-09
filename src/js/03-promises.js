function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((fulfill, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        fulfill({ position, delay })
      } else {
        reject({ position, delay })
      }
    }, delay);
  })
}



const form = document.querySelector('.form');
const delayInput = document.querySelector('input[name = "delay"]');
const stepInput = document.querySelector('input[name = "step"]');
const amountInput = document.querySelector('input[name = "amount"]');

form.addEventListener('submit', onSubmit)

function onSubmit(evt) {
  evt.preventDefault();
  const firstDelay = Number(delayInput.value);
  const step = Number(stepInput.value);
  const amount = Number(amountInput.value);
  
  for (let i = 1; i <= amount; i += 1){
    const delayStep = firstDelay + step * (i - 1);
    createPromise(i, delayStep).then(onSuccess).catch(onError)
  };
};

function onSuccess({ position, delay }) { 
  alert(`✅ Fulfilled promise ${position} in ${delay}ms`);
};

function onError({ position, delay }) {
 alert(`❌ Rejected promise ${position} in ${delay}ms`);
};


