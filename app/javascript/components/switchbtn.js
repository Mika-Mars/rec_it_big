const togglevr = () => {
  const switchrails = document.querySelectorAll(".switch-rail");
  if (switchrails.length > 0) {
    switchrails.forEach(switchrail => {
      switchrail.addEventListener('click', (event) => {
        const switchcard = event.currentTarget
        const switchbtns = switchcard.querySelector(".switch-slider");
        let color = switchcard.style.backgroundColor;
        color = switchcard.style.backgroundColor = color === 'black' ? 'purple' : 'black';
        color === 'black' ? switchbtns.classList.remove("slide") : switchbtns.classList.add("slide");
      })
    });
  }
}

export { togglevr }
