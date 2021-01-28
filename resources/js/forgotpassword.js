const email = document.getElementById('email');
const sendForgottenEmail = document.getElementById('send-forgot');

// Show error outline
function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = 'email-form error';
  const small = formControl.querySelector('small');
  small.innerText = message;
}

// Show Success Outline
function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = 'email-form success';
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

// Check required field
function checkRequired(input) {
  if (input.value.trim() === '') {
    showError(input, `${getFieldName(input)} is required`);
  } else {
    showSuccess(input);
  }
}

// Returns capitalized input id name
function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// Redirect to Verification Page
function redirectLogin() {
  window.location.assign('login.html');
}

sendForgottenEmail.addEventListener('click', (e) => {
  e.preventDefault();

  checkRequired(email);
  checkEmail(email);

  if (checkEmail(email)) {
    window.location.assign('login.html');
  }
});
