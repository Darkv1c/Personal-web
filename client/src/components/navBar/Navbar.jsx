import React from 'react';
import './Navbar.css';
import Logo from '../../assets/Logo.png'

const Navbar = (props) => {
    return (
        <>
            <div className="Navbar">
                <img alt="logo" className="Logo" src={Logo}/>
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
            {props.children}
        </>
    )
}

export default Navbar
