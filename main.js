

var button = document.querySelector('.button-container');

button.addEventListener('click', disappearBanner)

function disappearBanner() {

  //console.log('i am in')
  button.parentElement.style.display='none';
};
