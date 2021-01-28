// Registration Form
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const toggled = document.getElementById('toggled');
const terms = document.getElementById('terms-error');

// Function
// Show error outline
function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = 'form-control error';
  const small = formControl.querySelector('small');
  small.innerText = message;
}

// Show Success Outline
function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
}

// Check if email is valid
function checkEmail(input) {
  let response = false;
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(input.value.trim())) {
    showSuccess(input);
    response = true;
  } else {
    showError(input, 'Email is not valid');
  }
  return response;
}

// Check required fields
function checkRequired(inputArray) {
  let response = false;
  inputArray.forEach(function (input) {
    if (input.value.trim() === '') {
      showError(input, `${getFieldName(input)} is required`);
    } else {
      showSuccess(input);
      response = true;
    }
  });
  return response;
}

// Check Required Checkbox
function checkRequiredCheckbox(input) {
  let response = true;
  if (!input.checked) {
    const terms = document.getElementById('terms-error');
    terms.className = 'required';
    terms.innerText =
      'Please indicate that you have read and agree to the Terms and Conditions and Privacy Policy';
    response = false;
  }
  return response;
}

// Check if passwords match
function checkPasswordsMatch(input1, input2) {
  let response = true;
  if (input1.value !== input2.value) {
    showError(input2, 'Passwords do not match');
    response = false;
  }
  return response;
}

// check the length of input
function checkLength(input, min, max) {
  let response = false;
  if (input.value.length < min) {
    showError(
      input,
      `${getFieldName(input)} must be at least ${min} characters`
    );
  } else if (input.value.length > max) {
    showError(
      input,
      `${getFieldName(input)} must be less than ${max} characters`
    );
  } else {
    showSuccess(input);
    response = true;
  }
  return response;
}

// Returns capitalized input id name
function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// Checks if all inputs successful
function addStorageItems(inputArray) {
  if (
    checkRequired([username, email, password, password2]) &&
    checkLength(username, 3, 15) &&
    checkLength(password, 6, 25) &&
    checkEmail(email) &&
    checkPasswordsMatch(password, password2) &&
    checkRequiredCheckbox(toggled)
  ) {
    inputArray.forEach(function (input) {
      sessionStorage.setItem(input.id, input.value);
      sessionStorage.setItem('loginstatus', 'yes');
    });
    redirectVerification();
  }
}

// Redirect to Verification Page
function redirectVerification() {
  window.location.assign('email-verification.html');
}

// Event Listeners

form.addEventListener('submit', function (e) {
  e.preventDefault();
  addStorageItems([username, email, password, password2]);
});
