document
  .getElementById("formContacto")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const form = event.target;
    const loader = document.getElementById("loader");
    const modalExito = document.getElementById("modalExito");
    const modalCarga = document.querySelector(".modalCarga");
    modalCarga.style.display = "flex";
    loader.style.display = "block";
    const data = {
      nombre: form.nombre.value,
      dni: form.dni.value,
      email: form.email.value,
      telefono: form.telefono.value,
      asunto: form.asunto.value,
      mensaje: form.mensaje.value,
    };

    fetch("/enviar", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Error en la respuesta del servidor");
      })
      .then((data) => {
        if (!data.success) {
          throw new Error(data.message || "Error al enviar el formulario");
        }
        loader.style.display = "none";
        modalCarga.style.display = "none";
        modalExito.style.display = "flex";
        setTimeout(() => {
          document.querySelector("#modalExito").style.display = "none";
        }, 3000);
        form.reset();
      })
      .catch((error) => {
        alert("Error al enviar el formulario: " + error.message);
      });
  });
