const initNoteAutoSave = () => {
  const txtarea = document.querySelector("#notes")
  if (txtarea) {
    txtarea.addEventListener('keyup', (event) => {
      const txt = event.currentTarget.value
      const token = event.currentTarget.dataset.token
      const formData = new FormData()
      formData.append("note[content]", txt)
      formData.append("authenticity-token", token)
      formData.append("_method", "patch")
      var myInit = {
        method: 'post',
        body: formData
      };
      fetch(window.location.href + "/notes", myInit)
    })
  }
}
export { initNoteAutoSave }
