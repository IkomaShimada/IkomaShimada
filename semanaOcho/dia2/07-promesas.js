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

hornearTorta()
// va a ejecutatrse si las cosas fueron bien -> 

.then((tortaHorneada)=>{
    console.log(tortaHorneada);
})

.catch((tortaHorneada)=> {
    console.log(tortaHorneada);
})