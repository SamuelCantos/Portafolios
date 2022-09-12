import {Routes, Route} from "react-router-dom"
import Contacto from "./componentes/Contacto/Contacto.jsx";
import Habilidades from "./componentes/Habilidades/Habilidades.jsx";
import Home from "./componentes/Home/Home.jsx";
import Proyectos from "./componentes/Proyectos/Proyectos.jsx";
import SobreMi from "./componentes/SobreMi/SobreMi.jsx";
import './App.css'


function App() {
  return (

  <div>
    <Home/>
    <SobreMi/>
    <Habilidades/>
    <Proyectos/>
  </div>

  
  );
}

export default App;
