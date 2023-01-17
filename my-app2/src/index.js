//importar (no demasiado importante)
import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import { Input } from "./Input";
//buscar el root
const rootElement = document.getElementById("root");

//declarar que eso es el root de react
const root = ReactDOM.createRoot(rootElement);

//crear componente con mayuscula (en otro archivo)

/* */

//render (solo acepta un solo elemento padre)
root.render(<>

<App/>


<hr/>
<Input/>
</>);
