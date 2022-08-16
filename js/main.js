
// Variables /////////////////////////

    let precio
    let envase
    let cantidad

//Objetos ////////////////////////////

    const ipa = {nombre: "IPA", precioXlitro: 250 }
    const apa = {nombre: "APA", precioXlitro: 280 }
    const golden = {nombre: "Golden", precioXlitro: 220 }
    const porter = {nombre: "Porter", precioXlitro: 250 }

//Array //////////////////////////////

    const cervezas = [{nombre: "IPA", precioXlitro: 250, imagen: "https://picsum.photos/200/300" },
                     {nombre: "APA", precioXlitro: 280, imagen: "https://picsum.photos/200/300"},
                     {nombre: "Golden", precioXlitro: 220, imagen: "https://picsum.photos/200/300" },
                     {nombre: "Porter", precioXlitro: 250, imagen: "https://picsum.photos/200/300" }];
    const envases = [500, 1000, 20000];

//Funciones //////////////////////////

    const calcularPrecio = (precioXlitro, envase, cantidad) => {
        precio = precioXlitro*envase*cantidad
        console.log("$" + precio)
    }

    const pedirEnvase = () => {
        let envaseElegido = (prompt("¿Que medida de envase?\n 1. " + envases[0] + "cc.\n2. " + envases[1] + "cc.\n3. " + envases[2] + "cc."))
        switch (envaseElegido) {
            case '1':
                envase = 0.6
                break;
            case '2':
                envase = 1
                break;
            case '3':
                envase = 18
                break;
            default:
                alert("Opcion no disponible")
                break;
        }
    }

    const pedirCantidad = () => {
        cantidad = (+prompt("¿Cuantas quiere?"))
    }

    const confirmarEdad = () =>{
        let edad = document.getElementById("edad").value;
        let cartel = document.getElementById("preguntaEdad");
        let cartelTexto = document.getElementById("ingresaEdad");
        let cartelInput = document.getElementById("edad")
        let cartelButton = document.getElementById("ingresar")
    
        console.log(edad);

        if(edad>18){
            cartel.remove();
        }else{
            cartelTexto.innerText = "NO TIENES EDAD SUFICIENTE"
            cartelInput.remove()
            cartelButton.remove()
        }
    };

//Codigo ////////////////////////////

const carta = document.getElementsByClassName("productos");


for (const cerveza of cervezas) {
    
    let contenedor = document.createElement("div")
    contenedor.innerHTML = `<img src="${cerveza.imagen}" alt="">
                            <h3> ${cerveza.nombre}</h3>
                            <b> $ ${cerveza.precioXlitro}</b>`;
    cartaProductos.appendChild(contenedor);
}

/*
alert("Bienvenidos a la cerveceria")
while(true){
    let usuario = (prompt("Eres cliente o empleado? \nCliente: 1 | Empleado: 2"))           

    if(usuario==1){             //El usuario es un cliente
    while(true){
        let menuC = (prompt("¿Que te gustaria hacer?\n1. Comprar\n2. Contactanos"))
        switch (menuC) {
            case "1":
                let compra = (prompt("¿Que cerveza te gustaría?\n1. " + cervezas[0].nombre + "\n2. " + cervezas[1].nombre + "\n3. " + cervezas[2].nombre + "\n4. " + cervezas[3].nombre))
                switch (compra) {
                    case '1':
                        pedirEnvase();
                        pedirCantidad();
                        calcularPrecio(cervezas[0].precioXlitro, envase, cantidad);
                        break;
                    case '2':
                        pedirEnvase();
                        pedirCantidad();
                        calcularPrecio(cervezas[1].precioXlitro, envase, cantidad);
                        break;
                    case '3':
                        pedirEnvase();
                        pedirCantidad();
                        calcularPrecio(cervezas[2].precioXlitro, envase, cantidad);
                        break;
                    case '4':
                        pedirEnvase();
                        pedirCantidad();
                        calcularPrecio(cervezas[3].precioXlitro, envase, cantidad);
                        break;
                
                    default:
                        alert("Respuesta no valida")
                        break;
                }
                break;
            case "2":
                alert("Llamanos al 03548 123456\n Buescanos en Instagram como @LaCerveceria")
                break;
            default:
                alert("opcion no valida")
                break;
        }
    }
    }else if(usuario==2){       //El usuario es un empleado
        while(true){
        let menuE = (prompt("Bienvenido ¿que necesitas?\n1. Consultar pedidos\n2. Agregar pedidos\n3. Agregar Stock \n4. Agregar un producto"))
        switch(menuE){
            case '1':         //Consultar pedidos
                alert("PEDIDOS\nEl Buho: 2 IPA, 2 Golden, 3 APA\nCasa Caraffa: 1 IPA, 4 Golden, 2 Porter\nRapsody: 4 Golden, 2 APA, 2 Porter")
                break;              //Aca despues tengo que hacer que lo agregado en agregar pedidos se muestre
            case '2':         //Agregar pedidos (En un futuro esto iria a una base de datos a la que consultaria "Consultar pedidos")
                let pedidoCliente = (prompt("Ingresa el cliente que realizó el pedido"))        //Ingresamos nombre bajo el que se hace el pedido
                let more
                do{
                    let pedidoItems = (prompt("Ingresa la cantidad y que tipo de cerveza"))
                    pedidoCliente = (pedidoCliente + " " + pedidoItems)                         //Lo guardamos para no perder lo ya ingresado
                    console.log(pedidoCliente)                                                  //Mostramos lo ya pedido en consola
                    more = (prompt("¿Agregar mas items? s/n"))
                }while(more == "s")
                break;
            case '3':         //Agregar stock (En un futuro esto se almacenaria en una base de datos para no perder la info)
                let cerveza = prompt("¿A que cerveza agregar?\nIPA\nGolden\nAPA\nPorter")
                let cantCerveza = 0
                let add = "s"
                while(add == "s"){
                    let cantCervezaNueva = prompt("¿Cuantas agregamos?")
                    cantCerveza = cantCerveza + cantCervezaNueva
                    console.log(cerveza + ": " + cantCerveza)
                    add = prompt("Agregar mas? s/n")
                }
                break;
            case '4':         //Agregar producto (En el futuro esto guardaría en una base de datos para no perder los productos)
                let nombreCerveza = prompt("Nombre de la cerveza: ")
                let precioCerveza = +prompt("Precio por Litro: ")
                cervezas.push({nombre: nombreCerveza, precioXlitro: precioCerveza});
                for (const cerveza of cervezas){
                    console.log(cerveza.nombre);
                    console.log(cerveza.precioXlitro);
                }
                break;
            default:          //Castigo xD
                alert("No seleccionaste una opcion valida, para repensar que tenes que elegir vas a tener lo que te lleve aceptar 7 alertas :3")
                for (let castigo = 0; castigo < 8; castigo++) {
                    alert (castigo)                    
                }
                break;
        }
        }
    }else{                      //Ingreso de valor no valido
        alert("Respuesta no valida")
    }
}

*/