import React from 'react';
import './Navbar.css';
import Logo from '../../assets/Logo.png'
import { useHistory } from 'react-router';

const Navbar = () => {
    const history = useHistory()

    return (
        <>
            <div className="Navbar">
                <img alt="logo" className="Logo" src={Logo}/>
                <ul className="Options">
                    <li onClick={() => history.push("/Home")} id="O1">Home</li>
                    <br/>
                    <li id="O2">Proyectos</li>
                    <br/>
                    <li id="O3">Tutoriales</li>
                    <br/>
                    <li onClick={() => history.push("/AboutMe")} id="O4">Sobre mi</li>
                </ul>
            </div>
        </>
    )
}

export default Navbar
