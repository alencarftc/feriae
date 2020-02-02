import React from 'react';
import Layout from "../components/layout/layout";
import SEO from '../components/seo';

const About = () => {
    return (
        <Layout>
            <SEO title="About" />

            <div className="about-page">
                <h2 className="title">Sobre</h2>
                <p>Será que amanhã é feriado?</p>
                <p>Aqui você descobre quando serão os próximos feriados e se planeja da melhor forma.</p>

                <br/>
                <br/>
                <br/>
                <br/>
                
                <p>
                    Website desenvolvido em <a href="https://reactjs.org/">React</a>, utilizando <a href="https://www.gatsbyjs.org/">Gatsby</a> com <a href="https://sass-lang.com/">SCSS</a> por <a href="https://www.linkedin.com/in/alencar-dev/">Felipe Alencar</a>
                </p>
                {/* <p>Para conferir meus outros projetos, visite meu portfólio online - <a href="https://felipealencar.dev/portfolio">felipealencar.dev/portfolio</a></p> */}
            </div>
        </Layout>
    )
}
export default About;