// let traerData = () => {
//     return new Promise ((resolve,reject)=>{
//         resolve("Datos Obtenidos")
//         reject ("Error al obtener Datos")
//     })
// }

let traerData = async () => {
    return "Datos obtenidos" //resolve
    throw "Error al obtener Data" //reject
}

// traerData()
// .then(rpta =>console.log(rpta))
// .catch(error => console.log(error))

let usarData = async () => {
    

    try {
        let rpta = await traerData()
        console.log(rpta)
    } catch (error) {
        console.log(error)
    }
}

usarData()