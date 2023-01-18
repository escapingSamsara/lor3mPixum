//NAVBAR & B2T Button

// scroll down hides navbar, scroll up shows navbar
let prevScrollpos = window.pageYOffset
window.onscroll = function () {}
let b2tBtn = document.getElementById('b2tBtn')

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction()
  navbarFunction()
}
// navbar function
function navbarFunction() {
  let currentScrollPos = window.pageYOffset
  if (prevScrollpos > currentScrollPos) {
    document.getElementById('navbar').style.top = '0'
  } else {
    document.getElementById('navbar').style.top = '-50px'
  }
  prevScrollpos = currentScrollPos
}
// scroll function
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    b2tBtn.style.display = 'block'
  } else {
    b2tBtn.style.display = 'none'
  }
}
// on button click scroll to top of page
function topFunction() {
  document.body.scrollTop = 0 // For Safari
  document.documentElement.scrollTop = 0 // For Chrome, Firefox, IE and Opera
}
// TYPEWRITER EFFECT
function typeWriter(text, n) {
  if (n < text.length) {
    $('.typewriterBackground').html(text.substring(0, n + 1))
    n++
    setTimeout(function () {
      typeWriter(text, n)
    }, 100)
  }
}
$('.start').click(function (e) {
  e.stopPropagation()

  var text = $('.typewriterBackground').data('text')

  typeWriter(text, 0)
})
// make AboutMeIcon disappear on click
document.getElementById('readMe').onclick = function () {
  document.getElementById('readMe').style.animation = 'fadeOut 2s forwards'
  document.getElementById('alienPixel').style.display = 'flex'
  document.getElementById('alienPixel').style.animation = 'fadeIn 8s forwards'
}
