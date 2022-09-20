//obtenemos los datos de usuario y contraseña con Fetch///////////////////////////////////////////////////////////////////////////////////

let usuariosYcontraseñas = []       //Creamos el array donde vamos a guardar usuarios y contraseñas

const getDatos = async () => {      //creamos la funcion para obtener los datos del .json que guardaremos en el array
    try{
        const respuesta = await fetch("./usuarios.json");
        usuariosYcontraseñas = await respuesta.json()
        console.log("acceso a base de datos correcto")      //mensaje de que todo salió bien
    }catch(error) {
        console.error("Error al acceder a base de usuarios y contraseñas")  //mensaje de error
    }
}
getDatos();     //Llamamos la funcion para obtener los datos

iniciarSesion.onclick = () =>{      //Evento que se acciona al intentar iniciar sesion
    
    //obtenemos los valores ingresados
    let usuario = document.getElementById("inputUser").value
    let pass = document.getElementById("inputPass").value
    let mantenerSesion = document.getElementById("mantenerSesion")
    
    //los comparamos con nuestra base de datos
    for (const cuenta of usuariosYcontraseñas) {
        if (usuario == cuenta.usuario && pass == cuenta.contraseña){
            sessionStorage.setItem('sesion', true)
            mantenerSesion.checked? empleado = true : empleado = false      //Corroboramos la casilla de "mantener sesion iniciada"
            localStorage.setItem('empleado', empleado)
            console.log(empleado)
            location.reload()
        }else{
            sesionText.innerText = "> USUARIO Y/O CONTRASEÑA INCORRECTOS <" //Al ingresar valores erroneos mostramos este mensaje
        }
    }
}

cerrarSesion.onclick = () =>{       //Evento que se acciona al pulsar el boton de cerrar sesion
    sessionStorage.setItem('sesion', false)
    localStorage.setItem('empleado', false)
    location.reload()
}

