document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevenir el envío del formulario por defecto
    
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const tel = document.getElementById('tel').value;
    const mensaje = document.getElementById('mensaje').value;

    let ebody = `
        <b>Nombre: </b>${nombre}<br>
        <b>Email: </b>${email}<br>
        <b>Teléfono: </b>${tel}<br>
        <b>Mensaje: </b>${mensaje}
    `;

    Email.send({
        SecureToken: "24d4b6d0-066f-4434-a874-152a86d597ba",
        To: 'reforchistudio@gmail.com',
        From: email,
        Subject: "Correo de contacto de " + nombre,
        Body: ebody
    }).then(
        function(response) {
            if (response === 'OK' || (response && response.status === 200)) { // Verificar si la solicitud fue exitosa
                Swal.fire({
                    title: 'Correo enviado',
                    text: 'Tu mensaje ha sido enviado correctamente.',
                    icon: 'success'
                });
            } else {
                Swal.fire({
                    title: 'Error',
                    text: 'Hubo un problema al enviar el correo. Por favor, inténtalo de nuevo más tarde.',
                    icon: 'error'
                });
            }
        }
    ).catch(function(error) {
        console.error('Error al enviar el correo:', error);
        Swal.fire({
            title: 'Error',
            text: 'Hubo un problema al enviar el correo. Por favor, inténtalo de nuevo más tarde.',
            icon: 'error'
        });
    });
});