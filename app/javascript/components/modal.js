const addNewSong = () => {
  const button = document.querySelector('#footeraddbtn');
  const formContainer = document.querySelector('.modalsong');
  if (button && formContainer) {
    button.addEventListener('click', () => {
      formContainer.classList.toggle("hidden");
    });
  }
}

export {
  addNewSong
};
