import React from 'react';
import NavBar from "../NavBar/NavBar";
import react from "./imgs/react.png"
import javascript from "./imgs/javascript.png"
import typescript from "./imgs/typescript.png"
import redux from "./imgs/redux.png"
import node from "./imgs/node.png"
import html from "./imgs/html.png"
import css from "./imgs/css.png"
import postgre from "./imgs/postgre.png"
import express from "./imgs/express.png"
import sequelize from "./imgs/sequelize.png"
import mongo from "./imgs/mongo.png"
import bootstrap from "./imgs/bootstrap.png"
import git from "./imgs/git.png"
import postman from "./imgs/postman.png"
import "./Habilidades.css"
import Particles from "../Particles/Particles";

function Habilidades() {
    return (

        <div>
             <div className="particle-container">
                <Particles />
            </div>
            <NavBar />
            <div className="sobremi">
                <section className="number">02.</section>
                <section>HABILIDADES</section>
            </div>
            <div className='container-skills'>
                <div className='icono-titulo'>
                <h4>REACT</h4>
                <img className="skill-icon" src={react} alt='react-error' width={90}/>
                </div>
                <div className='icono-titulo'>
                <h4>JAVASCRIPT</h4>
                <img className="skill-icon" src={javascript} alt='react-error' width={80}/>
                </div>
                <div className='icono-titulo'>
                <h4>TYPESCRIPT</h4>
                <img className="skill-icon" src={typescript} alt='react-error' width={80}/>
                </div>
                <div className='icono-titulo'>
                <h4>REDUX</h4>
                <img className="skill-icon" src={redux} alt='react-error' width={80}/>
                </div>
                <div className='icono-titulo'>
                <h4>NODE</h4>
                <img className="skill-icon" src={node} alt='react-error' width={80}/>
                </div>
                <div className='icono-titulo'>
                <h4>HTML5</h4>
                <img className="skill-icon" src={html} alt='react-error' width={80}/>
                </div>
                <div className='icono-titulo'>
                <h4>CSS</h4>
                <img className="skill-icon" src={css} alt='react-error' width={80}/>
                </div>
                <div className='icono-titulo'>
                <h4>POSTGRE</h4>
                <img className="skill-icon" src={postgre} alt='react-error' width={100}/>
                </div>
                <div className='icono-titulo'>
                <h4>EXPRESS</h4>
                <img className="skill-icon" src={express} alt='react-error' width={80}/>
                </div>
                <div className='icono-titulo'>
                <h4>SEQUELIZE</h4>
                <img className="skill-icon" src={sequelize} alt='react-error' width={80}/>
                </div>
                <div className='icono-titulo'>
                <h4>MONGO</h4>
                <img className="skill-icon" src={mongo} alt='react-error' width={80}/>
                </div>
                <div className='icono-titulo'>
                <h4>BOOTSTRAP</h4>
                <img className="skill-icon" src={bootstrap} alt='react-error' width={80}/>
                </div>
                <div className='icono-titulo'>
                <h4>GIT</h4>
                <img className="skill-icon" src={git} alt='react-error' width={80}/>
                </div>
                <div className='icono-titulo'>
                <h4>POSTMAN</h4>
                <img className="skill-icon" src={postman} alt='react-error' width={80}/>
                </div>
            </div>
            </div>
            
 
    )

}

export default Habilidades;