let perrete = {
    nombre: "Backus",
    edad:12,
    color:"Blanco",
    esterilizado:false,
    ladra:true,
    hobbies:["Jugar", "Persigue gatos", "Comer higadito"],
    comer : function(){
        //olfatea
        //me juzgo
        //se resigna
        console.log("come")
    }
}

console.log(perrete.nombre);
console.log(perrete.color);

console.log(perrete.hobbies[0])
perrete.edad = 13;
console.log(perrete.edad);