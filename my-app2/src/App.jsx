//importar el useState para crear dinamismo
import { task as data } from "./task"
import { useState, useEffect } from "react"
import { Taskform } from "./TaskForm"

//importar el otro componente
import { TaskList } from "./Tasklist"

//inicializamos el componente
export function App() {
    
    //inicializamos la variable a cual vamos a modificar el estado (counter es el que guarda y el set counter es la funcion que modifica)
    let [counter, setCounter]= useState(0)
    
    //crear el movimiento de datos
    const [tasks,setTasks] =useState([])

    useEffect(()=>{setTasks(data)},[])
    
    function createTask(task) {
        console.log(task);
    setTasks([...tasks,{
        
        name:task.title,
        id:tasks.length,
        desc:task.desc}])
    } 

    function deleteTask(taskId) {
        setTasks(tasks.filter(task=>task.id !== taskId))
    }
    return(
        <>
        <h1>Hello</h1>
        <h1>contador:{counter}</h1>   
            
        {/* La funcion onClic siempre necesita una funcion interna */}

        <button onClick={()=>setCounter(counter=counter+1)}>+</button>
        
        <button onClick={()=>setCounter(counter=counter-1)} >-</button>
        <hr/>

        {/* podemos añadir un componente dentro de otro */}
        
        <Taskform createTask={createTask}/>
        <TaskList deleteTask={deleteTask} tasks={tasks}/>
        
        </>
    )}
