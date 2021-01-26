const verifiedUser = sessionStorage.getItem('username');
const user = document.getElementById('userId');
const sendEmail = document.getElementById('email-btn');

function greetUser(username) {
  user.innerText = username;
}

function redirectLogIn(){
  window.location.assign("login.html");
}

greetUser(verifiedUser);

sendEmail.addEventListener('click', function(e) {
  e.preventDefault();

  redirectLogIn();
})