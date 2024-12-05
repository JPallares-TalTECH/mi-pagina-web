const form = document.querySelector(".formulario form");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const nom = document.getElementById('nombre').value;
    const msj = document.getElementById('mensaje').value;
    const mail = document.getElementById('email').value;

    console.log("Nombre:", nom);
    console.log("Mensaje:", msj);
    console.log("Correo electronico:", mail);

    alert("Hola " + nom + ", tu correo es " + mail + " y el motivo de tu contacto es: \n" + msj + "\n\nYa he recibido tu mensaje y en breve estaré poniendome en contacto contigo para dar respuesta a tu comentario.");
});