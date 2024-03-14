document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
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
      message => {
        alert("Correo enviado exitosamente");
        $('#contactModal').modal('hide'); // Cerrar el modal de Bootstrap después de enviar el correo
      }
    );
  });
  