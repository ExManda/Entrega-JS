// getElementById 

/*
let parrafo = document.getElementById ("parrafo")
console.log(parrafo.innerHTML) //trae solo el contenido

parrafo.innerText = "hola"
console.log(parrafo.innerHTML) //modificas el html desde JS

parrafo.innerHTML = "<button>buen dia</button>" // trabaja sobre el elemento

*/
/*
let parrafo = document.getElementsByClassName("parrafo") //lo traes cuando es una class

console.log = document.getElementsByClassName("parrafo")

let letras = document.getElementsByTagName ("p") // Actua sobre todos los "p". Los tag agarran las etiquetas

console.log (letras)

letras.remove() // para remover, cualquier cosa del Dom
*/
/*
let parrafo = document.createElement("p")

parrafo.innerHTML = "<h2> Hola coder! </h2>"
document.body.append(parrafo)

*/

//ejemplo
const productos = [
    {id:1,nombre:"Arroz", precio:125},
    
    {id:1,nombre:"Fideos", precio:141},
    
    {id:1,nombre:"Pan",precio:165},
    
    {id:1,nombre:"Flan",precio:75},

]
// por cada uno de estos elementos que recorra, creo un contenedor
for (const x of productos){
    let contenedor = document.createElement("div")

    contenedor.innerHTML= ´<h3>ID: ${x.id}</h3>
                            <h1> Producto: ${x.nombre}</h1>
                            <b>Precio: ${x.precio}</b>´

document.body.appendChild(contenendor)
}


let nombre1= document.querySelector("#luis")