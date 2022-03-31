import React from 'react';
import NavBar from "../NavBar/NavBar";
import "./Contacto.css"
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import EmailIcon from '@material-ui/icons/Email';


function Contacto () {
    
    return (
        <div className='container'>
            <NavBar/>
            <div className="textoH">
                <section className="number">04.</section>
                <section>Contacto</section>
            </div>
            <div className='conteiner-contacto'>
            <div className='contacto'>
                    <h3 className="icono-iphone">
                    <PhoneIphoneIcon/>
                    </h3>
                <div className='telefono'>
                    <h3>Telefono-Celular</h3>
                    <p className='numero-telefono'>+54 3854715132</p>
                </div>
            </div>
            <div className='contacto'>
                    <h3 className="icono-iphone">
                    <EmailIcon/>
                    </h3>
                <div className='telefono'>
                    <h3>Gmail</h3>
                    <p className='gmail'>samuelcantos18@gmail.com</p>
                </div>
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
    )
}

export default Contacto;