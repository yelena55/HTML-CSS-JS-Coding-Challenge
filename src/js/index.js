// when HTML is fully loaded, add event listeners
window.addEventListener('DOMContentLoaded', function(event) {
    const emailInput = document.getElementById('email-input');
    const emailSubmitButton = document.getElementById('email-submit-button');

    //validate email input on input event
    emailInput.oninput = function(event) {
        if (event.target.value.trim() === '') {
            emailSubmitButton.setAttribute('disabled', '');
            emailInput.classList.remove('input-error');
        } else {
            if (validateEmail(event.target.value)) {
                emailSubmitButton.removeAttribute('disabled');
                emailInput.classList.remove('input-error');
            }else {
                emailSubmitButton.setAttribute('disabled', '');
                emailInput.classList.add('input-error');
            };
        };
    };

    //send email to API on submit button click
    emailSubmitButton.onclick = function(event) {
        //disable email submit button for a while for not allow to send another request
        emailSubmitButton.setAttribute('disabled', '');
        emailSubmitButton.innerText = 'Signing Up...';

        //make POST request to API endpoint with entered email
        fetch('https://api.staging.fourthwall.com/api/mailing-list', {
            method: 'POST',            
            headers: {
                'X-ShopId': 'sh_9f57832f-456b-44f3-888f-8a370b155a18',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: emailInput.value
            }),
        })
        .then(function(response) {
            return response.json();
        })
        .then(function(result) {
            //empty input data and show success message
            emailInput.value = '';
            emailSubmitButton.innerText = 'Sign Up';
            alert('You successfully signed up!');
        })
        .catch(function(error) {
            //activate submit button and show error message
            emailSubmitButton.setAttribute('disabled', '');
            emailSubmitButton.innerText = 'Sign Up';
            alert(error.message);
        });
    };
});

// check if input value is valid email
function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
};