import React from 'react';
import NavBar from "../NavBar/NavBar";
import "./Habilidades.css"

function Habilidades() {
    return (

        <div className='container'>
            <NavBar />
            <div className="textoH">
                <section className="number">02.</section>
                <section>HABILIDADES</section>
            </div>
            <div className='habilidades'>
                <div className='container-skill'>
                    <p className='p-skill'>HTML5:</p>
                    <div className='container-habilidad'>
                        <div className='skills html'>90%</div>
                    </div>
                </div>
                <div className='container-skill'>
                    <p className='p-skill'>CSS:</p>
                    <div className='container-habilidad'>
                        <div className='skills css'>60%</div>
                    </div>
                </div>
                <div className="container-skill">

                    <p className='p-skill'>React JS:</p>
                    <div className='container-habilidad'>
                        <div className='skills react'>90%</div>
                    </div>
                </div>
                <div className='container-skill'>

                    <p className='p-skill'>Javascript:</p>
                    <div className='container-habilidad'>
                        <div className='skills js'>90%</div>
                    </div>
                </div>
                <div className='container-skill'> 
                    <p className='p-skill'>NodeJs:</p>
                    <div className='container-habilidad'>
                        <div className='skills node'>65%</div>
                    </div>
                </div>
                <div className='container-skill'>
                    <p className='p-skill'>PostgreSQL:</p>
                    <div className='container-habilidad'>
                        <div className='skills postgre'>60%</div>
                    </div>
                </div>
                <div className='container-skill'>
                    <p className='p-skill'>Express:</p>
                    <div className='container-habilidad'>
                        <div className='skills express'>60%</div>
                    </div>
                </div>
                <div className='container-skill'>
                    <p className='p-skill'>Redux:</p>
                    <div className='container-habilidad'>
                        <div className='skills redux'>90%</div>
                    </div>

                </div>


            </div>
        </div>
    )

}

export default Habilidades;