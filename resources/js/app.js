// Home Page
let btn = document.getElementById('hero__right--btn');
let dots = document.getElementById('dots');
let moreText = document.getElementById('more');
let btnText = document.getElementById('hero__right--btn').textContent;

// Event Listeners
btn.addEventListener('click', learnMoreBtnClick);

// Functions

// Learn More Button - Home Page
function learnMoreBtnClick(e) {
  e.preventDefault();

  if (btnText == 'Learn More') {
    btn.textContent = 'Read Less';
    dots.style.display = 'none';
    moreText.style.display = 'inline';
    btnText = 'Read Less';
  } else {
    btn.textContent = 'Learn More';
    dots.style.display = 'inline';
    moreText.style.display = 'none';
    btnText = 'Learn More';
  }
}
