const loginEmail = document.getElementById('email');
const loginPass = document.getElementById('password');
const loginBtn = document.getElementById('login-btn');

// Show error outline
function showErrorLogin(input, message) {
  const formControl = input.parentElement;
  formControl.className = 'login-form-control error';
  const small = formControl.querySelector('small');
  small.innerText = message;
}

function showNoError(input) {
  const formControl = input.parentElement;
  formControl.className = 'login-form-control success';
}

// Check if passwords match
function checkEmailsMatch(input) {
  let response;
  if (input.value.trim() === '') {
    showErrorLogin(input, `${getFieldName(input)} is required`);
  } else if (input.value !== sessionStorage.getItem('email')) {
    showErrorLogin(input, 'Please enter correct email.');
  } else {
    showNoError(input);
    response = true;
  }
  return response;
}

// Check if passwords match
function checkPasswordsMatch(input) {
  let response;
  if (input.value.trim() === '') {
    showErrorLogin(input, `${getFieldName(input)} is required`);
  } else if (input.value !== sessionStorage.getItem('password')) {
    showErrorLogin(input, 'please enter correct password');
  } else {
    showNoError(input);
    response = true;
  }
  return response;
}

// Returns capitalized input id name
function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// Redirect to Home
function redirectHome() {
  window.location.assign('index.html');
}

loginBtn.addEventListener('click', (e) => {
  e.preventDefault();

  checkEmailsMatch(loginEmail);
  checkPasswordsMatch(loginPass);

  if (checkEmailsMatch(loginEmail) && checkPasswordsMatch(loginPass)) {
    sessionStorage.setItem('loginstatus', 'yes');
    redirectHome();
  }
});
