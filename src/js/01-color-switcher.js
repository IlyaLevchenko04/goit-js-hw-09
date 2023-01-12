const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
let intervalId = null;
const body = document.querySelector('body');
stopBtn.setAttribute('disabled', 'true');

function color() {
        return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
      }


startBtn.addEventListener('click', onStart);
stopBtn.addEventListener('click', onStop);

function onStart(){
    startBtn.setAttribute('disabled', 'true');
    intervalId = setInterval(() => {
        body.style.backgroundColor = color();
    }, 1000); 
    stopBtn.removeAttribute('disabled');

}
function onStop(){
         clearInterval(intervalId);
         startBtn.removeAttribute('disabled');
         stopBtn.setAttribute('disabled', 'true');
}

