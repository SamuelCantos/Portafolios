import React from "react";
import NavBar from "../NavBar/NavBar";
import fotoperfilblack from "../imgs/fotoperfil.jpg"
import "./SobreMi.css"
import cv from "./cv.pdf";
import Redes from "../Redes/Redes";
import Particles from "../Particles/Particles";

function SobreMi() {
    return (
        <div>
            <div className="particle-container">
                <Particles />
            </div>
            <NavBar />
            <div className="container">
                <div className="sobremi">
                    <section className="number">01.</section>
                    <section>SOBRE MI</section>
                </div>
                <div className="info">
                    <img className="fotoPerfil" src={fotoperfilblack} width="400px" height="270px" />
                    <div className="texto">
                        <div>
                            <span>Hola a todos! Mi nombre es:</span> <span className="samuel">SAMUEL CANTOS.</span>
                        </div>
                        <p>Nacionalidad Argentina y Española, actualmente vivo en Santiago del estero, Argentina.
                            Soy full stack developer, graduado de soyHenry. Actualmente trabajo de manera freelance para corporaciones de mi provincia, realizando apps para mobile y desktop. Tambien tengo experiencia trabajando de asistente de enseñanza en el bootcamp donde me gradue. Estoy dispuesto a desarrollar full time para seguir creciendo en el rubro y cumplir con mis objetivos.
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
                                <span className="s2">Santiago del estero, Argentina.</span>
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