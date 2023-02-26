export function Controls({playButton, pauseButton, timerButton, stopButton}){

    function play(){
        playButton.classList.toggle('disable');
        pauseButton.classList.toggle('disable');
        timerButton.classList.add('disable');
        stopButton.classList.remove('disable');
    }

    function pause(){
        playButton.classList.toggle('disable');
        pauseButton.classList.toggle('disable');
    }

    return { play, pause }
}