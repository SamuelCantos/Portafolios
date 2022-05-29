import React, { useState } from 'react';
import NavBar from "../NavBar/NavBar";
import Learnzilla from "./Learnzilla.png"
import Pokedex from "./Pokedex.png"
import Minecraft from "./Minecraft.png"
import { useNavigate } from 'react-router-dom';
import "./Proyectos.css"
import { Modal, Button } from 'react-bootstrap';


function Proyectos() {

    const LeanzillaInfo = "Este proyecto es una verdadera hermosura"

    const [proyecto, setProyecto] = useState("")

    const [show, setShow] = useState(false)

    let navigate = useNavigate()



    function handleShow(e) {
        setProyecto(e.target.name)
        setShow(true)
    }

    function handleClose() {
        setShow(false)
    }




    return (
        <div>
            <NavBar />
            <div className="textoH">
                <section className="number">03.</section>
                <section>PROYECTOS</section>
            </div>
            {proyecto === "learnzilla" ? <Modal
                className='modal'
                show={show}
                onHide={handleClose}
                backdrop="static"
                centered
            >
                <Modal.Header >
                    <Modal.Title>LEARNZILLA</Modal.Title>
                </Modal.Header>
                <Modal.Body >
                    Academia de cursos online donde podemos comprar cursos como alumno, dejar rating a los mismos y otras funciones interesantes. Para poder subir nuestros cursos como profesor primero debemos pasar por una verificacion para ver si realmente estas capacitado, una vez pasada la prueba se pueden publicar cursos/videos.
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                   
                    <Button variant="primary"><a className='a' target="_blank" href='https://learnzilla-app.vercel.app/'>Ver Proyecto</a></Button>
                </Modal.Footer>
            </Modal> : ""}
            {proyecto === "pokedex" ? <Modal
                className='modal'
                show={show}
                onHide={handleClose}
                backdrop="static"
                centered
            >
                <Modal.Header >
                    <Modal.Title>POKEDEX</Modal.Title>
                </Modal.Header>
                <Modal.Body >
                   Primer proyecto del bootcamp de HENRY, una singlePage Aplication en donde se puede hacer diferentes tipos de filtros para buscar pokemons y hasta crear uno propio.
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal> : ""}
            {proyecto === "three-mine" ? <Modal
                className='modal'
                show={show}
                onHide={handleClose}
                backdrop="static"
                centered
            >
                <Modal.Header >
                    <Modal.Title>THREE-MINE</Modal.Title>
                </Modal.Header>
                <Modal.Body >
                    Proyecto creado con THREE-FIBER con un modelo 3D donde se puede interactuar con el espacio y con el modelo.
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary"><a className='a' target="_blank" href='https://three-l4998tnuo-samuelcantos.vercel.app/'>Ver Proyecto</a></Button>
                </Modal.Footer>
            </Modal> : ""}
            <div className='container-proyects1'>
                <div onClick={handleShow} className='container-proyects2'>
                    <p className='titulo-img'>L E A R N Z I L L A    </p>
                    <img name='learnzilla' className="learnzilla-img" src={Learnzilla} width="350" height="350" />
                </div>
                <div onClick={handleShow} className='container-proyects2'>
                    <p className='titulo-img'>P O K E D E X</p>
                    <img name = 'pokedex'className="learnzilla-img" src={Pokedex} width="350" height="350" />
                </div>
                <div onClick={handleShow} className='container-proyects2'>
                    <p className='titulo-img'>T H R E E - M I N E</p>
                        <img  name = 'three-mine'className="learnzilla-img" src={Minecraft} width="350" height="350" />
                </div>
            </div>
        </div>

    )
}

export default Proyectos;


{/* <Modal
className='modal'
show={show}
onHide={handleClose}
backdrop="static"
centered
>
<Modal.Header closeButton>
    <Modal.Title>LEARNZILLA</Modal.Title>
</Modal.Header>
<Modal.Body >
    Academia de cursos online donde podemos comprar cursos como alumno y publicar cursos como profesor.
</Modal.Body>
<Modal.Footer>
    <Button variant="secondary" onClick={handleClose}>
        Close
    </Button>
    <Button variant="primary">Ver Proyecto</Button>
</Modal.Footer>
</Modal> */}