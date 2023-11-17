// Timer field
const dayElement = document.querySelector('.day');
const hourElement = document.querySelector('.hour');
const minuteElement = document.querySelector('.minute');
const secondElement = document.querySelector('.second');

// Buttons
const startButton = document.querySelector('.start');
const pauseButton = document.querySelector('.pause');
const stopButton = document.querySelector('.stop');

// Listeners
// start
startButton.addEventListener('click', () => {
	clearInterval(interval);
	interval = setInterval(startTimer, 1000);
});
// pause
pauseButton.addEventListener('click', () => {
	clearInterval(interval);
});
//stop
stopButton.addEventListener('click', () => {
	clearInterval(interval);
	day = 00;
	hour = 00;
	minute = 00;
	second = 00;
	dayElement.textContent = '00';
	hourElement.textContent = '00';
	minuteElement.textContent = '00';
	secondElement.textContent = '00';
});

// Variables
let day = 00,
	hour = 00,
	minute = 00,
	second = 00,
	interval;

function startTimer() {
	// Second
	second++;
	secondElement.innerText = '0' + second;
	if (second > 9) {
		secondElement.innerText = second;
	}

	// Minute
	if (second > 59) {
		minute++;
		minuteElement.innerText = '0' + minute;
		second = 0;
		secondElement.innerText = '0' + second;
	}
	if (minute > 9) {
		minuteElement.innerText = minute;
	}
	// Hour
	if (minute > 59) {
		hour++;
		hourElement.innerText = '0' + hour;
		minute = 0;
		minuteElement.innerText = '0' + minute;
	}
	if (hour > 9) {
		hourElement.innerText = hour;
	}
	// Day
	if (hour > 23) {
		day++;
		dayElement.innerText = '0' + day;
		hour = 0;
		hourElement.innerText = '0' + hour;
	}
	saveTimerValue();
}


