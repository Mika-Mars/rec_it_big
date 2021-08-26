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
            const blob = new Blob(chunks, {
              'type': 'audio/ogg; codecs=opus'
            });
            chunks = [];
            console.log(blob);
            const formData = new FormData();
            formData.append('audio-file', blob);
            fetch(`http://localhost:3000/projects/${recButton.dataset.project}/voicerecords`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                title: "a changer",
                starting_time: 99,
                project_id: `${recButton.dataset.project}`,
                voice: formData
              })
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
