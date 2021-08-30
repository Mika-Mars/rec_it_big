import WaveSurfer from 'wavesurfer.js';

const initWavesurfer = () => {
  const play_wave = document.querySelector("#btn_play");
  const stop_wave = document.getElementById("btn_stop");
  const container = document.querySelector("#waveform");
  const voices = document.querySelectorAll(".voices");

  if (container) {

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
        progressColor: 'white',
        backend: 'MediaElement',
        autoCenter: true,
        responsive: true,
        scrollParent: true,
      });
      play_wave.addEventListener("click", (event) => {
        const isPlaying = event.currentTarget.dataset.playing === "true";
        const pauseIcon = document.querySelector("#pause-icon")
        const playIcon = document.querySelector("#play-icon")

        if (isPlaying) {
          event.currentTarget.dataset.playing = "false";
          wave_surfer.pause();
      
          playIcon.classList.remove("fa-pause");
          playIcon.classList.add("fa-play");

        } else {
          event.currentTarget.dataset.playing = "true";
          wave_surfer.play();
          playIcon.classList.remove("fa-play");
          playIcon.classList.add("fa-pause");
        }

      });

      stop_wave.addEventListener("click", (event) => {
        const isPlaying = event.currentTarget.dataset.playing === "true";
        const playIcon = document.querySelector("#play-icon");
        const pauseIcon = document.querySelector("#pause-icon")
          event.currentTarget.dataset.playing = "true";
          wave_surfer.stop();
          playIcon.classList.remove("fa-pause");
          playIcon.classList.add("fa-play");

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
