

export function TaskCard(props){

    return(
    
    <div key={props.task.id}>
        
    
       <h2>{props.task.name}</h2>
        <p>{props.task.desc}</p>
        <button onClick={()=>{props.deleteTask(props.task.id)}}>
        DELETE</button>
    
    
    </div>
    
    )
}