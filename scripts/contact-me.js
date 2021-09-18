function DisplayError(elementID, errorMessage, inputField) {
    document.getElementById(elementID).innerHTML = errorMessage;
    inputField.style.marginBottom = 0;
    document.getElementById(elementID).style.display = 'block';
}

function HideError(elementID, inputField) {
    inputField.style.marginBottom = '2vh';
    document.getElementById(elementID).style.display = 'none';
}

function validateForm() {
    console.log('inside validateForm func');
    let firstNameErr = lastNameErr = emailErr = messageErr = true;

    let regex;
    let firstName = document.getElementById('fname');
    let lastName = document.getElementById('lname');
    let email = document.getElementById('email');
    let message = document.getElementById('message');

    if (firstName.value.trim() == "") {
        DisplayError('fname-err', 'Please enter your first name', firstName);
    } else {
        regex = /^[a-zA-z]+$/;
        if (regex.test(firstName.value.trim()) == false) {
            DisplayError('fname-err', 'First name can only contain letters', firstName);
        } else {
            HideError('fname-err', firstName);
            firstNameErr = false;
        }
    }

    if (lastName.value.trim() == "") {
        DisplayError('lname-err', 'Please enter your last name', lastName);
    } else {
        regex = /^[a-zA-z]+$/;
        if (regex.test(lastName.value.trim()) == false) {
            DisplayError('lname-err', 'Last name can only contain letters', lastName);
        } else {
            HideError('lname-err', lastName);
            lastNameErr = false;
        }
    }

    if (email.value.trim() == "") {
        DisplayError('email-err', 'Please enter your email', email);
    } else {
        regex = /^[a-zA-z]+-\S+@[a-zA-z]+-\S+\.[a-zA-z]+$/;
        if (regex.test(email.value.trim()) == false) {
            DisplayError('email-err', "Email must be of the form 'word-characters@word-characters.word'", email);
        } else {
            HideError('email-err', email);
            emailErr = false;
        }
    }

    if (message.value.trim() == "") {
        DisplayError('message-err', 'Please enter your message', message);
    } else {
        regex = /\w+/g;
        let wordCount = message.value.trim().match(regex).length;
        if (wordCount > 250) {
            DisplayError('message-err', 'Message cannot be more than 250 words long', message);
        } else {
            HideError('message-err', message);
            messageErr = false;
        }
    }

    if (firstNameErr || lastNameErr || emailErr || messageErr) {
        return false;
    } else {
        let info = 'First name: ' + firstName.value + ', Last name: ' + lastName.value + ', email: ' + email.value + ', message: ' + message.value;
        alert('About to submit: \n' + info);
        return true;
    }
}