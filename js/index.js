import { Error } from './error.js';
import { Sounds } from "./sound.js";
import { Stopwatch } from './counter.js';
import { Controls } from './controls.js';

const minuteDisplay = document.querySelector('.minutes');
const secondDisplay = document.querySelector('.seconds');

const playButton = document.querySelector('.bt-play');
const pauseButton = document.querySelector('.bt-pause');
const timerButton = document.querySelector('.bt-timer');
const stopButton = document.querySelector('.bt-stop');

const soundOffButton = document.querySelector('.bt-soundOFF');
const soundOnButton = document.querySelector('.bt-soundON');

let minutes;

const sound = Sounds({ soundOffButton, soundOnButton });
const count = Stopwatch({minuteDisplay, secondDisplay, sound});
const controls = Controls({playButton, pauseButton, timerButton, stopButton});

playButton.addEventListener('click', startCounter);
pauseButton.addEventListener('click', pauseCounter);
timerButton.addEventListener('click', timeAdd);
stopButton.addEventListener('click', resetCounter);

sound.changeSoundsOn();
sound.changeSoundsOff();

function startCounter(){
    controls.play();
    count.counter();
}

function pauseCounter(){
    controls.pause();
    count.pauseCount();
}

function resetCounter(){
    location.reload();
}

function timeAdd(){
    minutes = prompt('Quanto tempo de Foco?');

    if(minutes == " " || minutes == null || minutes == ''){
        Error.open();
        return;
    }

    Error.close();
    count.displayData(minutes, 0);
}


