/* funcion para loguear
tres intentos,
usuario y contrasaeña,
bucles,
condicionales,
operadores logicos,
alert,
prompt

*/


sdfsdfds


alert("Bienvenido/a a la compra de trips de surf");

let nombre = prompt("Ingrese su nombre:");
let apellido = prompt("Ingrese su apellido:");

// Verificación de datos del usuario
if (nombre !== "" && apellido !== "") {
  alert("Perfecto. Bienvenido/a" +nombre +apellido);
} else {
  alert("Algo falló. Por favor, ingrese correctamente sus datos.");
}

// Función para mostrar destinos
function mostrarDestinos() {
  console.log("Opciones de destinos disponibles:");
  console.log("1. Chicama - $700 USD");
  console.log("2. Río de Janeiro - $550 USD");
  console.log("3. São Paulo - $400 USD");
  console.log("4. Punta del Este - $300 USD");
  console.log("5. Santiago de Chile - $400 USD");



  continuar = prompt("¿Deseas realizar otra compra? (si/no)").toLowerCase() === "si";
}

alert("Gracias por tu compra. ¡Buen viaje y muchas olas! 🌊");


