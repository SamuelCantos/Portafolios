import {Routes, Route} from "react-router-dom"
import Contacto from "./componentes/Contacto/Contacto.jsx";
import Habilidades from "./componentes/Habilidades/Habilidades.jsx";
import Home from "./componentes/Home/Home.jsx";
import Proyectos from "./componentes/Proyectos/Proyectos.jsx";
import SobreMi from "./componentes/SobreMi/SobreMi.jsx";


function App() {
  return (

    <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route exact path="/sobremi" element={<SobreMi/>}/>
      <Route exact path="/habilidades" element={<Habilidades/>}/>
      <Route exact path="/proyectos" element={<Proyectos/>}/>
      {/* <Route exact path="/contacto" element={<Contacto/>}/> */}
    </Routes>
  
  );
}

export default App;
