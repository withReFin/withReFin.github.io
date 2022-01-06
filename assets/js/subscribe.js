function addEmail() {
    const data = {
        'email': document.getElementById("subemail").value
    }
    const url = 'https://g238fpy5tl.execute-api.ap-south-1.amazonaws.com/first/add-email'
    fetch(url, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
            'Access-Control-Allow-Origin': '*', 
            'Access-Control-Allow-Methods': '*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.text())
    .then(data => {
        alert('Thanks for Subscribing!!')
    })
    .catch(err => {
        alert('Error while subscribing!! Please try again.')
    })
}

emailField = document.getElementById("subemail")
emailField.addEventListener('keyup', () => {
    const value = document.getElementById("subemail").value
    const valid = validateEmail(value)
    document.getElementById("subemail").style.color = valid ? 'black' : 'red'
    document.getElementById("subscribe").disabled = !valid;
})

function validateEmail(input) {
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (input.match(validRegex)) {
        return true;
    } else {
        return false;
    }

}