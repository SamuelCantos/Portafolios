import React from "react";
import NavBar from "../NavBar/NavBar";
import fotoperfilblack from "../imgs/fotoperfilblack.jpg"
import "./SobreMi.css"
import cv from "./cv.pdf";

function SobreMi() {
    return (
        <div>
            <NavBar /> 
        <div className="container">
            <div className="sobremi">
                <section className="number">01.</section>
                <section>SOBRE MI</section>
            </div>
            <div className="info">
                <img className="fotoPerfil" src={fotoperfilblack} width="400px" height="400px" />
                <div className="texto">
                    <div>
                    <span>Hola a todos! Mi nombre es:</span> <span className="samuel">SAMUEL CANTOS.</span>
                    </div>
                    <p>Nacionalidad Argentina y Española, actualmente resido en Santiago del estero, Argentina.
                        Me gradue de Full Stack developer en Henry el dia 4/3/2022. Actualmente me encuentro en busqueda de mi primer trabajo, en donde pueda
                        demostrar lo aprendido en todo este tiempo de tanto sacrificio.
                    </p>
                    <div>
                        <div>
                            <span className="s1">Edad:</span>
                            <span className="s2">20 años.</span>
                        </div>
                        <div>
                            <span className="s1">Lenguajes:</span>
                            <span className="s2" >Español/Portugues/Ingles.</span>
                        </div>
                        <div>
                        <span className="s1">Lugar:</span>
                        <span  className="s2">Santiago del estero, Argentina.</span>
                        </div>
                    </div>
            <div className="divBoton">
                <a href={cv} download="SamuelCantosCV" className="descarga-boton">DESCARGAR CV</a>
            </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default SobreMi;