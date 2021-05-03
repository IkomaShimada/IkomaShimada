/**
 * for (contador;condicional;actualización_contador){
 * //Condigo a ejectuar
 * }
 */

// for(let i=0, i<=10;i=i+1){
//     console.log(`El contador es ${i}`);
// }

// console.log("Yo estoy al final");

// let carta = [
//     "Ceviche",
//     "Cuy chactado",
//     "Chicharron",
//     "Arroz con maiscos",
//     "Caldo de gallina"
// ]

// let eleccion = +prompt("1.Ceviche, 2.Cuy, 3 Costillar, 4.Chicharron, 5.Arroz con mariscos, 6.Caldo de gallina");

// for(let i=0; i<carta.length; i++){
//     if(eleccion ===i){
//         console.log(`Ud ha elegido ${carta[i]}`)
//     }
// }

// let nombres = ["Jorge", "Adriana","Erick","Jhan", "Violeta"]

// for(let i = 0;i<nombres.length;i++){
//     if(nombres[i]=="Erick"){
//         console.log(`Se encontro a ${nombres[i]}`);
//         break;
//     }
// }

let numeros= [1,0,1,0,0,1,0,1,0];
let contadorDeCeros =0;
for (let i=0; i<numeros.length;i++){
    if(numeros[i]===1){
        continue;
    }
    //Al encontrase con un continue saltara la iteración
    console.log(numeros[i])
    contadorDeCeros++;
}
console.log(`Tenemos ${contadorDeCeros} ceros`)