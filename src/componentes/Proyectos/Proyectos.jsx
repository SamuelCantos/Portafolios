import React from 'react';
import NavBar from "../NavBar/NavBar";
import Learnzilla from "./Learnzilla.png"
import Pokedex from "./Pokedex.png"
import Minecraft from "./Minecraft.png"
import "./Proyectos.css"


function Proyectos () {
    return (
        <div className='container'>
            <NavBar/>
            <div className="textoH">
                <section className="number">03.</section>
                <section>PROYECTOS</section>
            </div>
            <div className='container-proyects1'>
            <div className='container-proyects2'>
                <p className='titulo-img'>L E A R N Z I L L A    </p>
                <a target="_blank" href="https://learnzilla-app.vercel.app/">
                <img className="learnzilla-img" src={Learnzilla} width="400" height="300"/>
                </a>
                <p className='desrcipcion'>Una plataforma para cursos online, donde podemos ser tanto alumno como profesor con sus diferentes funciones.</p>
            </div>
            <div className='container-proyects2'>
            <p className='titulo-img'>P O K E D E X</p>
                <img className="learnzilla-img" src={Pokedex} width="400" height="300"/>
                <p className='desrcipcion'>Una App donde podemos buscar diferentes pokemons por sus caracteristicas, consumiendo una API externa.</p>
            </div>
            <div className='container-proyects2'>
            <p className='titulo-img'>T H R E E - M I N E</p>
            <a href='https://three-l4998tnuo-samuelcantos.vercel.app/' target="_blank">
                <img className="learnzilla-img" src={Minecraft} width="400" height="300"/>
                </a>
                <p className='desrcipcion'>Proyecto realizado con ThreeJS Fiber, podemos ver un modelo 3D, tambien cuenta con interacciones</p>
            </div>
            </div>
        </div>
    )
}

export default Proyectos;