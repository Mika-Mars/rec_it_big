const togglevr = () => {
  const switchrails = document.querySelectorAll('.switch-rail');
  if (switchrails.length > 0) {
    switchrails.forEach((switchrail) => {
      handleClickVoiceRecordEnability(switchrail);
    });
  }
};

const handleClickVoiceRecordEnability = (element) => {
  element.addEventListener('click', (event) => {
        const switchcard = event.currentTarget;
        const switchbtns = switchcard.querySelector('.switch-slider');
        let color = switchcard.style.backgroundColor;
        switchcard.style.backgroundColor =
          color === 'black' ? 'purple' : 'black';
        switchbtns.classList.toggle('slide');
        const formData = new FormData();
        formData.append('authenticity_token', element.dataset.voicetoken);
        fetch(
          window.location.href + '/voice_records/' + element.dataset.voiceid,
          {
            method: 'PATCH',
            headers: { Accept: 'application/json' },
            body: formData,
          }
        )
          .then((r) => r.json())
          .then((data) => {
            const vrId = data.voiceRecordId;
            const audioDiv = document.querySelector(
    `audio[data-voiceid="${vrId}"]`
            );
            const vrDiv = document.querySelector(`#voice${vrId}`);
            audioDiv.dataset.enabled = data.enabled;
            if (data.enabled === 'true') {
              vrDiv.classList.remove('voice-disable');
            } else {
              vrDiv.classList.add('voice-disable');
            }
          });
      });
}

export { togglevr, handleClickVoiceRecordEnability };
