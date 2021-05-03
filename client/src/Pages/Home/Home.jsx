import React from 'react'
import { Layout } from '../../components'
import './Home.css'

const Home = () => {
    return (
        <Layout>
            <h1 style={{alignSelf: "center"}}>BIENVENIDO A MI WEB</h1>
            <span className="Content">
                <img alt="profile" src="https://scontent.fbog3-2.fna.fbcdn.net/v/t1.6435-9/167063314_4025640224126189_536993477505097462_n.jpg?_nc_cat=111&ccb=1-3&_nc_sid=8bfeb9&_nc_eui2=AeFKYyW97OUqHsKFNa3XOhJb9DvTLCaq4-30O9MsJqrj7bML9V62WlUp_iGx48iZyPgTcTqJqqk329jMrCaWSA0i&_nc_ohc=VZdVDoOCn9MAX9CxSfp&_nc_ht=scontent.fbog3-2.fna&oh=3463f56591174de259bc3552d4c1d7e7&oe=60B5EC36"/>
             
                    {
                        `Hola, mi nombre es Víctor Orellano y soy desarrollador web fullstack, 
                        me apasiona y me divierte resolver los retos a los que nos enfrentamos los programadores
                        a la hora de crear nuestras aplicaciones y el hecho de sentir que puede hacerce casi 
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
                    </ul>                  
            </span>
        </Layout>
    )
}

export default Home
