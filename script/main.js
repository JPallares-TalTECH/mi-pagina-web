const form = document.querySelector(".formulario form");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const nom = document.getElementById('nombre').value;
    const msj = document.getElementById('mensaje').value;
    const mail = document.getElementById('email').value;

    console.log("Nombre:", nomb);
    console.log("Mensaje:", mens);
    console.log("Correo electronico:", mail);

    alert("Hola " + nom + ", su correo es " + mail + " y su motivo de contacto es: \n" + msj + "\n\n\nEn breve estaré poniendome en contacto contigo para dar gestión a lo que me comentas.");
});