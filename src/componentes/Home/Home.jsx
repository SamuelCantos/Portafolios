import React from "react";
import "./Home.css"
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import NavBar from "../NavBar/NavBar";


function Home() {
    return (
        <div className="container">     
        <NavBar/>
            <div className="hs">
                <h1>Samuel Cantos</h1>
                <h2>Full Stack Developer</h2>
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