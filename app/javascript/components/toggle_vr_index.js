const toggleVrIndex = () => {
  const indexbtn = document.querySelector('.pj-add');
  const index = document.querySelector('.vr-index');
  if (indexbtn) {
    indexbtn.addEventListener('click', (event) => {
      if (getComputedStyle(index).right === "-350px") {
        index.style.right = "6px";
      } else {
        index.style.right = "-350px";
      }
    })
  }
}

export { toggleVrIndex }
