function validate(){
    var emailid = document.getElementById("email").value;
    var phonenumber = document.getElementById("phone").value;
    var emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    var phoneRegex = /^\d{10}$/;
    
    if(!emailRegex.test(emailid)){
        alert("Not a valid Email address");
        return false;
    }

    if(!phoneRegex.test(phonenumber)){
        alert("Not a valid Phone No");
        return false;
    }
    document.getElementById("message").innerHTML = "Submitted Successfully"
   

}
const scriptURL = 'https://script.google.com/macros/s/AKfycbxgeQY9Tdj799b7uR0YQHcwW-U6F6sYDwI4pMiRyYqQGS4tSr5beN4-7gxG5oDwtk7P/exec'
const form = document.forms['submit-to-google-sheet']

form.addEventListener('submit', e => {
 e.preventDefault()
 fetch(scriptURL, { method: 'POST', body: new FormData(form)})
   .then(response => console.log('Success!', response))
   .catch(error => console.error('Error!', error.message))
   form.reset();

})