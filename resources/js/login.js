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
      if(input.value !== sessionStorage.getItem('password') || input.value !== sessionStorage.getItem('email')) {
      showErrorLogin(input, `${getFieldName(input)} does not match`);
    } else {
      showNoError(input);
      // response = true;
    }
  }); 
  // return response; 
}

function checkCredentialsRequired(inputArray) {
  // let response;
  inputArray.forEach(function(input) {
    if(input.value.trim() === '') {
      showErrorLogin(input, `${getFieldName(input)} is required`);
    } else {
      showNoError(input);
      // response = true;
    }
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
  checkCredentialsMatch(inputArray);
  checkCredentialsRequired(inputArray);
  
  

  // if(checkCredentialsMatch(inputArray) &&
  //   checkCredentialsRequired(inputArray)) {
  //     redirectHome();
  //   };
  }
);