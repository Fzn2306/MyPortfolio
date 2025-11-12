let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.addEventListener('scroll', () => {
  let top = window.scrollY;

  sections.forEach(sec => {
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach(link => link.classList.remove('on'));
      let activeLink = document.querySelector(`header nav a[href="#${id}"]`);
      if (activeLink) activeLink.classList.add('on');
    }
  });
});

const text = document.querySelector(".home-content h3 span");
const words = ["Leetcoder", "Web Developer", "C++ Programmer"];
let index = 0;

setInterval(() => {
  text.textContent = words[index];
  index = (index + 1) % words.length;
}, 2000); // changes every 2 seconds
