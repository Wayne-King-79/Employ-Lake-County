var firstName = document.getElementById('signFirstName');
var lastName = document.getElementById('signLastName');
var companyName = document.getElementById('signCompanyName');
var workTitle = document.getElementById('signWorkTitle');
var emailAddress = document.getElementById('signEmail');
var password1 = document.getElementById('signPassword');
var password2 = document.getElementById('signPassword2');
var createButton = document.getElementById('createBtn');
var allSpans = document.getElementsByTagName('span');
var isFirstNameValid = false;
var isLastNameValid = false;
var isCompanyNameValid = false;
var isWorkTitleValid = false;
var isEmailAddressValid = false;
var isPassword1Valid = false;
var isPassword2Valid = false;

function isFormValid() {
     if(isFirstNameValid && isLastNameValid && isCompanyNameValid && isWorkTitleValid && isEmailAddressValid && isPassword1Valid && isPassword2Valid) {
         createButton.classList.remove("disabled");
         return true;
     } else {
         createButton.classList.add('disabled');
         return false;
     }
}

firstName.addEventListener('blur', function() {
    if(!firstName.value) {
        isFirstNameValid = false;
        document.getElementById("fname-error-text").style.visibility = 'visible';
        isFormValid();
    } else {
        document.getElementById("fname-error-text").style.visibility = 'hidden';
        isFirstNameValid = true;
        isFormValid();
    }
});

lastName.addEventListener('blur', function() {
    if(!lastName.value) {
        isLastNameValid = false;
        document.getElementById("lname-error-text").style.visibility = 'visible';
        isFormValid();
    } else {
        document.getElementById("lname-error-text").style.visibility = 'hidden';
        isLastNameValid = true;
        isFormValid();
    }
});

companyName.addEventListener('blur', function() {
    if(!companyName.value) {
        isCompanyNameValid = false;
        document.getElementById("cname-error-text").style.visibility = 'visible';
        isFormValid();
    } else {
        document.getElementById("cname-error-text").style.visibility = 'hidden';
        isCompanyNameValid = true;
        isFormValid();
    }
});

workTitle.addEventListener('blur', function() {
    if(!workTitle.value) {
        isWorkTitleValid = false;
        document.getElementById("wtitle-error-text").style.visibility = 'visible';
        isFormValid();
    } else {
        document.getElementById("wtitle-error-text").style.visibility = 'hidden';
        isWorkTitleValid = true;
        isFormValid();
    }
});

emailAddress.addEventListener('blur', function() {
    if(!emailAddress.value) {
        isEmailAddressValid = false;
        document.getElementById("email-error-text").style.visibility = 'visible';
        isFormValid();
    } else {
        document.getElementById("email-error-text").style.visibility = 'hidden';
        isEmailAddressValid = true;
        isFormValid();
    }
});

password1.addEventListener('blur', function() {
    if(!password1.value) {
        isPassword1Valid = false;
        document.getElementById("password-error-text").style.visibility = 'visible';
        isFormValid();
    } else {
        if(password1.value.length == 7) {
            document.getElementById("password-error-text").style.visibility = 'hidden';
            isPassword1Valid = true;
            isFormValid();
        } else {
            document.getElementById("password-error-text").style.visibility = 'visible';
            isPassword1Valid = false;
            isFormValid();
        }
        
    }
});

password2.addEventListener('input', function() {
    if(password2.value != password1.value) {
        isPassword2Valid = false;
        document.getElementById("match-password-error-text").style.visibility = 'visible';
        isFormValid();
    } else {
        document.getElementById("match-password-error-text").style.visibility = 'hidden';
        isPassword2Valid = true;
        isFormValid();
    }
});

password2.addEventListener('blur', function() {
    if(!password2.value) {
        isPassword2Valid = false;
        document.getElementById('match-password-error-text').style.visibility = 'visible';
        isFormValid();
    } else {
        document.getElementById("match-password-error-text").style.visibility = 'hidden';
        isPassword2Valid = true;
        isFormValid();
    }
});

createButton.addEventListener('click', function() {
    if(isFormValid()) {
        alert("Form submitted");
    } else {
        for(let i = 0; i < document.getElementsByClassName('err-text').length; i++) {
            document.getElementsByClassName('err-text')[i].style.visibility = 'visible';
        }
    }
});
