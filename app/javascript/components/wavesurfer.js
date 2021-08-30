import WaveSurfer from 'wavesurfer.js';

const initWavesurfer = () => {
  const play_wave = document.querySelector("#btn_play");
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
        barWidth: 2,
        barHeight: 1,
        barGap: 1,
        progressColor: '#ECE9E6',
        backend: 'MediaElement'
      });
      play_wave.addEventListener("click", (event) => {
        const isPlaying = event.currentTarget.dataset.playing === "true";
        const pauseIcon = document.querySelector("#pause-icon")
        const playIcon = document.querySelector("#play-icon")

        if (isPlaying) {
          event.currentTarget.dataset.playing = "false";
          wave_surfer.pause();
          // pauseIcon.classList.add("d-none");
          // playIcon.classList.remove("d-none");
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

      wave_surfer.on('seek', () => {
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
