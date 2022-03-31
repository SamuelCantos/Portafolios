import React from "react";

import "./NavBar.css"

function NavBar (){
    return (
        <div className="shkere">
            <div className="containerNav">
            <nav class="navbar justify-content-center">
                <ul class="nav nav-pills nav-fill">
                    <li class="nav-item">
                        <a class="nav-link" href="/">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/sobremi">Sobre Mi</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/habilidades">Habilidades</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="proyectos">Proyectos</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="contacto">Contacto</a>
                    </li>
                </ul>
            </nav>
            </div>
        </div>
    )
}

export default NavBar;