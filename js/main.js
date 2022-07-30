
while(true){

    let j = +prompt("¿Que funcion te gustaría aprender? \n IF = 1 | For = 2 | While = 3")

    switch (j){

        case 1:
            let a = +prompt ("ingrese un número distinto de 0")
            
            if(a != 0){
                alert ("Número ingresado: " + a)
            }else{
                alert ( "Valor no valido" )
            }
            
            break;

        case 2:
            for ( let b = 0; b < 11; b++ ) {
                alert ( "La cuenta va en: " + b )
            }
            break;
        

        case 3:
            let usuario = prompt ( "Ingrese usuario" );    
            let baneado = "juan"

            while ( usuario != baneado){ 
                alert ( "Bienvenido " + usuario )
                usuario = prompt ( "Ingrese otro usuario" )    
                if ( usuario = ESC ){ 
                    break; 
                }
            } 
            alert("Usuario no permitido");
            break;

        default:
            alert("Función no reconocida")
            break;
    }

}