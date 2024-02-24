const scroll = new LocomotiveScroll({
  el: document.querySelector('#main'),
  smooth: true,
  lerp: 0.03,
});
const navLinks = document.getElementById('navLinks');
const hamburgerIcon = document.getElementById('remove');
function removeNav() {
  navLinks.style.right = '-200px';
  navLinks.style.transition = '1s';
  navLinks.style.opacity= '0';
  // hamburgerIcon.style.display = 'block';
}
function showNav() {
  navLinks.style.right = '0';
  navLinks.style.transition = '1s';
  hamburgerIcon.style.display = 'none';
}
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  freeMode: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});