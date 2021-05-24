let hornearTorta = () => {

    return new Promise ((resolve, reject) =>{
        setTimeout(() => {
            if (true){
                resolve("La torata esta Lista!")
            }else {
                reject("Pos se quemo :(")
            }
        }, 5000)
        
    })
}

let prepararGlaseado = () => {
    return new Promise((resolve, reject) => {
        setTimeout((resolve,reject)=>{
            resolve("Glaseado Listo")
            // reject ("Se quemo el microondas :( ")
        }, 4000)
    })
}

let cubrirTorta = () => {
    return new Promise((resolve, reject) => {
        setTimeout((resolve,reject)=>{
            resolve("Torta Decorada!")
            // reject ("Pidamos Rappi... ")
        }, 3000)
    })
}

hornearTorta()
// va a ejecutatrse si las cosas fueron bien -> 

.then((tortaHorneada)=>{
    console.log(tortaHorneada);
})

.catch((tortaHorneada)=> {
    console.log(tortaHorneada);
})