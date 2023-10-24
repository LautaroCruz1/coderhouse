// ? Función constructora

// function Persona (literal) {
//     this.nombre = nombre;
//     this.edad = edad;
//     this.ciudad = ciudad;
// }
 
// const personal = new Persona ({nombre: "homer", edad:39, ciuad: "Springfield"});   //objeto literal



// ? Clases

// class Persona {
//     constructor (nombre,edad,ciudad){ // se utiliza si o si la palabra reservada constructor
//         this.nombre = nombre;
//         this.edad = edad;
//         this.ciudad = ciudad;
//     }

//     // function name(params) {        podemos añadir funciones directamente que trabajen con la clase Persona
        
//     // }

// }

// const personal = new Persona ("Homero", 39 , "springfield" )
// console.log(Persona);


// ? Microdesafio 

// class Simulador {
//     constructor (juego,precio){
//         this.juego = juego,
//         this.precio = precio
//     }
// }

// const productos = new Simulador (juego = prompt("Introduce el nombre del juego"), 1200)
// console.log(productos);



// class verduleria {
//     constructor(bananas,manzanas,uvas){
//         this.bananas = "bananas",
//         this.manzanas = "manzanas",
//         this.uvas = "uvas"

//         function comprar () {
//             prompt 
//         }
//     }  
// }
    

//  const frutas = new verduleria ()




// class cliente {
//     static id = 0 //propiedad estatica
    
//     constructor(nombre,direccion){
//         this.id = ++cliente.id //asignamos la propiedad estatica "id" a la propiedad publica con el mismo nombre dentro del constructor "cliente"
    
//         let email = ''; // propiedad privada (scope dentro del constrctor)

//         //propiedades publicas
//         this.nombre = nombre;
//         this.direccion = direccion

//         //metodo publico para acceder a la propiedad privada

//         this.getEmail = function(){
//             return email;
//         }

//         //metodo publico para modificar la propiedad privada
//         this.setEmail = function(nuevoMail){
//             email = nuevoMail
//         }
//     }
// }

// //instanciamos (creamos) objetos de la clase 'cliente' 
// const cliente1 = new cliente("Miguel", "galagurri 1300")
// const cliente2 = new cliente("Nucku", "nucku cnuku 122")


// //acceso a las propiedades Publicas de cliente1
// console.log(cliente1.nombre);
// console.log(cliente1.direccion);

// //acesso a las propiedades privadas de cliente1. Undefined - la propiedad privada no es accesible directamente
// console.log(cliente1.email);

// //pero si podemos acceder a los metodos
// console.log(cliente1.setEmail);

// //seteamos un email para que no nos quede string vacio
// cliente1.setEmail("cliente1@mail.com");

// //llamamos al a funcion getEmail y ahora si podemos ver el mail
// console.log(cliente1.getEmail());

// //podemos agregar propiedades de forma dinamica tambien

// cliente1.telefono = 2611231234; //podemos añadir tanto valores numericos como booleanos
// cliente1 ['activo'] = true;

// console.log(cliente1);
// console.log(cliente2);
// ;


// ? Methods
//la diferencia de metodo y funcion es que las funciones son de acceso global y suelen retornar un objeto o valor
// en cambio los metodos forman parte del objeto y no siempre tienen que retornar un valor


// function f1 (){
//     return this
// }

// function persona(nombre,edad,direccion){
//     this.nombre = nombre;
//     this.edad = edad;
//     this.direccion = direccion
// }

// const cadena = 'hola coder'

// console.log(cadena.length);
// console.log(cadena.toLocaleLowerCase());
// console.log(cadena.toLocaleUpperCase());



// class Pokemon {
//     constructor(poder,especie,evolución){
//         this.poder = poder,
//         this.especie = especie
//         this.evolución = evolución
        
//     }

//     evolución(){
//         Pokemon.evolución = false
//         if (this.poder > 2000){
//             Pokemon.evolución = true
//         }
//         else{
//             alert('Ocurrió un error por favor intenta de nuevo')
//         }
//     }
// }

// const pokemon1 = new Pokemon (1200,"Electrico")
// const pokemon2 = new Pokemon (1500,"Agua")
// console.log(pokemon1);
// console.log(pokemon2);


const carrito = [

    {producto: 'Macbook Air M2', 
    precioUnitario: 159900, 
    cantidad: 2},

    {producto: 'Magic Mouse',
     precioUnitario: 39900, 
     cantidad: 1},

    {producto: 'iPad Air', 
    precioUnitario: 89790, 
    cantidad: 1}
]

class Carrito {
    constructor(productos){
        this.productosComprados = productos
    }

    totalDeLaCompra(){
        let subtotal = 0

        for (const productos of this.productosComprados){
            subtotal += productos.precioUnitario * productos.cantidad
        }
        const totalDeLaCompra = subtotal.toFixed(2)
        return totalDeLaCompra
    }
}

const productosComprados = new Carrito (carrito)
const total = productosComprados.totalDeLaCompra()
alert('el total de la compra es de: $' + total)