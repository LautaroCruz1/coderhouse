//MICRODESAFIOS CLASE 2. Actividad 1 "find the bug"

/*let cantidad = prompt("INGRESE CANTIDAD DE REPETICIONES")
let texto = prompt("INGRESE TEXTO A REPETIR")
for (let index = 0 ; index < cantidad; index++){   AL CODIGO LE FALTABA AÑADIR EL INCREMENTO DENTRO DEL FOR PARA EVITAR UN BUCLE INFINITO, index++
    console.log(texto)
}*/

//MICRODESAFIOS CLASE 2. Actividad 2

/*let lados = prompt('INGRESE CANTIDAD DE LADOS');
for (let index = 0; index < lados; index++) {
if (index > 3) {

}
alert("lado");
}

¿Qué tiene que hacer este código?
¿Por qué no cumple con su función?
¿Qué propuesta podrías hacer para que tenga sentido su uso?

*/



/* éste código esta diseñado para determinar figuras en base a la cantidad de lados 
/* el codigo no cumple su función porque faltan agregar lineas dentro de "if, ademas de que el prompt no está parseado"

PENDIENTE DE REVISION

let lados = parseInt(prompt('INGRESE CANTIDAD DE LADOS'));
for (let index = 0; index < lados; index++) {
if (index > 3) {
    alert("tu figura puede ser un cuadrado o un rectángulo")    
}
else if (index == 3) {
    alert("tu figura es un triángulo")
}

else if (index <= 2 ){
    alert("tu figura puede ser un círculo")
}

else {
    alert("Formato inválido, por favor intenta de nuevo")
    break
}
}
*/


//DESAFIOS COMPLEMENTARIOS. Actividad 01 :Crea un algoritmo que le pida al usuario que ingrese un número y luego evalúe si ese número es par o impar.
/*
let numero = parseInt(prompt("ingrese su número"))

if (numero %2 == 0){
    alert("tu número es par")
}

else if (numero %2 == 1) {
    alert("tu número es impar")
}

else {
    alert("error desconocido")
}
*/


//Actividad 02:Crea un algoritmo que le pida al usuario un número y luego utiliza while para evaluar 
//cuántos números son pares y cuantos impares, hasta que el usuario ingrese "salir".

/*let numero = parseInt(prompt("ingrese su número"))

while (numero != "salir"){

    if (numero %2 == 0){
        alert("tu número es par")
    }
    
    else if (numero %2 == 1) {
        alert("tu número es impar")
    }
    numero = (prompt("ingrese su número o ingrese salir para cancelar"))
}
/*

//1. Crea un algoritmo que a partir de la respuesta del usuario pueda determinar Cuántos mundiales vivió una persona.
//Ten en cuenta que se juega un mundial cada 4 años y que se han jugado 21 copas del mundo.

/*let edad = parseInt(prompt("Intoduce tu edad"))

let mundiales = Math.trunc(edad / 4);

if (edad >= 93){
    alert("Tenes "+ edad + " años " + " y has vivido los 21 mundiales desde 1930 ")
}

else if (edad < 93 && edad >=0){
    alert ("Tenes "+ edad + " años " + " y has vivido " + mundiales + " mundiales")
}

else {
    alert ("Formato desconocido, por favor intentalo de nuevo")
}
*/





