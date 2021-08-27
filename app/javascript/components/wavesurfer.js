import WaveSurfer from 'wavesurfer.js'



const initWavesurfer = () => {


      const play_wave = document.querySelector("#btn_play");
      const pause_wave = document.getElementById("btn_pause");
      const stop_wave = document.getElementById("btn_stop");

  const container = document.querySelector("#waveform")
  if (container) {
    const wave_surfer = WaveSurfer.create({
      container: '#waveform',
      waveColor: 'black',
      vertical: true,
      minCanvasWidth: 220,
      progressColor: '#33c6f4'
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

    wave_surfer.load('http://ia902606.us.archive.org/35/items/shortpoetry_047_librivox/song_cjrg_teasdale_64kb.mp3')
  }
}

export { initWavesurfer }
