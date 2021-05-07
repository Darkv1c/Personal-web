import React from 'react'
import { Layout } from '../../components'
import './Projects.css'
import {ArrowBackIos, ArrowForwardIos} from '@material-ui/icons';

const Projects = () => {
    return (     
        <Layout padding={false}>             
            <div className="Container">
                <div className="Arrow">
                     <ArrowBackIos style={{fontSize: "20%"}}/>
                </div>
                <div className="InfoContainer">
                    <div style={{display: 'flex', justifyContent: "center"}}>
                        <img alt="project" src="https://cutewallpaper.org/21/bad-apple-gif/Bad-Apple-Gif-03-GIF.gif"/>
                    </div>
                    <div style={{display: 'flex', justifyContent: "center"}}>
                        <img alt="project" src="https://cutewallpaper.org/21/bad-apple-gif/Bad-Apple-Gif-03-GIF.gif"/>
                    </div>
                </div>
                <div className="Arrow">
                   <ArrowForwardIos style={{fontSize: "20%"}}/>
                </div>
            </div>
        </Layout> 
    )
}

export default Projects
