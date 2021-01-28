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

// Check required field
function checkRequired(input) {
    if(input.value.trim() === '') {
      showError(input, `${getFieldName(input)} is required`);
    } else {
      showSuccess(input);
    }
}

// Returns capitalized input id name
function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}


sendForgottenEmail.addEventListener('click', (e) => {
  e.preventDefault();

  console.log('success');
  

});


