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

    // buttons.play.addEventListener("click", function() {
    //   wave_surfer.pause();

    //   buttons.pause.disabled = true;
    //   buttons.play.disabled = false;
    // }, false);

    // buttons.play.addEventListener("click", function() {
    //   wave_surfer.stop();

    //   buttons.stop.disabled = true;
    //   buttons.pause.disabled = true;
    //   buttons.play.disabled = false;
    // }, false);

    // wave_surfer.on('ready',  function () {
    //   buttons.play.disabled = false;
    // });

    window.addEventListener('resize', function (){
      const currentProgress = wave_surfer.getCurrentTime() / wave_surfer.getDuration();


      wave_surfer.empty();
      wave_surfer.drawBuffer();

      wave_surfer.seekTo(currentProgress);

      // buttons.stop.disabled = false;
      // buttons.pause.disabled = true;
      // buttons.play.disabled = false;
    });

    wave_surfer.load('http://ia902606.us.archive.org/35/items/shortpoetry_047_librivox/song_cjrg_teasdale_64kb.mp3')
  }
}

export { initWavesurfer }
