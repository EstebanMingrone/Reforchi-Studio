const nombre = document.getElementById('nombre').value;
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
        SecureToken: "c42b35ec-7325-4e73-bbbe-a199248ac02a",
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
});

