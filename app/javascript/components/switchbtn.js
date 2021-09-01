const togglevr = () => {
  const switchrails = document.querySelectorAll(".switch-rail");
  if (switchrails.length > 0) {
    switchrails.forEach(switchrail => {
      switchrail.addEventListener('click', (event) => {
        const switchcard = event.currentTarget
        const switchbtns = switchcard.querySelector(".switch-slider");
        let color = switchcard.style.backgroundColor;
        switchcard.style.backgroundColor = color === 'black' ? 'purple' : 'black';
        switchbtns.classList.toggle("slide");
        const formData = new FormData();
        formData.append('authenticity_token', switchrail.dataset.voicetoken);
        fetch(window.location.href + "/voice_records/" + switchrail.dataset.voiceid, {
          method: 'PATCH',
          body: formData
        });
      })
    });
  }
}

export { togglevr }
