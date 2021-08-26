const getAudio = () => {
  const recButton = document.querySelector('#footerbtn');
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
              console.log(mediaRecorder.state);
              mediaRecorder.ondataavailable = (e) => {
                chunks.push(e.data);
              }
            } else {
              mediaRecorder.stop();
              console.log(mediaRecorder.state);
            }
          })
          mediaRecorder.onstop = function (e) {
            const blob = new Blob(chunks);
            chunks = [];
            const formData = new FormData();
            formData.append('voice_record[voice]', blob);
            formData.append('authenticity_token', recButton.dataset.token);
            fetch(`http://localhost:3000/projects/${recButton.dataset.project}/voice_records`, {
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
