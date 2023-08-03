import React from 'react'
import Feature from './Feature';
import About from './About';
import Facts from './Facts';
import Service from './Service';
import Team from './Team';
import Projects from './Projects';
import Testomonial from './Testomonial';
import Newsletter from './Newsletter';
import FirstPage from './FirstPage';

export default function Homepage() {
    return (
        <div>
            <FirstPage/>
            <Feature />
            <About />
            <Facts />
            <Service />
            <Newsletter />
            <Projects />
            <Testomonial />
            <Team />
        </div>
    )
}
