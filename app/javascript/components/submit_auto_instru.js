const submitAutoInstru = () => {
  const btnInstru = document.getElementById('instru');
  if (btnInstru) {
    const form = document.getElementById('form-submit-instru');
    btnInstru.addEventListener('change', event => {
      event.preventDefault();
      form.submit();
    })
  }
}

export {
  submitAutoInstru
}
