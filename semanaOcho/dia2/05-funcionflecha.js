// function saludar(){
//  return `Hola soy ${nombre}`
// }
    

// let saludar = () => {
//     return `Hola soy ${nombre}`;
// }

// let saludando = saludar("Jorge");

// console.log(saludando);

let saludar = (nombre = "Batman") => `Hola soy ${nombre}`

let saludando = saludar("Superman");

console.log(saludando);

// Diferencia entre una Function y una Arrow function 

let Mouse = {
    nombre: "Mickey",

    // presentarse: function(){
    //     console.log(`Hola yo me llamo ${this.nombre}`)
    // }

    presentarse: () => {
        console.log (`Hola yo me llamo ${this.nombre}`)
    }

    // En el caso del this dentro de una función flecha, el this hará referencia al objeto Windows
}

