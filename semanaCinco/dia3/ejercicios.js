// let numeros = [];

// for (let i=0;i <= 50; i++){
//     if(i%2===0){
//         console.log(i);
//     }
// }


// let a = 10 
// let b = 20



// console.log(Math.multiply(a,b))

// let usuarios = []

// let cantidad = +prompt("Ingrese la cantidad de usuarios")

// for (let i = 0; i < cantidad; i++) {
//     let nombre = prompt("Ingrese nombre");
//     usuarios.push(nombre);
// }

// console.log(usuarios);

let nombres = ["Erick", "Carlos","Osmar"]

let nombreBusqueda = prompt("Que nombre buscas?")

function found(nombres, nombreBusqueda){
    for(let i = 0; i<=nombres.length;i++){
        if (nombreBusqueda === nombres[i]){
            console.log(true);
            
        }
        else {
            console.log(false)
            
        }
    }
}

found(nombres, nombreBusqueda)