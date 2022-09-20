//Llamamos a los objetos de nuestro cartel

let ingresar = document.querySelector("#ingresar")
let cartel = document.getElementById("preguntaEdad");
let cartelTexto = document.getElementById("ingresaEdad");
let cartelInput = document.getElementById("edad")

const cambiarCartel = () =>{                    //Creamos una funcion para modificar el cartel si la edad ingresada no es valida
    cartelTexto.innerText = "NO TIENES EDAD SUFICIENTE"
    cartelInput.remove()
    ingresar.remove()
}

ingresar.onclick = () =>{           //Con un evento realizamos la comparacion de la edad para saber si puede ingresar
        
    let edad = document.getElementById("edad").value;
    console.log("Edad: " + edad);
    edad >= 18 ? cartel.remove(): cambiarCartel();
    sessionStorage.setItem('Edad', edad)        //Guardamos el valor en la sessionStorage para no volver a preguntarlo en caso de que recargue la página
}

let Edad = sessionStorage.getItem('Edad')   //Obtenemos el dato de edad de la sessionStorage en caso de que ya exista

Edad >= 18 && cartel.remove()  //Si ya fue ingresados y cumple los requsitos, no mostramos el cartel

