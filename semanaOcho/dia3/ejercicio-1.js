let tragamonedas1 = () => {
    return new Promise((resolve,reject) =>{
        setTimeout(()=>{
            let resultado = Math.random()
            if (resultado > 0.5){
                resolve("Victoria 1")
            }else {
                reject("Derrota")
            }
        },250)
    })
}

let tragamonedas2 = () => {
    return new Promise((resolve,reject) =>{
        setTimeout(()=>{
            let resultado = Math.random()
            if (resultado > 0.5){
                resolve("Victoria 2")
            }else {
                reject("Derrota")
            }
        },500)
    })
}

let tragamonedas3= () => {
    return new Promise((resolve,reject) =>{
        setTimeout(()=>{
            let resultado = Math.random()
            if (resultado > 0.5){
                resolve("Victoria 3")
            }else {
                reject("Derrota")
            }
        },500)
    })
}

let tragamonedas4= () => {
    return new Promise((resolve,reject) =>{
        setTimeout(()=>{
            let resultado = Math.random()
            if (resultado > 0.5){
                resolve("Has ganado un dineral!")
            }else {
                reject("Derrota")
            }
        },500)
    })
}

tragamonedas1()
.then((resultado1)=>{
    console.log(resultado1);
    return tragamonedas2()
}).then((resultado2)=>{
    console.log(resultado2);
    return tragamonedas3()
}).then((resultado3)=>{
    console.log(resultado3);
    return tragamonedas4()
}).then((resultado4)=>{
    console.log(resultado4);
})
.catch((error)=>{
    console.log(error);
})