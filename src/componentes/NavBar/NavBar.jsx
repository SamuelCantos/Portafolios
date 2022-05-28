import React from "react";
import { useLocation } from "react-router-dom";

import "./NavBar.css"

function NavBar (){

    const location = useLocation()



    return (
        <div className="shkere">
            <div className="containerNav">
            <nav class="navbar justify-content-center">
                <ul class="nav nav-pills nav-fill">
                    <li class="nav-item">
                        <a style={{color: location.pathname === "/"? '#EF9F9F': undefined }} id="/" class="nav-link" href="/">Home</a>
                    </li>
                    <li class="nav-item">
                        <a style={{color: location.pathname === "/sobremi"? '#EF9F9F': undefined }} id="/sobremi" class="nav-link" href="/sobremi">Sobre Mi</a>
                    </li>
                    <li class="nav-item">
                        <a style={{color: location.pathname === "/habilidades"? '#EF9F9F': undefined }} id="/habilidades" class="nav-link" href="/habilidades">Habilidades</a>
                    </li>
                    <li class="nav-item">
                        <a style={{color: location.pathname === "/proyectos"? '#EF9F9F': undefined }} class="nav-link" href="proyectos">Proyectos</a>
                    </li>
                    <li class="nav-item">
                        <a style={{color: location.pathname === "/contacto"? '#EF9F9F': undefined }} class="nav-link" href="contacto">Contacto</a>
                    </li>
                </ul>
            </nav>
            </div>
        </div>
    )
}

export default NavBar;