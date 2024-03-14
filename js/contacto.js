function enviarCorreo() {
    var nombre = document.getElementById('nombre').value;
    var email = document.getElementById('email').value;
    var mensaje = document.getElementById('mensaje').value;

    Email.send({
      SecureToken: "2670bbc9-690e-447c-9dd9-9ebbb744c5e5",
      To: 'reforchistudio@gmail.com',
      From: email,
      Subject: "Mensaje de contacto de " + nombre,
      Body: mensaje
    }).then(
      Swal.fire({
        template: "#my-template"
    })
    );
}
