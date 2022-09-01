
// Variables /////////////////////////
    let primeraVez = localStorage.getItem('primeraVez')

    let sesion = sessionStorage.getItem('sesion')
    let empleado = localStorage.getItem('empleado')

    let ingresar = document.querySelector("#ingresar")

    let cartel = document.getElementById("preguntaEdad");
    let cartelTexto = document.getElementById("ingresaEdad");
    let cartelInput = document.getElementById("edad")
    let cartelButton = document.getElementById("ingresar")

    
//Funciones //////////////////////////

const cambiarCartel = () =>{
    cartelTexto.innerText = "NO TIENES EDAD SUFICIENTE"
    cartelInput.remove()
    cartelButton.remove()
}

const guardarCervezas = (clave, valor) => {
    localStorage.setItem(clave, valor)
}



//Array //////////////////////////////
    class Cerveza {
        constructor(nombre, precioXlitro, imagen){
            this.nombre = nombre
            this.precioXlitro = precioXlitro
            this.imagen = imagen
        }
    }

    const cervezas = [];

    if (primeraVez == 'true') {
        let temporal = JSON.parse(localStorage.getItem("cervezasGuardadas"))
        Array.prototype.push.apply(cervezas, temporal)
    } else {
        cervezas.push(new Cerveza("IPA", 250, "./assets/productos/cerveza_IPA.png"))
        cervezas.push(new Cerveza("APA", 280, "./assets/productos/cerveza_APA.png"))
        cervezas.push(new Cerveza("Golden", 220, "./assets/productos/cerveza_golden.png"))
        cervezas.push(new Cerveza("Porter", 250, "./assets/productos/cerveza_porter.png"))
        let cervezasString = JSON.stringify(cervezas)
        localStorage.setItem('cervezasGuardadas', cervezasString) 
        localStorage.setItem('primeraVez', true)
    }


//Eventos/////////////////////////////

    ingresar.onclick = () =>{           //Pregunta de edad
        
        let edad = document.getElementById("edad").value;

        console.log(edad);

        edad >= 18 ? cartel.remove(): cambiarCartel();

        sessionStorage.setItem('Edad', edad)
    }

    iniciarSesion.onclick = () =>{      //Iniciar Sesion
        let usuario = document.getElementById("inputUser").value
        let pass = document.getElementById("inputPass").value
        let mantenerSesion = document.getElementById("mantenerSesion")

        if (usuario == "admin" && pass == "admin") {
            sessionStorage.setItem('sesion', true)
            mantenerSesion.checked? empleado = true : empleado = false
            localStorage.setItem('empleado', empleado)
            console.log(empleado)
            location.reload()
        }else{
            sesionText.innerText = "> USUARIO Y CONTRASEÑA INCORRECTOS <"
        }
    }

    cerrarSesion.onclick = () =>{       //Cerrar sesion
        sessionStorage.setItem('sesion', false)
        localStorage.setItem('empleado', false)
        location.reload()
    }

    addProduct.onclick = () =>{
        let newName = document.getElementById("newName").value
        let newPrice = document.getElementById("newPrice").value
        let newImg = document.getElementById("newImg").value

        cervezas.push(new Cerveza(newName, newPrice, newImg))

        let cervezasString = JSON.stringify(cervezas)
        localStorage.setItem('cervezasGuardadas', cervezasString) 
        
        let contenedor = document.createElement("div")
        let i = (cervezas.length - 1)
        contenedor.innerHTML = `<img src="${cervezas[i].imagen}" alt="Imagen cerveza">
                                <h3>${cervezas[i].nombre}</h3>
                                <b>$${cervezas[i].precioXlitro} x litro</b>`;

        cartaProductos.appendChild(contenedor);
        Toastify({
            text: "Producto agregado",
            duration: 3000,
            style: {
                background: "#771e1e",
                border: "2px solid black",
              },
            }).showToast();
    }
//Codigo ////////////////////////////

let Edad = sessionStorage.getItem('Edad')

Edad >= 18 && cartel.remove()                               //Corrovoramos si la edad ya fue ingresada para no volver a mostrar el cartel


const carta = document.getElementsByClassName("productos"); //Creamos los elementos del catalogo

for (const cerveza of cervezas) {
    let contenedor = document.createElement("div")
    contenedor.innerHTML = `<img src="${cerveza.imagen}" alt="Imagen cerveza">
                            <h3>${cerveza.nombre}</h3>
                            <b>$${cerveza.precioXlitro} x litro</b>`;

    cartaProductos.appendChild(contenedor);
}

    //Modo empleados////////////////////////// 
    if (empleado == 'true' || sesion == 'true') {

        inicioSesion.remove();

    }else{

        cerrarSesion.remove()
        nuevoProducto.remove();

    }


