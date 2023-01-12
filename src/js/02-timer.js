import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    // Remaining days
    const days = Math.floor(ms / day);
    // Remaining hours
    const hours = Math.floor((ms % day) / hour);
    // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  
    return { days, hours, minutes, seconds };
  }

const tSeconds = document.querySelector('span[data-seconds]');
const tMinutes = document.querySelector('span[data-minutes]');
const tHours = document.querySelector('span[data-hours]');
const tDays = document.querySelector('span[data-days]');
const startBtn = document.querySelector('button[data-start]');
const input = document.querySelector('input');

 startBtn.setAttribute('disabled', 'true');




// function addLeadingZero(value){
//     if(value){
//         value.padStart(2,'0');
//     }
// }

// console.log(addLeadingZero(3))

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        if (selectedDates[0].getTime() < options.defaultDate.getTime()){
            startBtn.setAttribute('disabled', 'true');
            alert('Please choose a date in the future');
            return
        }else{
            startBtn.removeAttribute('disabled');
        }
        
        
        const timerId = setInterval(() =>{
            const currentDate = new Date();
            let currentMs = Number(currentDate.getTime());
            let futureMs = selectedDates[0].getTime();
            let msLeft = futureMs - currentMs;
            let convertedTime = convertMs(msLeft);
        
            tSeconds.textContent = convertedTime.seconds.toString().padStart(2,'0');
            tMinutes.textContent = convertedTime.minutes.toString().padStart(2,'0');
            tHours.textContent = convertedTime.hours.toString().padStart(2,'0');
            tDays.textContent = convertedTime.days.toString().padStart(2,'0');
        }, 1000);
    },
  };
flatpickr('input[type="text"]', options);

startBtn.addEventListener('click', ()=>{
    startBtn.setAttribute('disabled', 'true');
});

console.log('hello')

