import React from 'react';
import './Navbar.css';
import Logo from '../../assets/Logo.png'
import { useHistory } from 'react-router';

const Navbar = () => {
    const push = useHistory().push;



    return (
        <>
            <div className="Navbar">
                <img alt="logo" className="Logo" src={Logo}/>
                <ul className="Options">
                    <li onClick={() => push("/Home")} id="O1">Home</li>
                    <br/>
                    <li onClick={() => push("/Projects")} id="O2">Proyectos</li>
                    <br/>
                    <li onClick={() => push("/Tutorials")} id="O3">Tutoriales</li>
                    <br/>
                    <li onClick={() => push("/AboutMe")} id="O4">Sobre mi</li>
                </ul>
            </div>
        </>
    )
}

export default Navbar
