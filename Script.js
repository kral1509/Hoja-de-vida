document.addEventListener("DOMContentLoaded", function () {
  const enlaces = document.querySelectorAll("nav a");
  const urlActual = window.location.pathname.split("/").pop();

  enlaces.forEach(function (enlace) {
    const href = enlace.getAttribute("href");

    if (href === urlActual) {
      enlace.classList.add("activo");
    }
  });
});

//Mensaje al ingresar por primera vez a cada sección
window.addEventListener("DOMContentLoaded", () => {
  const ruta = window.location.pathname;
  const archivo = ruta.split("/").pop(); 

  const clave = "bienvenida_" + archivo;

  if (!localStorage.getItem(clave)) {
    alert("¡Bienvenido a esta sección!");
    localStorage.setItem(clave, "mostrado");
  }
});

