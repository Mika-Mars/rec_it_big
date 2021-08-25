const getAudio = () => {
  const recButton = document.querySelector('#footerbtn');
  const constraints = {
    audio: true
  };
  let chunks = [];

  navigator.mediaDevices.getUserMedia(constraints)
    .then((stream) => {
      const mediaRecorder = new MediaRecorder(stream);
      recButton.addEventListener('click', () => {
        if (mediaRecorder.state === "inactive") {
          mediaRecorder.start()
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
        const blob = new Blob(chunks, {
          'type': 'audio/wav; codecs=MS_PCM'
        });
        chunks = [];
        const audioURL = window.URL.createObjectURL(blob);
        console.log(audioURL);
      }
    })
    .catch((err) => {
      console.log("error" + err);
    })
}

export {
  getAudio
};
