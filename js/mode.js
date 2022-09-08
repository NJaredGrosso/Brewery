//Cargamos la página en modo clientes o modo empleados

//Traemos de los storage la info de si se ha iniciado sesion o no
let sesion = sessionStorage.getItem('sesion')
let empleado = localStorage.getItem('empleado')

//Corroboramos si se inicio la sesion y en base a eso añadimos y/o borramos objetos de nuestra página
if (empleado == 'true' || sesion == 'true') {
    inicioSesion.remove();
}else{
    cerrarSesion.remove()
    nuevoProducto.remove();
}


