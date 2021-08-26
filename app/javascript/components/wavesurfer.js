import WaveSurfer from 'wavesurfer.js'



const initWavesurfer = () => {


      const play_wave = document.querySelector("#btn_play");
      const pause_wave = document.getElementById("btn_pause");
      const stop_wave = document.getElementById("btn_stop");

  const container = document.querySelector("#waveform")
  if (container) {
    const wave_surfer = WaveSurfer.create({
      container: '#waveform',
      waveColor: 'blue',
      vertical: true,
      progressColor: 'purple'
    });
    wave_surfer.on('ready', function () {
      wave_surfer.play();
    });
    console.dir(play_wave);

    play_wave.addEventListener("click", (event) => {
      wave_surfer.play();
    });
    pause_wave.addEventListener("click", (event) => {
      wave_surfer.pause();
    });
    stop_wave.addEventListener("click", (event) => {
      wave_surfer.stop();
    });

    window.addEventListener('resize', function (){
      const currentProgress = wave_surfer.getCurrentTime() / wave_surfer.getDuration();


      wave_surfer.empty();
      wave_surfer.drawBuffer();

      wave_surfer.seekTo(currentProgress);

    });

    wave_surfer.load('@project.song.key')
  }
}

export { initWavesurfer }
