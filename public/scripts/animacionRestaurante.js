document.addEventListener("DOMContentLoaded", () => {
  const target = document.querySelector('.menuContenidoPresentacion');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('aparecer');
        observer.unobserve(entry.target);
      }
    });
  }, {
    root: null,
    rootMargin: "0px 0px -100px 0px", 
    threshold: 0
  });

  observer.observe(target);
 const opciones = document.querySelectorAll('.opcion');

    const observer1 = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('aparecer');
          observer.unobserve(entry.target);
        }
      });
    }, {
      root: null,
      rootMargin: "0px 0px -150px 0px", 
      threshold: 0
    });

    opciones.forEach(opcion => observer1.observe(opcion));
});