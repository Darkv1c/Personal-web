import React, {useState, useEffect} from 'react';
import { useHistory, useLocation } from 'react-router';
import { Navbar } from '../../components';
import './Home.css';

var cont = 0;
const Home = () => {
    const history = useHistory();
    const location = useLocation();
    const [color, setColor] = useState(true);
    useEffect(() => {
        setColor(!color)
    }, [location.pathname])

    const handelClick = () => {
        history.push("/home/") ;
        cont++
    }

    var text = <>
        <h1 style={{textAlign: "center"}}>BIENVENIDO A MI WEB</h1>        
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro ad inventore sunt eaque aperiam, quis corporis veniam numquam dicta reiciendis sequi, odit dolor facere tempora, nisi eius aliquam vel blanditiis.</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro ad inventore sunt eaque aperiam, quis corporis veniam numquam dicta reiciendis sequi, odit dolor facere tempora, nisi eius aliquam vel blanditiis.</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro ad inventore sunt eaque aperiam, quis corporis veniam numquam dicta reiciendis sequi, odit dolor facere tempora, nisi eius aliquam vel blanditiis.</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro ad inventore sunt eaque aperiam, quis corporis veniam numquam dicta reiciendis sequi, odit dolor facere tempora, nisi eius aliquam vel blanditiis.</p>

    </>

    return (
        <div style={{display: "flex"}} className="HomeDiv"> 
                <div className={`LeftDiv ${cont%2 ? "BlackAndWhite" : "WhiteAndBlack"}`} 
                onClick={handelClick}>
                    {text}
                </div>
                <div className={`RightDiv ${cont%2 ? "WhiteAndBlack" : "BlackAndWhite" }`} 
                onClick={handelClick}>
                    {text}
                </div>  
            <Navbar/>             
        </div>
    )
}

export default Home
