function enviarCorreo() {
    var nombre = document.getElementById('nombre').value;
    var email = document.getElementById('email').value;
    var mensaje = document.getElementById('mensaje').value;

    Email.send({
      SecureToken: "fc21074b-8358-4587-a1ad-26be640b108b",
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
