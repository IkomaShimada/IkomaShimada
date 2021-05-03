//Bisieto
//Descomposición
//1. Objetivo
//-Econtrar si un año es bisiesto
//1.1 Reglas hacen de un año es bisiesto, por el año(1990,2021,1492)
//-Tiene que ser divisible entre 4 - que no de residuo
//-Los que son divisibles entre 100 NO son bisiestos
//-Por otro lado sonlo que son divisibles entre 400 también son bisiestos a pesar de que son divisibles entre 100

//2. Listar que pasos y datos que necesitamos
//DATOS -> el año
//Pasos ->1.Obtengo el año, 2. Pregunto según las condicinales 3. imprimo el resultado en pantalla

// let anio = +prompt("Ingrese el año")
// if (anio % 400 ===0) {
//     console.log("Sí es bisiesto")
// }else if(anio %4=== 0 && anio % 100 !==0) {
//     console.log("Sí es bisiesto")
// }else{
//     console.log("No es BISIESTO")
// }

//Inventarios 
/**
 * Una bodega quiere hacer un inventario, actualmente tiene 03 tipos de productos, papitas, jabones y chocolate
 * queremos saber cuantos productos tiene en existencia
 * 
 */

/**
 * Descomposición
 * Reglas: Manejamos 3 productos
 * Cada producto tendrá su cantidad al final
 * Tendremos que preguntar producto por producto
 * -Que datos o variables deberiamos temer?
 * 1. Variables para c/producto
 * 2. cantidad de productos en general
 */
let papitas = 0;
let jabones = 0;
let chocolate = 0;

for (let i =0; i <cantProductos;i++){
    let producto = +prompt("Ingrese 1. Papitas 2.Jabones, 3. Chocolates");
    switch(producto){
        case 1:
            papitas ++;
            break;
        case 2:
            jabones ++;
            break;
        case 3:
            chocolate ++;
            break
        default:
            alert("Número erroneo, ingrese de nuevo")
            //i=i -1 => i--;
            i--;//reduzco en uno para que el contador no aumente
    }
}
console.log(`(En total hay: \n
    Papitas $`)