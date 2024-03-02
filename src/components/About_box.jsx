import React from 'react'
import './About_box.css'

function About_box (props){
    let image1 = props.icon ;
    return (

        <div className='border'>
            <img className='icon' src= {image1} alt="Logo" />
            <h3>{props.main}</h3>
            <p>{props.subtitle}</p>
        </div>
        
    );
}

export default About_box;