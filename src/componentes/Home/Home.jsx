import React from "react";
import "./Home.css"
import NavBar from "../NavBar/NavBar";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import Particles from "../Particles/Particles";



function Home() {
    return (
        <div  >
            <div className="particle-container">
                <Particles />
            </div>
            <NavBar />
            <div className="containerHome">
                <div className="hs">
                    <h1>Samuel Cantos</h1>
                    <h2>Full Stack Developer.<span>&#160;</span></h2>
                </div>

            </div>
        </div>


    )
}


export default Home;



/* return (
    <div className="container">
        <Menu/>
        <div className="hs">
            <div>
            <h1>Samuel Cantos</h1>
            <h2 className="h2home">Full Stack Developer</h2>
            </div>
            <div className="icons">
                <a href="https://github.com/SamuelCantos">
                    <GitHubIcon className="icono" />
                </a>
                <a href="https://www.linkedin.com/in/samuel-cantos-perez-4811a1208/">
                    <LinkedInIcon className="icono" />
                </a>
        </div>
            </div>
    </div>
) */