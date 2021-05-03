let tasks = []

let addBtn = document.getElementById("add-btn")
let input = document.getElementById("input")


addBtn.addEventListener("click", function(){

    if (input.value ===""){
        alert("Debes escribir una tarea")
    }else {
        let texto = input.value
        tasks.push(texto)
        alert(`La lista contiene las siguientes tareas: ${tasks}`)
        input.value = ""
    }
})