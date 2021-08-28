import WaveSurfer from 'wavesurfer.js'

const initWavesurfer = () => {
  const play_wave = document.querySelector("#btn_play");
  const pause_wave = document.getElementById("btn_pause");
  const stop_wave = document.getElementById("btn_stop");
  const container = document.querySelector("#waveform");
  const voices = document.querySelectorAll(".voices");

  if (container) {
    if (container.dataset.instru) {
      const wave_surfer = WaveSurfer.create({
        container: '#waveform',
        waveColor: 'black',
        vertical: true,
        minCanvasWidth: 220,
        progressColor: '#33c6f4',
        backend: 'MediaElement'
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
          if (voice.dataset.time == Math.round(wave_surfer.getCurrentTime())) {
            voice.play();
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
