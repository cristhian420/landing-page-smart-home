// set date in footer
const date = document.getElementById('date');
date.innerHTML = new Date().getFullYear();

// close links container

const navToggle = document.querySelector('.nav-toggle');
const linksContainer = document.querySelector('.links-container');
const links = document.querySelector('.links');

navToggle.addEventListener('click', function () {

  // get container height 
  const linksContainerHeight = linksContainer.getBoundingClientRect().height;
  const linksHeight = links.getBoundingClientRect().height;

  if(linksContainerHeight === 0) {
    linksContainer.style.height = `${linksHeight}px`;
  } else {
    linksContainer.style.height = 0;
  }
});

// fix the nav bar
const topLink = document.querySelector('.top-link');

window.addEventListener('scroll', function() {
  console.log(window.pageYOffset);
  const nav = document.querySelector('#nav');
  const navHeight = nav.getBoundingClientRect().height;

  if (window.pageYOffset >= navHeight) {
    nav.classList.add('fixed-nav');
  } else {
    nav.classList.remove('fixed-nav')
  }

  if (window.pageYOffset > 500) {
    topLink.classList.add('show-link')
  } else {
    topLink.classList.remove('show-link')
  }
})