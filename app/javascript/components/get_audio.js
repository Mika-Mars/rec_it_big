import WaveSurfer from 'wavesurfer.js';
import MicrophonePlugin from '../plugins/microphone';

const getAudio = () => {
  const recButton = document.querySelector('#footer-btn-instru');
  if (recButton) {
    let startTime = 0;
    let endTime = 0;
    const constraints = {
      audio: true
    };
    let chunks = [];
    const wavesurfer = WaveSurfer.create({
      container: '#waveform-micro',
      waveColor: 'white',
      interact: false,
      hideScrollbar: true,
      cursorWidth: 0,
      barWidth: 6,
      barHeight: 1,
      barGap: 5,
      plugins: [
        MicrophonePlugin.create()
      ],
    });
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia(constraints)
        .then((stream) => {
          const instruCurrentTime = document.querySelector('#waveform audio');
          const mediaRecorder = new MediaRecorder(stream);
          recButton.addEventListener('click', () => {
            console.log("sacha")
            document.getElementById("rec-btn").classList.toggle('fa-record-vinyl-playing');
            if (mediaRecorder.state === "inactive") {
              mediaRecorder.start();
              console.log(mediaRecorder.state);
              wavesurfer.microphone.start();
              startTime = instruCurrentTime.currentTime;
              mediaRecorder.ondataavailable = (e) => {
                chunks.push(e.data);
              }
            } else {
              mediaRecorder.stop();
              console.log(mediaRecorder.state);
              wavesurfer.microphone.stop();
              endTime = instruCurrentTime.currentTime;
            }
          })
          mediaRecorder.onstop = () => {
            const blob = new Blob(chunks);
            chunks = [];
            const formData = new FormData();
            formData.append('voice_record[voice]', blob);
            formData.append('voice_record[title]', "a changer");
            formData.append('voice_record[starting_time]', startTime);
            formData.append('voice_record[ending_time]', endTime);
            formData.append('authenticity_token', recButton.dataset.token);
            fetch(window.location.href + "/voice_records", {
              method: 'POST',
              body: formData
            });
          }
        })
        .catch((err) => {
          console.log("error" + err);
        })
    } else {
      console.log('getUserMedia not supported on your browser!');
    }
  }
}

export {
  getAudio
};
