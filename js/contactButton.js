document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    var nombre = document.getElementById('nombre').value;
    var email = document.getElementById('email').value;
    var mensaje = document.getElementById('mensaje').value;
  
    Email.send({
      SecureToken: "d09983ec-053a-4292-a805-a83144c32ada",
      To: 'reforchistudio@gmail.com',
      From: email,
      Subject: "Mensaje de contacto de " + nombre,
      Body: mensaje
    }).then(
      message => {
        alert("Correo enviado exitosamente");
        $('#contactModal').modal('hide'); // Cerrar el modal de Bootstrap después de enviar el correo
      }
    );
  });
  