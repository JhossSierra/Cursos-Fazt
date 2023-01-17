//imports, tipo normal

import { TaskCard } from "./task Card";

//creacion del componente
export function TaskList(props){
   
    
    if(props.tasks.length===0) {return <h1>no hay tareas aún</h1>}
console.log(props)
    return(
        <div>
        <h1>Lista de tareas:</h1>
        {props.tasks.map((task)=>(
            <TaskCard key={task.id} task={task} deleteTask={props.deleteTask}/>
        ))};

        </div>
        );
}