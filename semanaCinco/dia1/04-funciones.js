// function calcularAreaTriangulo(base, altura){
    // console.log("Estoy ejecutándome dentro de una función")
//     let area = (base * altura) /2;
//     // console.log(area);
//     return area;
// }

// // console.log(calcularAreaTriangulo(50,25));

// let resultado = calcularAreaTriangulo(100,75);
// console.log(resultado);


//Scope - Ámbito

let nombre = "Daniel"; //Esta variable seria de ambito global

function imprimirNombre(){
    //ambito local
    console.log(nombre)
}
imprimirNombre();