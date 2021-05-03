import React, {useEffect} from 'react';
import { Navbar } from '../';
import './Layout.css';

var cont = 0;
const Layout = (props) => {

    useEffect(() => {
        cont++
    }, [])

    return (
        <div style={{display: "flex"}} className="HomeDiv"> 
                <div className={`LeftDiv ${cont%2 ? "BlackAndWhite" : "WhiteAndBlack"}`}>
                    {props.children}
                </div>
                <div className={`RightDiv ${cont%2 ? "WhiteAndBlack" : "BlackAndWhite" }`}>
                    {props.children}
                </div>  
            <Navbar/>             
        </div>
    )
}

export default Layout
