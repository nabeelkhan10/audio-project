let audio = document.querySelectorAll('audio');

let key;
window.addEventListener('keyup', function(e){
    let audio = document.querySelector(`audio[data-key="${e.code}"]`);
    if(!audio) return;
    audio.currentTime = 0;
    audio.play();
});
