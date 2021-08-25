const addNewProject = () => {
  const button = document.querySelector('#new-project');
  const formContaineur = document.querySelector('#form-project');

  button.addEventListener('click', () => {
    if( window.getComputedStyle( formContaineur ).right === "-400px" ) {
        formContaineur.style.right = "-20px";
    } else {
        formContaineur.style.right = "-400px";
    }
  });
}

export { addNewProject };
