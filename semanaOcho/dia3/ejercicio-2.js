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

fetch("https://609f10795f32be00171cd35a.mockapi.io/alumnos", cabecera)
.then((respuesta)=>{
    // console.log("Post",respuesta)
    return respuesta.json()
})
.then((datosCreados) => {
    console.log(datosCreados)
})