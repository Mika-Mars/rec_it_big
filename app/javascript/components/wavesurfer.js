const wave_surfer = WaveSurfer.create({
    container: '#waveform',
    waveColor: 'violet',
    progressColor: 'purple'



  });
  wave_surfer.on('ready', function () {
    wave_surfer.play();
  });
