document.addEventListener("DOMContentLoaded", function() {
  const aparecerElements = document.querySelectorAll('.aparecer');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.2 });

  aparecerElements.forEach(el => observer.observe(el));
});