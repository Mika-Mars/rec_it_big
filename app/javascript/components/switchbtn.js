const togglevr = () => {
  const switchbtns = document.querySelectorAll(".vr-switch");
  const switchrails = document.querySelectorAll(".switch-rail");
  switchrails.forEach(switchrail => {
    switchrail.addEventListener('click', (event) => {
      console.dir(event.currentTarget);
      const switchcard = event.currentTarget
      switchcard.style.backgroundColor = "purple"
    })
  });
}

export { togglevr }
