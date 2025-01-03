// Añade aquí cualquier funcionalidad dinámica que necesites
document.querySelector('form').addEventListener('submit', function(event) {
    var nombre = document.getElementById('nombre').value;
    var email = document.getElementById('email').value;
    var mensaje = document.getElementById('mensaje').value;

    if (!nombre || !email || !mensaje) {
        alert('Por favor, complete todos los campos.');
        event.preventDefault();
    } else if (!validateEmail(email)) {
        alert('Por favor, ingrese un correo electrónico válido.');
        event.preventDefault();
    }
});

function validateEmail(email) {
    var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}
