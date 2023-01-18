//impotar el use state
import { useEffect, useState } from "react"

//iniciar el componente
export function Input(){
    //iniciar el usestate con '' porque es texto
   let [mensaje, setMensaje]= useState('')

   //el useEfect es un hook que se dispara al inicio y al cambiar alguna de las variables en los corchetes, si no hay corchetes se ejecuta cada vez que algo cambie
   useEffect(()=>{console.log('este es un useEffect en Input.jsx')},[ ]
)
   return(
    <div>
        <h1>input que trae el texto de regreso </h1>
        
        {/* ponemos el e=event y llamamos lo que esta guardado con e.target.value y lo guardamos con el setMensaje */}
        <input type="text" onChange={(e)=>{setMensaje(e.target.value)}}/>
        
        {/* sacamos la información guardada en un alert */}
        <button onClick={()=>{alert(`el mensaje es: ${mensaje}`)}}>Guardar</button>

        {/* podemos mandar a escribir el mensaje en vivo sin mas que colocarlo de la siguiente manera */}
        <h1>{mensaje}</h1>
    </div>
   )
}