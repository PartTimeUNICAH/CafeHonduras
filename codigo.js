document.addEventListener("DOMContentLoaded", function (e) {
    hamburger = document.querySelector(".hamburger");
    hamburger.onclick = function () {
        navBar = document.querySelector(".nav-bar");
        navBar.classList.toggle("active");
    }
})

document.addEventListener("DOMContentLoaded", function (e) {

    const buttons = document.querySelectorAll("[data-carousel-button]")

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const offset = button.dataset.carouselButton === "next" ? 1 : -1
            const slides = button.closest("[data-carousel").querySelector("[data-slides]")

            const activeSlide = slides.querySelector("[data-active]")
            let newIndex = [...slides.children].indexOf(activeSlide) + offset
            if (newIndex < 0) newIndex = slides.children.length - 1
            if (newIndex >= slides.children.length) newIndex = 0

            slides.children[newIndex].dataset.active = true
            delete activeSlide.dataset.active
        })
    })
})

document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('contactForm');
    form.addEventListener('submit', function (event) {
        event.preventDefault();

        var nombre = document.getElementById('nombre').value;
        var apellido = document.getElementById('apellido').value;
        var email = document.getElementById('email').value;
        var telefono = document.getElementById('telefono').value;
        var warnings = document.getElementById('warnings');
        warnings.innerHTML = '';

        if (nombre === '' || apellido === '' || email === '' || telefono === '') {
            warnings.innerHTML += '<p>Todos los campos son obligatorios.</p>';
            return;
        }

        if (!/^[a-zA-ZáéíóúÁÉÍÓÚ\s]+$/.test(nombre) || !/^[a-zA-ZáéíóúÁÉÍÓÚ\s]+$/.test(apellido)) {
            warnings.innerHTML += '<p>El nombre y el apellido solo pueden contener letras y espacios.</p>';
            return;
        }

        if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]+$/.test(email)) {
            warnings.innerHTML += '<p>El correo electrónico no tiene un formato válido.</p>';
            return;
        }

        if (!/^\d{8}$/.test(telefono)) {
            warnings.innerHTML += '<p>El número de teléfono debe tener 8 dígitos.</p>';
            return;
        }

        console.log('Formulario enviado correctamente');
    });
});
