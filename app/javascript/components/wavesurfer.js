import WaveSurfer from 'wavesurfer.js'


const buttons = {
  play: document.getElementById("btn_play"),
  pause: document.getElementById("btn_pause"),
  stop: document.getElementById("btn_stop"),
};


const initWavesurfer = () => {
  const container = document.querySelector("#waveform")
  if (container) {
    const wave_surfer = WaveSurfer.create({
      container: '#waveform',
      waveColor: 'violet',
      vertical: true,
      progressColor: 'purple'
    });
    // wave_surfer.on('ready', function () {
    //   wave_surfer.play();
    // });
  }
}

buttons.play.addEventListener("click", function() {
  wave_surfer.play();

  buttons.stop.disabled = false;
  buttons.pause.disabled = false;
  buttons.play.disabled = true;
}, false);

buttons.play.addEventListener("click", function() {
  wave_surfer.pause();

  buttons.pause.disabled = true;
  buttons.play.disabled = false;
}, false);

buttons.play.addEventListener("click", function() {
  wave_surfer.stop();

  buttons.stop.disabled = true;
  buttons.pause.disabled = true;
  buttons.play.disabled = false;
}, false);

wave_surfer.on('ready',  function () {
  buttons.play.disabled = false;

});

window.addEventListener('resize', function (){
  const currentProgress = wave_surfer.getCurrentTime() / wave_surfer.getDuration();


  wave_surfer.empty();
  wave_surfer.drawBuffer();

  wave_surfer.seekTo(currentProgress);

  buttons.stop.disabled = false;
  buttons.pause.disabled = true;
  buttons.play.disabled = false;
}, false);

SpectrogramPlugin.load('https://www.youtube.com/watch?v=vrSyrOaoAug')



export { initWavesurfer}

