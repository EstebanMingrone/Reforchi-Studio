document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
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
      message => {
        alert("Correo enviado exitosamente");
        $('#contactModal').modal('hide'); // Cerrar el modal de Bootstrap después de enviar el correo
      }
    );
  });
  