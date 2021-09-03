import WaveSurfer from 'wavesurfer.js';

const initWavesurfer = () => {
  const container = document.querySelector('#waveform');
  if (container) {
    if (container.dataset.instru) {
      const play_wave = document.querySelector('#btn-play');
      const stop_wave = document.querySelector('#btn_stop');
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

      // const voicesToEnable = document.querySelectorAll('.voices');
      // voicesToEnable.forEach(voice => {
      //   const test = document.querySelector(`#voice${voice.dataset.voiceid}`);
      //   if (voice.dataset.enabled === "false") {
      //     test.classList.add("voice-disable");
      //   } else {
      //     test.classList.remove("voice-disable");
      //   }
      // })

      play_wave.addEventListener('click', (event) => {
        const voices = document.querySelectorAll('.voices');
        const isPlaying = event.currentTarget.dataset.playing === 'true';
        const playIcon = document.querySelector('#play-icon');
        const audioInstru = document.querySelector('#waveform audio');

        if (isPlaying) {
          event.currentTarget.dataset.playing = 'false';
          wave_surfer.pause();
          playIcon.classList.remove('fa-pause');
          playIcon.classList.add('fa-play');
          voices.forEach((voice) => {
            voice.pause();
            voice.currentTime = 0;
          });
          arrayId.forEach(clearTimeout);
          arrayId = [];
        } else {
          event.currentTarget.dataset.playing = 'true';
          wave_surfer.play();
          playIcon.classList.remove('fa-play');
          playIcon.classList.add('fa-pause');
          voices.forEach((voice) => {
            const test = document.querySelector(
              `#voice${voice.dataset.voiceid}`
            );
            if (voice.dataset.enabled === 'true') {
              if (
                voice.dataset.start <= audioInstru.currentTime &&
                audioInstru.currentTime <= voice.dataset.end
              ) {
                voice.currentTime =
                  audioInstru.currentTime - voice.dataset.start;
                voice.play();
                test.classList.remove('voice-inactive');
                test.classList.add('voice-active');
                const voiceId = setTimeout(() => {
                  test.classList.add('voice-inactive');
                  test.classList.remove('voice-active');
                }, (voice.dataset.end - audioInstru.currentTime) * 1000);
                arrayId.push(voiceId);
              }
              if (voice.dataset.start >= audioInstru.currentTime) {
                const id = setTimeout(() => {
                  voice.play();
                  test.classList.remove('voice-inactive');
                  test.classList.add('voice-active');
                  const voiceId = setTimeout(() => {
                    test.classList.add('voice-inactive');
                    test.classList.remove('voice-active');
                  }, (voice.dataset.end - voice.dataset.start) * 1000);
                  arrayId.push(voiceId);
                }, (voice.dataset.start - audioInstru.currentTime) * 1000);
                arrayId.push(id);
              }
            }
          });
        }
      });
      stop_wave.addEventListener('click', (event) => {
        const playIcon = document.querySelector('#play-icon');
        const playBtn = document.querySelector('#btn-play');
        const voices = document.querySelectorAll('.voices');
        playBtn.dataset.playing = 'false';
        wave_surfer.stop();
        playIcon.classList.remove('fa-pause');
        playIcon.classList.add('fa-play');
        voices.forEach((voice) => {
          const test = document.querySelector(`#voice${voice.dataset.voiceid}`);
          voice.pause();
          voice.currentTime = 0;
          test.classList.add('voice-inactive');
          test.classList.remove('voice-active');
        });
        arrayId.forEach(clearTimeout);
        arrayId = [];
      });
    }
  }
};

export { initWavesurfer };
