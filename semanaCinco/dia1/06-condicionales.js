// let edad= +prompt("Cual es tu edad?");
// //esta habilitado para votar
// //if(condicional){}
// if(edad > 18){
//     console.log("Tienes DNI azul, puedes votar")
// }
// else if (edad <18 && edad >=0){
//     console.log("Tienes DNI amarillito, no puedes votar")
// }
// else {
//     console.log("Ingrese un valor adecuado")
// }

// let numero = +prompt("Ingrese un número");
// //Operador Or - O, solamente uno tiene que ser vedadero para que considere que es verdadero

// if (numero > 120 || numero <0){
//     console.log ("Es verdura")
// }else {
//     console.log("Esos me mintieron")
// }

let chanchito = +prompt("Ingrese el total de su chanchito")
//Vamos a comprar unos audifonos con el chancho

if (chanchito>3000){
    console.log("Puedes comprar unos Bose A20")
}
else if (chanchito<=3000 && chanchito >=1000){
    console.log("Puedes comprar unos Bose QuieComfort 35II")
}else if (chanchito<=999 && chanchito >=150){
    console.log("Puedes comprar unos Logitech G432")
}else if (chanchito==149 || chanchito == 129){
    console.log("Puedes comprar unos Logitech y Standanrd")
}