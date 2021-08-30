const editProject = () => {
    const buttons = document.querySelectorAll('#edit_title');
    const formEdit = document.querySelectorAll('#form-edit');
    if (buttons) {
      buttons.forEach(button => {
        button.addEventListener('click', (e) => {
            console.dir(e.currentTarget)
        }) 
        
      });
    }
  }
  
  export { editProject };
  