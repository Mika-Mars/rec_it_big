import WaveSurfer from 'wavesurfer.js';

const initWavesurfer = () => {
  const play_wave = document.querySelector("#btn_play");
  if (play_wave) {
    const container = document.querySelector("#waveform");
    if (container.dataset.instru) {
      const pause_wave = document.getElementById("btn_pause");
      const stop_wave = document.getElementById("btn_stop");
      const voices = document.querySelectorAll(".voices");

      const wave_surfer = WaveSurfer.create({
        container: '#waveform',
        waveColor: '#B06D9B',
        vertical: true,
        minCanvasWidth: 220,
        barWidth: 3,
        barHeight: 1,
        barGap: 1,
        height: 1500,
        progressColor: 'white',
        backend: 'MediaElement',
        autoCenter: true,
        responsive: true,
        scrollParent: true,

      });
      play_wave.addEventListener("click", (event) => {
        wave_surfer.play();
      });
      pause_wave.addEventListener("click", (event) => {
        wave_surfer.pause();
      });
      stop_wave.addEventListener("click", (event) => {
        wave_surfer.stop();
      });
      wave_surfer.load(container.dataset.instru);

      wave_surfer.on('audioprocess', () => {
        voices.forEach(voice => {
          if (voice.dataset.start == Math.round(wave_surfer.getCurrentTime())) {
            voice.play();
          }
        })
      })
      wave_surfer.on('click', () => {
        voices.forEach(voice => {
          if (voice.dataset.start <= wave_surfer.getCurrentTime() && wave_surfer.getCurrentTime() <= voice.dataset.end) {
            voice.currentTime = wave_surfer.getCurrentTime() - voice.dataset.start;
            voice.play();
          } else {
            voice.pause();
            voice.currentTime = 0;
          }
        })
      })
      wave_surfer.on('pause', () => {
        voices.forEach(voice => {
          voice.pause();
          voice.currentTime = 0;
        })
      })
    }
  }
}

export {
  initWavesurfer
}
