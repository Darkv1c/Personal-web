import React, {useState} from 'react';
import LoadinPage from '../../assets/LoadingPage.gif';
import './Loading.css';
import {useHistory, useLocation} from 'react-router-dom';

const Loading = () => {
    const history = useHistory();
    const location = useLocation();
    const [display, setDisplay] = useState("flex")
    location.pathname!=="/" && setTimeout(() => setDisplay("none"), 1500);

    return (
        <div style={{display: display}} onClick={()=> history.push("/home")} className="LoadingDiv">
            <img className="WalkingMan" alt="walking man" src={LoadinPage}/>
            <h1 className="text" style={{color: "white"}}>Loading...</h1>
        </div>
    )
}

export default Loading
