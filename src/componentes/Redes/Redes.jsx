import React from 'react';
import './Redes.css'
import { AiFillGithub, AiFillLinkedin, AiFillPhone, AiOutlineMail, AiOutlineWhatsApp } from "react-icons/ai";
import gmail from '../imgs/gmail.png'
import wpp from "../imgs/wpp.png"
import linkedin from "../imgs/linkedin.png"
import git from "../imgs/git.png"

function Redes() {
    return (
        <div className="nav-contacto">
        <a target="_blank" href='https://api.whatsapp.com/send?phone=543854715132'>
            <img src={wpp} width='30'/>
        </a>
        <a target="_blank" href='https://www.linkedin.com/in/samuel-cantos-4811a1208/'>
        <img src={linkedin} width="30"  />
        </a>
        
        <a target="_blank" href='mailto:samuelcantos18@gmail.com?Subject=Me%20gustaria%20comunicarme%20contigo'>
            <img  src={gmail} width="30"  />
        </a>
        <a target="_blank" href='https://github.com/SamuelCantos'>
            <img  src={git} width="30"  />
        </a>
        </div>
    )
}

export default Redes;