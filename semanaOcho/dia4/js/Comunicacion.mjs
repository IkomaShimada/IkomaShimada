const URL = "https://609f10795f32be00171cd35a.mockapi.io/Productos"

class Comunicaciones{
    obtenerProductos(){
      //que me devuelva directamente los datos
      return new Promise((resolve, reject) => {
        fetch(URL)
        .then(respuesta => {
          return respuesta.json() //tengo la respuesta con el status
        })
        .then(productos => {
          resolve(productos) //tengo los datos ya en JS
        })
        .catch(error => reject(error)) //en caso de error
      })
    }

    crearProducto(objProducto){
        return new Promise((resolve, reject)=> {
            // PUT, POST necesitamos los datos y las cabeceras
            let configuracion = {
                method: 'POST',
                body:JSON.stringify(objProducto), //Lo transformamos a texto
                headers: {'Content-Type':'application/json'}
            }
            fetch(URL, configuracion)
            // Si lo hago así el return es implícito
            .then(respuesta => respuesta.json())
            .then(productoCreado => resolve(productoCreado))
            .catch(error => reject(error))

        })
    }
  
    //aquí pueden ir mas métodos
  }
  
  export {
    Comunicaciones
  }