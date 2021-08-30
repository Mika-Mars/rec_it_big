const getAudio = () => {
  const recButton = document.querySelector('#footer-btn-instru');
  const instruCurrentTime = document.querySelector('#waveform audio');
  let startTime = 0;
  let endTime = 0;
  const constraints = {
    audio: true
  };
  let chunks = [];
  if (recButton) {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia(constraints)
        .then((stream) => {
          const mediaRecorder = new MediaRecorder(stream);
          recButton.addEventListener('click', () => {
            if (mediaRecorder.state === "inactive") {
              mediaRecorder.start();
              startTime = instruCurrentTime.currentTime;
              mediaRecorder.ondataavailable = (e) => {
                chunks.push(e.data);
              }
            } else {
              mediaRecorder.stop();
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
