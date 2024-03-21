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
        SecureToken: "3362a2b6-a7c9-4c35-bf9c-ae8dad60d400",
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









/*const nombre = document.getElementById('nombre').value;
const email = document.getElementById('email').value;
const tel = document.getElementById('tel').value;
const mensaje = document.getElementById('mensaje').value;
const submit = document.getElementsByClassName('form-contact')[0];

submit.addEventListener('submit', (e)=>{
    e.preventDefault();
    let ebody= `
    <b>Nombre: </b>${nombre.value}    
    <br>
    <b>Email: </b>${email.value}
    <br>
    <b>Teléfono: </b>${tel.value}
    <br>
    <b>Mensaje: </b>${mensaje.value}
    `;

    Email.send({
        SecureToken: "91cc0533-7c05-4508-9b63-3275618238a7",
        To: 'reforchistudio@gmail.com',
        From: 'reforchistudio@gmail.com',
        Subject: "Email de " + email.value,
        Body: ebody
    }).then(
        function(response) {
            if (response === 'OK') {
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
    )
});*/

