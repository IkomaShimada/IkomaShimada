// let bebidas = ["Inka Cola", "Sprite", "Frugos", "Margartia"];

// console.log(bebidas);

// let nuevaBebida = prompt("Ingrese una nueva Bebida");
// //push agrega un elemento al final de in arreglo

// console.log(bebidas);

// let frutas = ["naranja", "piña", "fresas"];

// frutas.pop();

// console.log(frutas)

// let animales = ["gatos","perros","vacas","pinguinos","zorros"];

// animales.forEach(function(elemento, index){
//     console.log(`${index} - ${elemento}`);

//     //forEach no retorna valores
// });

// let alumnos = ["Veronica", "Jham", "Erick","Juan Carlos", "Violeta"];

// let alumnosSaludos = alumnos.map(function(nombre,index){
//     return `${index +1} - Hola soy ${nombre}`;
// })

// console.log(alumnosSaludos)

// let conductores = [
//     {
//         nombre:"Lezly",
//         tieneMascarilla: true
//     },
//     {
//         nombre: "Jorge",
//         tieneMascarilla:false
//     },
//     {
//         nombre: "Daniel",
//         tieneMascarilla:true
//     },
//     {
//         nombre: "Linder",
//         tieneMascarilla: true
//     }
// ];

// let puedePasar = conductores.filter(function(elemento, index){
//     return elemento.tieneMascarilla===true
// })
    
// console.log(puedePasar);

//Find

let dnis=["21421412","32142142","21342148","01234567"];

let econtrado= dnis.find(function(elemento,index){
    return elemento === "01234567"
})

console.log(econtrado)