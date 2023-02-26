
export function Sounds({ soundOffButton, soundOnButton }){

    const songs = new Audio('../sound/lofi.mp3');
    const alarm = new Audio('../sound/notificacao.mp3');

    soundOffButton.addEventListener('click', changeSoundsOn);
    soundOnButton.addEventListener('click', changeSoundsOff);

    function activateSound(){
        songs.play();
    }
    
    function disableSound(){
        songs.pause();
    }

    function changeSoundsOn(){
        soundOnButton.classList.remove('disable');
        soundOffButton.classList.add('disable');
        activateSound();
    }
    
    function changeSoundsOff(){
        soundOffButton.classList.remove('disable');
        soundOnButton.classList.add('disable');
        disableSound();
    }

    function activateAlarm(){
        alarm.play();
    }

    return { changeSoundsOn, changeSoundsOff, activateAlarm };
}
