// fetch(url)
// GET - Obteniendo Datos/Recursos/Documentos
fetch("https://reqres.in/api/users?page=2")
.then((respuesta)=> {
    // console.log(respuesta); status
    // console.log(respuesta); guía de rmisión
    return respuesta.json() //.json va a parsear/
})
.then((datos) => {
    console.log(datos)
})

// Post - Enviando datos
// nuevoUsuario a mandar

let nuevoUsuario = {
    name:"Lezly",
    job:"Tutora"
}

// cabeceras - Guía de remisión

let cabecera = {
    // metod HTTP, contenido,body = datos = nuevoUsuario
    method: 'POST', //PUT, DELETE
    headers: {
        'Content-type':'application/json'//api sepa como procesarlo
    },
    body: JSON.stringify(nuevoUsuario)// Se convierta en un JSON de texto plano
}

// fetch(url, cabecera_con_body)

fetch("https://reqres.in/api/users", cabecera)
.then((respuesta)=>{
    // console.log("Post",respuesta)
    return respuesta.json()
})
.then((datosCreados) => {
    console.log(datosCreados)
})

// Mockapi GET

fetch("https://609f10795f32be00171cd35a.mockapi.io/alumnos")
.then((respuesta)=>{
    return respuesta.json()
})
.then((alumnos)=>{
    console.log(alumnos)
})
.catch((error)=>{
    console.log(error)
})

//PUT

let alumnoEditado = {
    nombres : "Ash",
    apellidos : "Ketchup"
}

let configuracion = {
    method: "PUT",
    headers: {
        "Content-Type":"application/json"
    },
    body:JSON.stringify(alumnoEditado)
}
// endpoint -> url/api/v1/usuario/:id, los : representar un parámetro que hay que indicarle
fetch("https://609f10795f32be00171cd35a.mockapi.io/alumnos/2",configuracion)
.then((respuesta)=>{
    return respuesta.json()
})
.then((alumnoModificado)=>{
    console.log(alumnoModificado)
})
.catch((error)=>{
    console.log(error)
})