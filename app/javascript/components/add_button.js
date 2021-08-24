const addNewProject = () => {
  const button = document.querySelector('#new-project');
  const formContaineur = document.querySelector('#form-project');

  button.addEventListener('click', () => {
    if( window.getComputedStyle( formContaineur ).display === "none" ) {
        formContaineur.style.display = "flex";
    } else {
        formContaineur.style.display = "none";
    }
  });
}

export { addNewProject };
