/* VARIABLES */
var cardtyp1 = document.getElementById("cardtype1");
var cardtyp2 = document.getElementById("cardtype2");
var cardtyp3 = document.getElementById("cardtype3");


/* FUNCIONES */
cardtyp1.onclick = erro;
cardtyp2.onclick = erro;
cardtyp3.onclick = erro;
function erro() {
    alert("Espera, aún no he añadido esa función.")
}
let nombre = prompt("¿Cual es tu nombre?");
alert("Bienvenido a Aloe "+nombre);
