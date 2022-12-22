// set date in footer
const date = document.getElementById('date');
date.innerHTML = new Date().getFullYear();

// close links container
const navToggle = document.querySelector('.nav-toggle');
const linksContainer = document.querySelector('.links-container');
const links = document.querySelector('.links');

// get container height 
// Element.getBoundingClientRect() returns the size of an element and it's position realtive to the viewport

navToggle.addEventListener('click', function () {
  
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
const nav = document.querySelector('#nav');

window.addEventListener('scroll', function() {
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
});

const scrollLinks = document.querySelectorAll('.scroll-link');

scrollLinks.forEach(function(link) {
  link.addEventListener('click', (event) => {
    // prevent default
    event.preventDefault();
    // navigate to specific section
    const idTarget = event.currentTarget.getAttribute('href').slice(1);
    const element = document.getElementById(idTarget);
  
    
    // Element.offsetTop returns a number representing the top position of the element, in px
    const navHeight = nav.getBoundingClientRect().height;
    const linksContainerHeight = linksContainer.getBoundingClientRect().height;
    const IsFixedNav = nav.classList.contains('fixed-nav');
    let position = element.offsetTop - navHeight;

    if (!IsFixedNav) {
      position -= navHeight;
    }
    if (navHeight >= 82) {
      position += linksContainerHeight;
    }

    // go to a section
    window.scrollTo({
      left: 0,
      top: position,
    });
    linksContainer.style.height = 0;
  });
}
)