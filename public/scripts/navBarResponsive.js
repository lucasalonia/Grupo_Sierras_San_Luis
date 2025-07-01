const toggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');

toggle.addEventListener('click', () => {
  menu.classList.toggle('active');
});

document.querySelectorAll('.menu li').forEach(li => {
  li.addEventListener('click', () => {
    const link = li.querySelector('a');
    if (link) {
      link.click();
    }
  });
});
