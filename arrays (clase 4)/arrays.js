// ? ARRAYS
// const product1 = "harina"
// const product2 = "azucar"
// const product3 = "manteca"

// const carrito =["harina", "manteca", "azucar"]

// console.log(carrito[0]) //para llamar a un elemento especifico dentro del array, segun su posición (0,1,2)

// console.table(carrito) //para hacer una lista de nuestro array 

//  console.log(carrito.length) //para ver la cantidad de elementos que hay dentro del array (3)

// ? combinación de ciclos y arrays. Al poner i < carritos.length le estamos indicando al ciclo que busque siempre la cantidad exacta dentro de nuestro array
// for(let i = 0; i < carrito.length ; i++){ 
//     console.log(carrito[i]);
// }



// ? PUSH, UNSHIFT, SHIFT Y POP
// const frutas = ["manzana" , "naranja" , "banana"];

// frutas.push("pera") //para añadir objetos AL FINAL DEL array
// frutas.unshift("kiwi") //para añadir objetos AL PRINCIPIO del array
// frutas.shift() //para ELIMINAR el primer objeto del array (kiwi)
// frutas.pop() //para ELIMINAR el ultimo objeto del array (pera)

// console.log(frutas);



// ? join() genera un string con todos los elementos del array separandolos con el valor que le pasemos por parametro
// const nombre = ["lauti" , "ezequiel" , "nucku" , "fiona"]

// console.log(nombre.join("-")); //devuelve lauti-ezquiel-nucku-fiona
// console.log(nombre.join("*")); //devuelve lauti*ezquiel*nucku*fiona
// console.log(nombre.join(",")); //devuelve lauti,ezquiel,nucku,fiona

// ? indexOf() permite obtener el indice de un elemento de un array. En caso de existir, nos retorna su índice (posición). 
// ? Si el elemento no existe los retornará como valor:-1

// const prendas = ["pantalon" , "jean" , "camisa" , "saco"]

// console.log(prendas.indexOf("jean")); //retorna 1 (posición de jean)
// console.log(prendas.indexOf("saco")); //retorna 3 (posición de saco)
// console.log(prendas.indexOf("zapato")); //retorna -1 (porq no existe dentro del array)

// ? includes() permite averiguar si el elemtno indicado por parámetro existe o no dentro de un array, retorna un booleano (T O F)

// console.log(prendas.includes("pantalon")); //retorna true
// console.log(prendas.includes("zapato")); //retorna false

// ? sort () ordena de manera alfabetica el array 

// console.log(prendas.sort()); //retorna ['camisa', 'jean', 'pantalon', 'saco'] de manera alfabetica

// ? reverse() invierte todo nuestro array 

// console.log(prendas.reverse()); //retorna ['saco', 'camisa', 'jean', 'pantalon'] de forma invertida. Se puede convinar con sort() para ordenar de la Z-A


// ? Objetos literales

// const perros = {
//     nombre: "firulais",
//     edad: 3,
//     castrado: true, 
// }

// console.table(perros)

//? for of

// const productos = [
//     {id: 1, nombre: "banana"},
//     {id: 2, nombre: "manzana"},
//     {id: 3, nombre: "naranja"}
// ]

// for (const producto of productos)(
//     console.log(productos)
// )


const productos = [] //creamos el array vacio para posteriormente añadir objetos mediante el prompt

function cargarProductos (){
    let nombreProducto = String(prompt("Que producto desea agregar?"))
    
    while (nombreProducto.trim() === ""){ //trim nos elimina espacios entre strings. por ej huevos duros, queda en huevosduros
        nombreProducto = prompt("por favor ingrese de nuevo su producto SIN ESPACIOS VACIOS").toLowerCase()
    }
    if(productos.includes(nombreProducto) == false){
        productos.push(nombreProducto)
    }else{
        alert("Tu producto ya se encuentra cargado, por favor ingresa otro")
    }
}

let seguirComprando = true;
while(seguirComprando){
    cargarProductos()
    seguirComprando = confirm("desea seguir agregando productos?")
    if(seguirComprando!=true){
        console.table(productos);
        break;
    }
}