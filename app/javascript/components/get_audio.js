const getAudio = () => {
  const constraints = {audio: true, video: false};
  const recButton = document.querySelector('#footerbtn');

  recButton.addEventListener('click', () => {
    navigator.mediaDevices.getUserMedia(constraints)
      .then( (mediastream) => {
        const mediaRecorder = new MediaRecorder(mediastream);
        mediaRecorder.start();
        recButton.style.color = "red";
        console.log("recorder started");
      })
  })
}

export { getAudio };
