// bucles // comentario

// for(desde; hasta; incremento)

/*
for(let i =0; i<10;i++){

if(i===5){
    break
}


    console.log("contando hasta"+i)
}

*/

/*
for(let i =0; i<10;i++){

    if(i===5){
        continue
    }
    
    
        console.log("contando hasta"+i)
    }
    
    */

/* ESTRUCTURA DEL WHILE

while(iterar == true) {
}

*/

/*
    let contador = true
    
    while(contador ==true){
        console.log("el valor del contador es"+ contador)
        contador++
        contador = confirm("desea continuar?")

    }

    */


    /*
    DO WHILE

let contador = 6;
do{
    console.log("el valor del contador es "+contador)

}while(contador<5)

    */



/*
EJEMPLO

login - 3 intentos
*/

/*
let intentos = 3
let identificar = true

do{
    let usuario = prompt("ingresa tu usuario, (solo 3 intentos)")
if(usuario ===null){
    alert("por favor intenta de nuevo")
    break
}

if(usuario === "admin" && intentos <1){
    alert("Bienvenido "+ usuario)
    identificar = false
}else{
    alert("no se reconoce el usuario "+ usuario + "le quedan "+ intentos)
    intentos--

    if(intentos<0){ //si lo intentos superan los 3
        alert("usted supero los tres intentos")
        break
    }
}



}while(identificar === true)

*/

// SWITCH 

/*
let color = prompt ("ingresa un color")

switch(color){
    case "blanco":
        alert ("es blanco")
        break;

    case "azul":
        alert ("es azul")
        break;

    case "verde":
        alert ("es verde")
        break;

    case "rojo":
        alert ("es rojo")
        break;
    default:
        alert("no se encontro coincidencia")
}

*/




