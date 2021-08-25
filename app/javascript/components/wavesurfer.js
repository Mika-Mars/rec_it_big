import WaveSurfer from 'wavesurfer.js'

const initWavesurfer = () => {
  const container = document.querySelector("#waveform")
  if (container) {
    const wave_surfer = WaveSurfer.create({
      container: '#waveform',
      waveColor: 'violet',
      progressColor: 'purple'
    });
    wave_surfer.on('ready', function () {
      wave_surfer.play();
    });
  }
}

export { initWavesurfer}

