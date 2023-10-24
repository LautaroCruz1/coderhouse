//mi idea era salir de lo convencional, en vez de simular un carrito, simularé un equipo pokemon, siguiendo la misma logica y conceptos del carrito de compra.
//voy a crear un array llamado miEquipo, que contenga dentro de el objetos literales, tendrá nombre, especie y poder (brindados por el usuario utilizando prompts)
//por ejemplo:
//  miEquipo [
//     {nombre: "Pikachu"},
//     {especie: "electrico"},
//     {poder: 12000},
//  ]


const miEquipo = []; //creo un array principal que contenga como objeto literal las caracteristicas de los pokemon, como nombre, tipo y poder

function general() { //creo todo dentro de una misma funcion para trabajar con un scope local, sino de otra forma no podia acceder a miEquipo utilizando una nueva función

    function crearEquipo() { //con la funcion crearEquipo vamos a obtener mediante prompt los datos de los pokemones 
        let nombre = String(prompt("Ingresa el nombre de tu Pokémon").toLowerCase());
        let especie = String(prompt("Ingresa el tipo de tu Pokémon").toLowerCase());
        let poder = parseInt(prompt("¿Cuánto poder tiene tu Pokémon?"));

        //mediante el ciclo for corroboramos si nombre ya fué incluido por el usuario o no.
        let duplicado = false;
        for (let i = 0; i < miEquipo.length; i++) {
            if (miEquipo[i].nombre === nombre) {    
                duplicado = true;
                break;      //si el nombre ya fue incluido, duplicado equivale a true, haciendo que el ciclo termine con break
            }
        }
        if (!duplicado) {   //si duplicado = false, significa que el nombre no está duplicado, por lo que procedemos a pushearlo dentro de miEquipo, junto con especie y poder
            miEquipo.push({ nombre, especie, poder });
        } else {
            alert("¡El Pokemon que ingresaste ya está incluido!"); //con else, avisamos al usuario que su pokemon ya esta cargado en miEquipo
        }
    }

    let cargarMas = true; //utilizamos while para preguntar al usuario si desea continuar o si desea ver su equipo
    while (cargarMas) {
        crearEquipo(); //mientras cargarMas = True, se ejecuta de nuevo la funcion crearEquipo
        cargarMas = confirm("¿Deseas añadir más Pokémon a tu equipo? / Presiona cancelar para ver a tu equipo"); //en caso de cargarMas = false
    }

    const equipoInfoElement = document.getElementById("equipoInfo"); //agarramos equipoInfo desde el HTML (p) para poder reflejear los nombres del equipo como resultado final
    equipoInfoElement.innerHTML = ""; //corroboramos que dentro de <p> no haya ningun string ni valor ni nada escrito


    if (miEquipo.length > 0) {  //mediante un equipo corroboramos si hay nombres dentro de miEquipo
        let nombresPokemon = ""; //creamos la variable nombresPokemon como vacio 
        for (let i = 0; i < miEquipo.length; i++) {     //mientras que i sea menor a la cantidad de nombres dentro de miEquipo, i se incrementa
            nombresPokemon += miEquipo[i].nombre + " / ";   //este ciclo sería un equivalente a usar .Join(" / "), probé usarlo de mil maneras y no logré el resultado que quería 
        }

        nombresPokemon = nombresPokemon.slice(0, -3); // utilizamos .slice para eliminar el último /   (inicia desde cero) y termina con (-3) para eliminar los ultimos 3 caracteres
        equipoInfoElement.textContent = "Tu equipo Pokémon está formado por: " + nombresPokemon + "." + "  ¡Y ya están listos para los próximos desafíos! "; //mostramos los nombres de miEquipo dentro del div reservado en html
        console.log("Tu equipo Pokémon está formado por: " + nombresPokemon + "." + "  ¡Y ya están listos para los próximos desafíos! ");
        console.table(miEquipo)
    } else {
        equipoInfoElement.textContent = "Ha ocurrido un error, por favor intentalo de nuevo."; //utilizo un else para cubrir culquier error que haya ocurrido dentro de la función y así indicarle al usuario que intente de nuevo
    }
}

// Notas finales: una vez finalizado todo queda guardado en miEquipo toda la información de los pokemones y su nivel de poder, 
// quería simular una pelea con cualquier pokemon y acceder al array miEquipo[poder] 
// para evaluar el poder de cada uno, en caso de que sea menor a 1000,
// el pokemon era eliminado del equipo utilizando el metodo .shift(), 
// lamentablemente necesitaba de funciones y propiedades que no conozco por lo que decidí hacerlo en un futuro. 
// Muchas gracias 