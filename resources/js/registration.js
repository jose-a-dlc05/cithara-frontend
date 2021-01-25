// Registration Form
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('reg-password');
const password2 = document.getElementById('password-confirm');
console.log(form);

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
function isValidEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

// Event Listeners

form.addEventListener('submit', function (e) {
  e.preventDefault();

  if (username.value === '') {
    showError(username, 'Username is required');
  } else {
    showSuccess(username);
  }

  if (email.value === '') {
    showError(email, 'Email is required');
  } else if(!isValidEmail(email.value)) {
    showError(email, 'Email is not valid');
  } else {
    showSuccess(email);
  }

  if (password.value === '') {
    showError(password, 'Password is required');
  } else {
    showSuccess(password);
  }

  if (password2.value === '') {
    showError(password2, 'Password2 is required');
  } else {
    showSuccess(password2);
  }
});
