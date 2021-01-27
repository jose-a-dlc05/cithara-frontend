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


function checkCredentialsMatch(inputArray){
  // let response;
    inputArray.forEach(function(input) {
      console.log(input.value);
      console.log(sessionStorage.getItem('email'));
      console.log(sessionStorage.getItem('password'));
      //   if(input.value !== sessionStorage.getItem('email') || input.value !== sessionStorage.getItem('password')) {
    //   showErrorLogin(input, `${getFieldName(input)} does not match`);
    // } else {
    //   showNoError(input);
    //   // response = true;
    // }
  }); 
  // return response; 
}

// Check if passwords match
function checkEmailsMatch(input) {
  let response;
  if(input.value.trim() === '') {
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
  if(input.value.trim() === '') {
    showErrorLogin(input, `${getFieldName(input)} is required`);
  } else if (input.value !== sessionStorage.getItem('password')) {
    showErrorLogin(input, 'please enter correct password');
  } else {
    showNoError(input);
    response = true;
  }
  return response;
}

function checkCredentialsRequired(inputArray) {
  // let response;
  inputArray.forEach(function(input) {
    console.log(input.value === '');
    // if(input.value.trim() === '') {
    //   showErrorLogin(input, `${getFieldName(input)} is required`);
    // } else {
    //   showNoError(input);
    //   // response = true;
    // }
  });
  // return response;
}


// Returns capitalized input id name
function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// Redirect to Home
function redirectHome() {
      window.location.assign("index.html");
}



loginBtn.addEventListener('click', (e)=> {
  e.preventDefault();

  const inputArray = [loginEmail, loginPass];
  // checkCredentialsRequired(inputArray);
  checkEmailsMatch(inputArray[0]);
  checkPasswordsMatch(inputArray[1]);
  

  if(checkEmailsMatch(inputArray[0]) &&
    checkPasswordsMatch(inputArray[1])) {
      redirectHome();
    };
  }
);