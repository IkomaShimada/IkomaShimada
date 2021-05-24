import React, {useState} from 'react'
import InputTarea from './components/inputTarea'
import ListaTareas from "./components/listaTareas"

function App() {
  const [tareas, setTareas] = useState([])

  const [tarea, setTarea] = useState("Hola")

  const anadirTarea = (nuevaTarea) => {
    setTareas()//?
  }

  const manejarTarea = (tarea) => {
    setTarea(tarea)
  }

  return (
    <div>
      <h1>Todo - List</h1>
      <InputTarea 
        tarea={tarea} 
        manejarTarea={manejarTarea}
      />
      <ListaTareas/>
    </div>
  )
}

export default App
