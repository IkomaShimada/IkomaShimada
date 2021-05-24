let objVehiculo = {
    marca:"Tesla",
    modelo:"Model X",
    anio:2019,
    colores:["Rojo", "Gris"],
    prender: function(){
        console.log("broom broom")
    }
}

// Tradicional, ortodoxo, clásico
// console.log(objVehiculo.marca)
// console.log(objVehiculo.modelo)
// objVehiculo.prender()

let {marca, modelo, anio, colores, prender} = objVehiculo;

console.log(marca)
console.log(modelo)

prender()

let calcularBeneficios = ({sueldo,vacaciones,bono1,bono2,cts,gratificacion}) =>{
    // suma de cada uno, restar impuestos

    console.log(sueldo)
}

let objBeneficios = {
    sueldo: 1600,
    vacaciones:600,
    gratificacion:500,
    bono1:400,
    bono2:350,
    cts:1100
}

calcularBeneficios(objBeneficios);

// Desestructurar arreglos

let nombres = ["Linder","Daniel"]

let prosor = nombres[4];

console.log(prosor);

let [tutor2]