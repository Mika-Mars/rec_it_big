import WaveSurfer from 'wavesurfer.js';

const initWavesurfer = () => {
  const container = document.querySelector("#waveform");
  if (container) {
    if (container.dataset.instru) {
      const play_wave = document.querySelector("#btn_play");
      const stop_wave = document.querySelector("#btn_stop");
      const voices = document.querySelectorAll(".voices");
      let arrayId = [];

      const wave_surfer = WaveSurfer.create({
        container: '#waveform',
        waveColor: '#B06D9B',
        vertical: true,
        minCanvasWidth: 220,
        hideScrollbar: true,
        barWidth: 3,
        barHeight: 1,
        barGap: 1,
        progressColor: 'white',
        backend: 'MediaElement',
        autoCenter: true,
        responsive: true,
        scrollParent: true,
      });
      wave_surfer.load(container.dataset.instru);
      play_wave.addEventListener("click", (event) => {
        const isPlaying = event.currentTarget.dataset.playing === "true";
        const playIcon = document.querySelector("#play-icon")
        const audioInstru = document.querySelector('#waveform audio');

        if (isPlaying) {
          event.currentTarget.dataset.playing = "false";
          wave_surfer.pause();
          playIcon.classList.remove("fa-pause");
          playIcon.classList.add("fa-play");
          voices.forEach(voice => {
            voice.pause();
            voice.currentTime = 0;
          })
          arrayId.forEach(clearTimeout);
          arrayId = [];
        } else {
          event.currentTarget.dataset.playing = "true";
          wave_surfer.play();
          playIcon.classList.remove("fa-play");
          playIcon.classList.add("fa-pause");
          voices.forEach(voice => {
            if (voice.dataset.start <= audioInstru.currentTime && audioInstru.currentTime <= voice.dataset.end) {
              voice.currentTime = audioInstru.currentTime - voice.dataset.start;
              voice.play();
            }
            if (voice.dataset.start >= audioInstru.currentTime) {
              const id = setTimeout(() => {
                voice.play();
              }, ((voice.dataset.start - audioInstru.currentTime) * 1000) - 500);
              arrayId.push(id);
            }
          })
        }
      });
      stop_wave.addEventListener("click", (event) => {
        const playIcon = document.querySelector("#play-icon");
        event.currentTarget.dataset.playing = "false";
        wave_surfer.stop();
        playIcon.classList.remove("fa-pause");
        playIcon.classList.add("fa-play");
        voices.forEach(voice => {
          voice.pause();
          voice.currentTime = 0;
        })
        arrayId.forEach(clearTimeout);
        arrayId = [];
      });
    }
  }
}

export {
  initWavesurfer
}
