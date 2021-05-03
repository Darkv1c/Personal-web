import React from 'react';
import { useHistory } from 'react-router';
import { Navbar } from '../';
import './Layout.css';

var cont = 0;
const Layout = (props) => {
    const history = useHistory();

    const handelClick = () => {
        history.push("/home/") ;
        cont++
    }  

    return (
        <div style={{display: "flex"}} className="HomeDiv"> 
                <div className={`LeftDiv ${cont%2 ? "BlackAndWhite" : "WhiteAndBlack"}`} 
                onClick={handelClick}>
                    {props.children}
                </div>
                <div className={`RightDiv ${cont%2 ? "WhiteAndBlack" : "BlackAndWhite" }`} 
                onClick={handelClick}>
                    {props.children}
                </div>  
            <Navbar/>             
        </div>
    )
}

export default Layout
