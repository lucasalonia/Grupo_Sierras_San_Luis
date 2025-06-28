  document.addEventListener("DOMContentLoaded", () => {
        const seccion = document.querySelector("section.contingentes");

        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              seccion.classList.add("visible");
              observer.unobserve(seccion);
               }

          });
        }, {
          threshold: 0.1 
        });

        observer.observe(seccion);
      });
      document.addEventListener("DOMContentLoaded", () => {
  const bloques = document.querySelectorAll("section.contingentes > div");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target); 
      }
    });
  }, {
    threshold: 0.3
  });

  bloques.forEach(bloque => observer.observe(bloque));
});


 document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".galeriaContenedor img");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.2,
      }
    );

    images.forEach((img) => {
      observer.observe(img);
    });
  });
  
