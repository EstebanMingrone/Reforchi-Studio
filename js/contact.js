function sendEmail(params) {
    console.log(params)
    
    const name = document.getElementById('name').value
    const surname = document.getElementById('surname').value
    const email = document.getElementById('email').value
    const tel = document.getElementById('tel').value
    const mensaje = document.getElementById('mensaje').value


    
    var link = "mailto:reforchistudio@gmail.com" + escape(email)
         + "?subject=" + escape("Contacto Reforchi Studio")
         + "&body=" + escape(mensaje);

     window.location.href = link;
}