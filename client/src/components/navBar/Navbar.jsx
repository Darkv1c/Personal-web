import React from 'react';
import './Navbar.css';
import Logo from '../../assets/Logo.png'

const Navbar = () => {
    return (
        <>
            <div className="Navbar">
                <img className="Logo" src={Logo}/>
                <ul className="Options">
                    <li id="O1">opcioón</li>
                    <br/>
                    <li id="O2">opcioón</li>
                    <br/>
                    <li id="O3">opcioón</li>
                    <br/>
                    <li id="O4">opcioón</li>
                </ul>
            </div>
        </>
    )
}

export default Navbar
