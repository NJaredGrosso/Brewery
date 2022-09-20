//Obtenemos, creamos y pintamos productos/////////////////////////////////////////////////////////////////////////////////////////

const cervezas = [];    //Creamos un array donde guardaremos los productos


class Cerveza {                             //Creamos un constructor de productos para guardarlos en el array
    constructor(nombre, precioXlitro, imagen){
        this.nombre = nombre
        this.precioXlitro = precioXlitro
        this.imagen = imagen
    }
}

const guardarCervezas = (clave, valor) => {     //Creamos una funcion para el guardado de productos en localstorage
    localStorage.setItem(clave, valor)
}

let primeraVez = localStorage.getItem('primeraVez') //Llamamos al localStorage para saber si es la primera vez que el usuario ingresa a la página

//Aqui controlamos si es la primera vez que se ingresa a la página
if (primeraVez == 'false') {                 //Si no lo es, cargamos las cervezas que hayan guardadas en nuestro storage
    let temporal = JSON.parse(localStorage.getItem("cervezasGuardadas"))
    Array.prototype.push.apply(cervezas, temporal)
}else {                                     //Si lo es, cargamos cuatro productos basicos para que la seccion de la página no se muestre vacia 
    cervezas.push(new Cerveza("IPA", 250, "./assets/productos/cerveza_IPA.png"))
    cervezas.push(new Cerveza("APA", 280, "./assets/productos/cerveza_APA.png"))
    cervezas.push(new Cerveza("Golden", 220, "./assets/productos/cerveza_golden.png"))
    cervezas.push(new Cerveza("Porter", 250, "./assets/productos/cerveza_porter.png"))
    
    //Guardamos estos primeros productos en el storage
    let cervezasString = JSON.stringify(cervezas)
    localStorage.setItem('cervezasGuardadas', cervezasString) 
    localStorage.setItem('primeraVez', false)    //Cambiamos el valor que usamos para saber si es la primera vez que ingresan a la página
}
    

addProduct.onclick = () =>{         //Creamos un evento para cuando se quieran adicionar productos nuevos

    //Obtenemos los valores ingresados
    let newName = document.getElementById("newName").value
    let newPrice = document.getElementById("newPrice").value
    let newImg = document.getElementById("newImg").value

    if (newName && newPrice && newImg) {    //Con un if corroboramos que haya algo ingresado en los input
        
        cervezas.push(new Cerveza(newName, newPrice, newImg))   //Cargamos el nuevo producto en nuestro array
            
        let cervezasString = JSON.stringify(cervezas)       //Creamos un JSON de nuestro array de productos
        localStorage.setItem('cervezasGuardadas', cervezasString)   //Lo guardamos en el storage
            
        //pintamos el nuevo producto en nuestra página
        let contenedor = document.createElement("div")
        let i = (cervezas.length - 1)
        contenedor.innerHTML = `<img src="${cervezas[i].imagen}" alt="Imagen cerveza">
                                <h3>${cervezas[i].nombre}</h3>
                                <b>$${cervezas[i].precioXlitro} x litro</b>`;
            
        cartaProductos.appendChild(contenedor);

        Toastify({      //Utilizamos toastify para mostrar una toast notificando que se cargó el nuevo producto
            text: "Producto agregado",
            duration: 3000,
            position: "center",
            style: {
                background: "#771e1e",
                border: "2px solid black",
            },
            }).showToast();
    } else {            //Si no hubiera nada ingresado nos mostrara una TOast diciendo que los valores no son validos
        Toastify({
            text: "Valores no validos",
            duration: 3000,
            position: "center",
            style:{
                background: "#ff0000",
                border:"2px solid black"
            }
        }).showToast();
    }
}


//Pintamos las cervezas en nuestro catalogo
const carta = document.getElementsByClassName("productos"); //Creamos los elementos del catalogo

for (const cerveza of cervezas) {
    let contenedor = document.createElement("div")
    contenedor.innerHTML = `<img src="${cerveza.imagen}" alt="Imagen cerveza">
                            <h3>${cerveza.nombre}</h3>
                            <b>$${cerveza.precioXlitro} x litro</b>`;

    cartaProductos.appendChild(contenedor);
}