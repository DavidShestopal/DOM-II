// Your code goes here

// Scales Fun Bus Logo
const logoHeading = document.querySelector('.logo-heading');
logoHeading.addEventListener('mouseenter', () => {
  logoHeading.style.transform = 'scale(1.2)';
  logoHeading.style.transition = 'transform 1s';
});
// Scales Down Fun Bus Logo
logoHeading.addEventListener('mouseleave', () => {
  logoHeading.style.transform = 'scale(.5)';
  logoHeading.style.transition = 'transform 1s';
});
// Changes Fun Bus Image to Something Better
let changeImg = document.querySelector('.intro img');
changeImg.addEventListener('dblclick', () => {
  changeImg.src = 'https://jackson-portfolio.now.sh/images/hi-right.JPG';
  console.log(changeImg);
});
// Propagation
const navItems = document.querySelector('nav a');

navItems.addEventListener('click', () => {
  navItems.style.color = 'red';
  console.log('Me last!');
});

const nav = document.querySelector('.main-navigation');
nav.addEventListener('click', () => {
  nav.style.backgroundColor = 'lightgrey';
  console.log('Me second!');
});

const text = document.querySelector('h1');
text.addEventListener('click', () => {
  text.style.color = 'darkgrey';
  console.log('Me first!');
  event.stopPropagation();
});
// Stopped The Link
const stopLink = document.querySelector('nav a');

stopLink.addEventListener('click', event => {
  event.preventDefault();
  console.log('stopped the link');
});

// Makes Images Bigger When Dragged
const imgDrag = document.querySelectorAll('.img-content');
imgDrag[0].addEventListener('drag', () => {
  event.target.style.transform = 'scale(1.5)';
});
imgDrag[1].addEventListener('drag', () => {
  event.target.style.transform = 'scale(1.5)';
});
// Makes Images Smaller
imgDrag[0].addEventListener('dragend', () => {
  event.target.style.transform = 'scale(.5)';
});
imgDrag[1].addEventListener('dragend', () => {
  event.target.style.transform = 'scale(.5)';
});

// Changes background when keyboard is pressed
const backgroundBody = document.querySelector('body');
backgroundBody.addEventListener('keydown', () => {
  backgroundBody.style.backgroundColor = 'pink';
});
// Reloads the page to reset stuff
const body = document.querySelector('body').addEventListener('keyup', () => {
  window.location.reload(true);
});
// Changes Bottom Image When Resized
let bottomImg = document.querySelector('.lol');
window.addEventListener('resize', () => {
  bottomImg.src = 'https://www.psdstack.com/wp-content/uploads/2016/10/featured-copyright-free-mages.jpg';
});
// Changes Text Color
let hover = document.querySelector('h2');
hover.addEventListener('mousemove', () => {
  hover.style.color = 'blue';
});
