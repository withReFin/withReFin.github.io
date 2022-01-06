latestSubscribed = []
emailField = document.getElementById("subemail")
subscribeButton = document.getElementById("subscribe")
subscribeButton.disabled = true

function addEmail() {
    const email = document.getElementById("subemail").value
    const data = {
        'email': email
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
        subscribeButton.innerHTML = 'Subscribed'
        latestSubscribed.push(email)
    })
    .catch(err => {
        alert('Error while subscribing!! Please try again.')
    })
}

emailField.addEventListener('keyup', () => {
    const value = document.getElementById("subemail").value
    const valid = validateEmail(value)
    emailField.style.color = valid ? 'black' : 'red'
    subscribeButton.disabled = !valid || latestSubscribed.includes(value)
    if(latestSubscribed.includes(value)) {
        subscribeButton.innerHTML = 'Subscribed'
    } else {
        subscribeButton.innerHTML = 'Subscribe'
    }
})

function validateEmail(input) {
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (input.match(validRegex)) {
        return true;
    } else {
        return false;
    }

}
