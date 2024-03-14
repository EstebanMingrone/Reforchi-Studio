document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    var nombre = document.getElementById('nombre').value;
    var email = document.getElementById('email').value;
    var mensaje = document.getElementById('mensaje').value;
  
    Email.send({
      SecureToken: "4b0e9396-1647-4084-b369-f799063a9a4c",
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
  