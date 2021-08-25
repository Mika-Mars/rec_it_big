const wave_surfer = WaveSurfer.create({
    container: '#waveform',
    waveColor: 'violet',
    progressColor: 'purple'
  
    
    
  });
  wave_surfer.on('ready', function () {
    wave_surfer.play();
  });
  wave_surfer.load('http://ia902606.us.archive.org/35/items/shortpoetry_047_librivox/song_cjrg_teasdale_64kb.mp3');