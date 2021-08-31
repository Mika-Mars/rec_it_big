const editProject = () => {
    const openButtons = document.querySelectorAll(".open-btn");
    const modal = document.getElementById("modal_edit");
    if (openButtons.length>0) {
        openButtons.forEach((open) => {
            open.addEventListener('click', (e) => {
                document.getElementById(open.dataset.modalId).classList.toggle('d-none');
            });
        })
       
    };
};
  
  export { editProject };
  