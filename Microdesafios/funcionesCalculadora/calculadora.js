// CREAR UNA CALCULADORA
// declaramos valor de 0 a numA,numB y operador para luego poder llamarlos en la funcion y cambiar su valor
let numA = 0
let numB = 0
let operador = 0
resultado = 0
// creamos una función padre que tome los datos del prompt y luego eliga que tipo de operación hacer mediante subfunciones
    function calculadora(numA,numB,operador){
    numA = parseInt(prompt("Ingrese el primer número"))
    numB = parseInt(prompt("Ingrese el segundo número"))
    operador = prompt("Ingrese su operador aritmético")
    resultado = 0
//creamos las subfunciones, en este caso, aritmeticas
    let suma = function(numA,numB){
        resultado = numA+numB
        alert("tu resultado es: " + resultado)
    }
    let resta = function(numA,numB){
        resultado = numA-numB
        alert("tu resultado es: " + resultado)
    }
    let multiplicacion = function(numA,numB){
        resultado = numA*numB
        alert("tu resultado es: " + resultado)
    }

//creamos las condiciones con IF, else if y else para indicar que tipo de operación vamos a realizar
    if(operador == "+"){
        suma(numA,numB)
    }
    else if (operador == "-"){
        resta(numA,numB)
    }
    else {
        alert("Error desconocido, intenta de nuevo")
    }

}

let salir = prompt("Seguir/Salir")

calculadora()