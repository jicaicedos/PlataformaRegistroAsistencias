(
    function () {
        console.log("Usuarios")       
    }
    
)();

Usuarios = []

function iniciar() {
    Usuarios = [
        {nombre: "Oscar", apellido: "Tascon", cedula: 16379276, usuario: "otascon", password: "1", rol: "Administrador"},
        {nombre: "Anngie", apellido: "Ospina", cedula: 1053859237, usuario: "aospina", password: "2", rol: "Docente"},
        {nombre: "Nancy", apellido: "Quintero", cedula: 1053834493, usuario: "nquintero", password: "3", rol: "Docente"},
        {nombre: "Oscar", apellido: "Fuentes", cedula: 74186115, usuario: "ofuentes", password: "4", rol: "Alumno"},
        {nombre: "Javier", apellido: "Caicedo", cedula: 83040450, usuario: "jcaicedo",password: "5", rol: "Padre de familia"}
    ]

}

function login() {
    let usuario = document.getElementById("usuario").value
    let password = document.getElementById("password").value

    if ( usuario=="" ) {
        alert("El usuario no debe ser un campo vacío")
    } else {
        if ( password=="" ) {
            alert("La contraseña no debe ser un campo vacío")
        }
        else {
            Usuarios.forEach(element => {
                if( element.usuario==usuario && element.password ) {
                    alert("Bienvenido: " + element.nombre + " " + element.apellido)
                }
            });
        }
    }
}

function mostrar() {
    let nombre = document.getElementById("nombre").value
    console.log("Nombre: " + nombre) 
    console.log("Nombre" + Usuarios[1].nombre)
}


