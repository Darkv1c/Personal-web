import React from 'react'
import { Layout } from '../../components'
import './AboutMe.css';
import Profile from '../../assets/Profile/profile.jpg'

const AboutMe = () => {
    return (
        <Layout>
            <h1 style={{alignSelf: "center"}}>BIENVENIDO A MI WEB</h1>
            <span className="Content">
                <img alt="profile" src={Profile}/>
                    <span>
                    {
                        `Hola, mi nombre es Víctor Orellano y soy desarrollador web fullstack, 
                        me apasiona y me divierte resolver los retos a los que nos enfrentamos los programadores
                        a la hora de crear nuestras aplicaciones y el hecho de sentir que puede hacerse casi 
                        cualquier cosa con código. Intento siempre encontrar la mejor manera de enfrentar los problemas
                        y estoy en constante aprendizaje para tener a mi disposición cada vez mas herramientas,
                        hago siempre lo mejor posible pero sobre todo disfruto lo que hago.`
                    }<br/><br/>
                    {
                        `Poseo conocimiento y experiencia en las siguientes areas:`
                    }
                    <ul>
                        <li>ReactJS (hooks)</li>
                        <li>Redux</li>
                        <li>NodeJS</li>
                        <li>PostgreSQL</li>
                        <li>Express</li>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>Fire base</li>
                        <li>CommerceJS</li>
                        <li>Git</li>
                        <li>GitHub</li>
                        <li>C#</li>
                        <li>Java</li>
                    </ul>    
                </span>              
            </span>
        </Layout>
    )
}

export default AboutMe
