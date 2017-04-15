var emailInput = document.getElementById('inputEmail');
var passwordInput = document.getElementById('inputPassword');
var emailErrorText = document.getElementById('login-email-error-text');
var passwordErrorText = document.getElementById('login-password-error-text');
var emailIsNotEmpty = false;
var passwordIsNotEmpty = false;
var loginButton = document.getElementById('login-button');

function checkLoginFields() {
    if(emailIsNotEmpty && passwordIsNotEmpty) {
        loginButton.classList.remove('disabled');
    } else {
        if(!emailIsNotEmpty) {
            emailErrorText.style.visibility = 'visible';
        }
        if(!passwordIsNotEmpty) {
            passwordErrorText.style.visibility = 'hidden';
        }
    }
}

emailInput.addEventListener('blur', function() {
    if(!emailInput) {
        emailErrorText.style.visibility = 'visible';
    } else {
        emailIsNotEmpty = true;
        emailErrorText.style.visibility = 'hidden';
    }

    checkLoginFields();
});

passwordInput.addEventListener('blur', function() {
    if(!passwordInput) {
        passwordErrorText.style.visibility = 'visible';
    } else {
        passwordIsNotEmpty = true;
        passwordErrorText.style.visibility = 'hidden';
    }

    checkLoginFields();
});

