const menuLink = document.querySelectorAll('issue6')


menuLink.forEach(item => {
  item.addEventListener('click', changeBackground)
})

function changeBackground() {
  console.log('clicou')
}
