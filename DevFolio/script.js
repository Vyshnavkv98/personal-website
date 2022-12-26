

  const scriptURL = 'https://script.google.com/macros/s/AKfycbxgeQY9Tdj799b7uR0YQHcwW-U6F6sYDwI4pMiRyYqQGS4tSr5beN4-7gxG5oDwtk7P/exec'
  const form = document.forms['submit-to-google-sheet']

 form.addEventListener('submit', e => {
   e.preventDefault()
   fetch(scriptURL, { method: 'POST', body: new FormData(form)})
     .then(response => console.log('Success!', response))
     .catch(error => console.error('Error!', error.message))
 })
