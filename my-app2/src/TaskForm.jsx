import { useState } from 'react'

export function Taskform({createTask}){
    
    const [title,setTitle]=useState('')
    const [desc,setDesc]=useState('')
    
    const handleSubmint = (e)=>{e.preventDefault();
    createTask({title,desc});
    setTitle('')
    setDesc('')
}

    return(
        <form onSubmit={handleSubmint}>
            <p>Añadir tarea</p>
            
            <input value={title} type="text" placeholder="Escribe tu tarea" onChange={(e)=> setTitle(e.target.value)}/>
            
            <textarea value={desc} onChange={(e)=> setDesc(e.target.value)} placeholder='escribe la descripción de la tarea'></textarea>
            
            <button>guardar</button>
        
        </form>
    )

}