
alert("Bienvenidos a la cerveceria")
while(true){
    let usuario = (prompt("Eres cliente o empleado? \nCliente: 1 | Empleado: 2"))           

    if(usuario==1){             //El usuario es un cliente
        let menuC = (prompt("¿Que te gustaria hacer?\n1. Comprar\n2. Contactanos"))
        switch (menuC) {
            case "1":
                alert("Disfruta revisando el catalogo de la página")
                break;
            case "2":
                alert("Llamanos al 03548 123456\n Buescanos en Instagram como @LaCerveceria")
                break;
            default:
                alert("opcion no valida")
                break;
        }
    }else if(usuario==2){       //El usuario es un empleado
        alert("Eres Empleado")
        while(true){
        let menuE = (prompt("Bienvenido ¿que necesitas?\n1. Consultar pedidos\n2. Agregar pedidos\n3. Agregar Stock"))
        switch(menuE){
            case '1':         //Consultar pedidos
                alert("PEDIDOS\nEl Buho: 2 IPA, 2 Golden, 3 APA\nCasa Caraffa: 1 IPA, 4 Golden, 2 Porter\nRapsody: 4 Golden, 2 APA, 2 Porter")
                break;              //Aca despues tengo que hacer que lo agregado en agregar pedidos se muestre
            case '2':         //Agregar pedidos
                let pedidoCliente = (prompt("Ingresa el cliente que realizó el pedido"))        //Ingresamos nombre bajo el que se hace el pedido
                let more
                do{
                    let pedidoItems = (prompt("Ingresa la cantidad y que tipo de cerveza"))
                    pedidoCliente = (pedidoCliente + " " + pedidoItems)                         //Lo guardamos para no perder lo ya ingresado
                    console.log(pedidoCliente)                                                  //Mostramos lo ya pedido en consola
                    more = (prompt("¿Agregar mas items? s/n"))
                }while(more == "s")
                break;
            case '3':         //Agregar stock                
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
            default:         //Castigo xD
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