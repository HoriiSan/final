
// Validar los campos del formulario
document.getElementById('contactForm').addEventListener('submit', function(event) {
    var name = document.getElementById('name').value.trim();
    var email = document.getElementById('email').value.trim();
    var message = document.getElementById('message').value.trim();
    var nameError = document.getElementById('nameError');
    var emailError = document.getElementById('emailError');
    var messageError = document.getElementById('messageError');
    var nameVerify = true
    var mailVerify = true
    var messageVerify = false


    nameError.innerHTML = '';
    emailError.innerHTML = '';
    messageError.innerHTML = '';

    if (name === '') {
        nameError.innerHTML = 'Por favor, ingresa tu nombre';
        event.preventDefault();
    } else {
        nameVerify = true
    }

    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        emailError.innerHTML = 'Por favor, ingresa un correo electrónico válido';
        event.preventDefault();
    } else {
        mailVerify = true
    }

    if (message === '') {
        messageError.innerHTML = 'Por favor, ingresa un mensaje';
        event.preventDefault();
    } else {
        messageVerify = true
    }

    if (messageVerify && mailVerify && nameVerify) {
        document.getElementById('contactForm').reset();
        document.getElementById('successMessage').style.display = 'block';
        event.preventDefault();
    };
});




