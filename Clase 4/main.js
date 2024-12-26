/*

function saludar() {
    console.log ("hola estudiante")
}

saludar()

*/

/*
function saludar(){
    let nombre= prompt("ingresa tu nombre")
    console.log ( "bienvenido ", nombre)
    confirm("desea comprar")  // como es confirm es Aceptas o Cancelas
}

saludar()

*/


//EJEMPLO DE FUNCION CON PARAMETROS



/*
function saludar(nombre,apellido){ //parametro
    alert("hola " + nombre + " tu apellido es " + apellido)
}

saludar("Exequiel", "Mandalunis") 
*/


/* function suma(a,b){
    a= parseInt(prompt("ingresa primer numero"))
    b= parseInt(prompt("ingresa segundo numero"))
    let resultado = a+b
    alert("el resultado de la suma es "+ resultado)
}

suma() */



/*
const iva = 1.21

function calcularIva(importe){ //creo funcion con parametro
    if(parseFloat(importe)){  //convierto a numero, si el importe es un numero, se sigue
        let resultado = importe*iva
        alert( "el importe mas iva es "+ resultado)
    }
}

function calcularPrecioFinal(){ // creo una nueva funcion
    let precioDelProducto = parseFloat(prompt("ingresa el valor del producto: "))  //pido al usuario el dato
    calcularIva(precioDelProducto)//utilizo la funcion ya creada y le paso un parametro
}


calcularPrecioFinal()

*/

/* function sumar(a,b){
    let resultado = a+b
} 


 let sumar = function (a,b){
  return a+b
}

console.log(funcionFlecha(2,3)) */




function normal (numA, numB){
    let resultado = numA+numB
    console.log(resultado)
}


let funcionAnonima = function(numA,numB){
    return numA+numB
}


let funcionFlecha = (a,b)=>a+b


