import React from "react";
import { useLocation } from "react-router-dom";
import Redes from "../Redes/Redes";



import "./NavBar.css"

function NavBar (){

    const location = useLocation()



    return (
        <div className="shkere">
            <div className="containerNav">
            <nav class="navbar justify-content-cente">
                <ul class="nav nav-pills nav-fill">
                    <li class="nav-item">
                        <a style={{color: location.pathname === "/"? '#2EB086': undefined }} id="/" class="nav-link" href="/">Home</a>
                    </li>
                    <li class="nav-item">
                        <a style={{color: location.pathname === "/sobremi"? '#2EB086': undefined }} id="/sobremi" class="nav-link" href="/sobremi">Sobre Mi</a>
                    </li>
                    <li class="nav-item">
                        <a style={{color: location.pathname === "/habilidades"? '#2EB086': undefined }} id="/habilidades" class="nav-link" href="/habilidades">Habilidades</a>
                    </li>
                    <li class="nav-item">
                        <a style={{color: location.pathname === "/proyectos"? '#2EB086': undefined }} class="nav-link" href="proyectos">Proyectos</a>
                    </li>
                </ul>
            <Redes/>
            </nav>
            </div>
        </div>
    )
}

export default NavBar;