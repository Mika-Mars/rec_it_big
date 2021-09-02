import WaveSurfer from 'wavesurfer.js';

const initWavesurfer = () => {
  const container = document.querySelector("#waveform");
  if (container) {
    if (container.dataset.instru) {
      const play_wave = document.querySelector("#btn-play");
      const stop_wave = document.querySelector("#btn_stop");
      const voices = document.querySelectorAll(".voices");
      let arrayId = [];

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
      wave_surfer.load(container.dataset.instru);
      voices.forEach(voice => {
        const test = document.querySelector(`#voice${voice.dataset.voiceid}`);
        if (voice.dataset.enabled === "false") {
          test.classList.add("voice-disable");
        } else {
          test.classList.remove("voice-disable");
        }
      })
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
            const test = document.querySelector(`#voice${voice.dataset.voiceid}`);
            if (voice.dataset.enabled === "true") {
              if (voice.dataset.start <= audioInstru.currentTime && audioInstru.currentTime <= voice.dataset.end) {
                voice.currentTime = audioInstru.currentTime - voice.dataset.start;
                voice.play();
                test.classList.remove("voice-inactive");
                test.classList.add("voice-active");
                const voiceId = setTimeout(() => {
                  test.classList.add("voice-inactive");
                  test.classList.remove("voice-active");
                }, (voice.dataset.end - voice.currentTime) * 1000);
                arrayId.push(voiceId);
              }
              if (voice.dataset.start >= audioInstru.currentTime) {
                const id = setTimeout(() => {
                  voice.play();
                  test.classList.remove("voice-inactive");
                  test.classList.add("voice-active");
                  const voiceId = setTimeout(() => {
                    test.classList.add("voice-inactive");
                    test.classList.remove("voice-active");
                  }, (voice.dataset.end - voice.dataset.start) * 1000);
                  arrayId.push(voiceId);
                }, (voice.dataset.start - audioInstru.currentTime) * 1000);
                arrayId.push(id);
              }
            }
          })
        }
      });
      stop_wave.addEventListener("click", (event) => {
        const playIcon = document.querySelector("#play-icon");
        const playBtn = document.querySelector("#btn-play");
        playBtn.dataset.playing = "false";
        wave_surfer.stop();
        playIcon.classList.remove("fa-pause");
        playIcon.classList.add("fa-play");
        voices.forEach(voice => {
          const test = document.querySelector(`#voice${voice.dataset.voiceid}`);
          voice.pause();
          voice.currentTime = 0;
          test.classList.add("voice-inactive");
          test.classList.remove("voice-active");
        })
        arrayId.forEach(clearTimeout);
        arrayId = [];
        const e = document.getElementById("waveform");
        const eScroll = e.children[0];
        eScroll.scrollTop = 0;
      });



      wave_surfer.on('ready', updateTimer)
      wave_surfer.on('audioprocess', updateTimer)
      wave_surfer.on('seek', updateTimer)

      function updateTimer() {
        let formattedTime = secondsToTimestamp(wave_surfer.getCurrentTime());
        $('#waveform-time-indicator .wave-time').text(formattedTime);
      }

      function secondsToTimestamp(seconds) {
        seconds = Math.floor(seconds);
        let h = Math.floor(seconds / 3600);
        let m = Math.floor((seconds - (h * 3600)) / 60);
        let s = seconds - (h * 3600) - (m * 60);
        h = h < 10 ? '0' + h : h;
        m = m < 10 ? '0' + m : m;
        s = s < 10 ? '0' + s : s;
        return m + ':' + s;
      }
    }
  }
}

export {
  initWavesurfer
}
