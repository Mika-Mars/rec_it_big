const addNewProject = () => {
  const button = document.querySelector('#new-project');
  const formContaineur = document.querySelector('#form-project');

  button.addEventListener('click', () => {
    if( window.getComputedStyle( formContaineur ).right === "-350px" ) {
        formContaineur.style.right = "108px";
    } else {
        formContaineur.style.right = "-350px";
    }
  });
}

export { addNewProject };
