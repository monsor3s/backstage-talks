const target = document.querySelectorAll('issueSix');

function changeBackground() {
  const windowTop = window.pageYOffset;
  target.forEach(function(element) {
    console.log(element.offsetTop);
  })
}

window.addEventListener('scroll', function(){
  changeBackground();
})