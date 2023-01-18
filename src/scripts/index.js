const target = document.querySelectorAll('[data-anime]');
const animationClass = 'animate'

  function changeBackground() {
    const windowTop = window.pageYOffset;
    target.forEach(function(element) {
      if((windowTop) > element.offsetTop) {
        element.classList.add(animationClass)
      } else {
        element.classList.remove(animationClass)
      }
    })
  }

window.addEventListener('scroll', function(){
  changeBackground();
})

// function changeBackground() {
//   const windowTop = window.pageYOffset;
//   target.forEach(function(element) {
//     console.log(element.offsetTop);
//   })
// }