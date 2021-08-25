const addNewSong = () => {
  const button = document.querySelector('#footeraddbtn');
  const formContaineur = document.querySelector('.modalsong');

  button.addEventListener('click', () => {
    formContaineur.classList.toggle("hidden");
  });
}

export { addNewSong };
