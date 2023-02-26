
export function Stopwatch({ minuteDisplay,  secondDisplay, sound }){
    let timer;

    function displayData(minutes, seconds){
        minuteDisplay.textContent = String(minutes).padStart(2,"0");
        secondDisplay.textContent = String(seconds).padStart(2,'0');
    }

    function pauseCount(){
        clearTimeout(timer);
    }

    function counter(){
    
        timer = setTimeout(()=>{
            let seconds = Number(secondDisplay.textContent);
            let minutes = Number(minuteDisplay.textContent);
    
            if(seconds <= 0){
                seconds = 60;
            }
            seconds--;
            displayData(0, seconds);
    
            if(seconds == 59){
                minutes--;
                displayData(minutes, seconds);
            }
    
            if(minutes == 0 && seconds == 0){
                sound.activateAlarm();
                setTimeout(()=>{
                    resetCounter();
                }, 1500);
                return;
            }
            counter();
        }, 1000);
    }

    return { counter, displayData, pauseCount };
}