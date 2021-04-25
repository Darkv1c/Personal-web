import React from 'react';
import LoadinPage from '../../assets/LoadingPage.gif';
import './Loading.css';

const Loading = () => {
    return (
        <div className="LoadingDiv">
            <img className="WalkingMan" src={LoadinPage}/>
            <h1 className="text" style={{color: "white"}}>Loading...</h1>
        </div>
    )
}

export default Loading
