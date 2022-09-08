import React, { useState } from 'react';
import NavBar from "../NavBar/NavBar";
import Learnzilla from "../imgs/Learnzilla.png"
import Pokedex from "../imgs/Pokedex.png"
import Minecraft from "../imgs/Minecraft.png"
import { useNavigate } from 'react-router-dom';
import "./Proyectos.css"
import { Modal, Button, ModalHeader } from 'react-bootstrap';
import Particles from "../Particles/Particles";


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
            <div className="particle-container">
                <Particles />
            </div>
            <NavBar />
            <div className="sobremi">
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
                <img name='learnzilla' className="learnzilla-img" src={Learnzilla} width="auto" height="400" />

                <ModalHeader>
                    <Modal.Title>LEARNZILLA</Modal.Title>
                </ModalHeader>
                <Modal.Body >
                    Academia de cursos online donde podemos comprar cursos como alumno, dejar rating a los mismos y otras funciones interesantes. Para poder subir nuestros cursos como profesor primero debemos pasar por una verificacion para ver si realmente estas capacitado, una vez pasada la prueba se pueden publicar cursos/videos.
                </Modal.Body>
                <Modal.Footer>


                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>

                    <Button variant='primary'>
                        <a href='https://github.com/dbriceno10/sh_learning-app' target='_blank' className='a'> Codigo</a>
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
                <img name='pokedex' className="learnzilla-img" src={Pokedex} width="auto" height="400" />
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

                    <Button variant='primary'>
                        <a href='https://github.com/SamuelCantos/proyecto-pokemon' target='_blank' className='a'> Codigo</a>
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
                <img name='three' className="learnzilla-img" src={Minecraft} width="auto" height="auto" />
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
                    <Button variant='primary'>
                        <a href='https://github.com/SamuelCantos/Three-Minecraft' target='_blank' className='a'> Codigo</a>
                    </Button>
                    <Button variant="primary"><a className='a' target="_blank" href='https://three-l4998tnuo-samuelcantos.vercel.app/'>Ver Proyecto</a></Button>
                </Modal.Footer>
            </Modal> : ""}
            <div className='container-proyects1'>

                <div className='card-learnzilla'>
                    <div className='content'>
                        <h2>Learnzilla</h2>
                        <a name='learnzilla' onClick={handleShow}>ver detalle</a>
                    </div>
                </div>


                <div className='card-pokedex' name='pokedex' onClick={handleShow} >
                    <div className='content'>
                        <h2>Pokedex</h2>
                        <a name='pokedex' onClick={handleShow}>ver detalle</a>
                    </div>
                </div>


                <div className='card-three'>
                    <div className='content'>
                        <h2>Three-Mine</h2>
                        <a name='three-mine' onClick={handleShow}>ver detalle</a>
                    </div>
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