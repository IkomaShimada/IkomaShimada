//App.js es el script principal
//1. Tener MockAPI Listo - ✔
//2. Obtener los datos (GET) - ✔
//3. Convertir esos datos a Elementos de HTML - ✔
//4. Crear desde el navegador, POST (PUT, DELETE) 
// 4.1 Detectar el evento click en el botón para crear 
//5. Carrito.....

import {Comunicaciones} from "./Comunicacion.mjs"
import {Interface} from "./Interfaz.mjs"

let comunicacion = new Comunicaciones()
let interfaz = new Interface()

let btnCrear = document.getElementById("btn-crear")
let modalCrear = new bootstrap.Modal(document.getElementById("modal-crear"))
let btnGuardar = document.getElementById("btn-guardar")


let getProductos = () => {
  comunicacion.obtenerProductos()
  .then(productos => {
    // console.table(productos)
    interfaz.imprimirProductos(productos)
  })
  .catch(err => console.log(err))
}
getProductos()

btnCrear.addEventListener("click", () => {
    modalCrear.show()
})

btnGuardar.addEventListener("click", ()=>{
    let formulario = document.getElementById("form-crear")
    let nuevoProducto = {
        // cuando creamos un nuevo recurso, no indicamos el id
        nombre: formulario["nombre"].value,
        description: formulario["description"].value,
        precio: formulario["precio"].value,
    }
    // console.table(nuevoProducto)
    comunicacion.crearProducto(nuevoProducto)
    .then(productoCreado => {
        // console.log(productoCreado)
        formulario.reset()
        modalCrear.hide()
        getProductos()
    })
    .catch(err=> console.log(err))
})