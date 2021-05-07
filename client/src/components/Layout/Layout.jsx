import React, {useEffect} from 'react';
import { Navbar } from '../';
import './Layout.css';

var cont = 0;
const Layout = ({padding=true, children}) => {
    useEffect(() => {
        cont++
    }, [])

    return (
        <div style={{display: "flex"}} className="HomeDiv"> 
                <div className={`LeftDiv 
                    ${cont%2 ? "BlackAndWhite" : "WhiteAndBlack"}
                    ${padding ? "padding" : ""}`}
                >
                    {children}
                </div>
                <div className={`RightDiv
                    ${cont%2 ? "WhiteAndBlack" : "BlackAndWhite" }
                    ${padding ? "padding" : ""}`}
                >
                    {children}
                </div>                  
            <Navbar/>             
        </div>
    )
}

export default Layout
