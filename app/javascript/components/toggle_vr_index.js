const toggleVrIndex = () => {
  const indexbtn = document.querySelector('.pj-add');
  const index = document.querySelector('.vr-index');
  console.log(index)
  console.log(indexbtn)
  if (indexbtn) {
    indexbtn.addEventListener('click', (event) => {
      if (getComputedStyle(index).right === "-350px") {
        index.style.right = "10px";
      } else {
        index.style.right = "-350px";
      }
    })
  }
}

export { toggleVrIndex }
