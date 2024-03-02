import React from 'react'
import "./About.css"
import profile_photo from "../images//working.jpg" ;
import About_box from './About_box';
import img1 from '../images//experience.png'
import img3 from '../images//briefing.png'

const About = ()=>{
    return(

        <div className='About_page' id='About__page'>

            <h1 className='aboutTop , aboutTop-h1'>About Me</h1>

            <div className='About_content'>

                <div><img className='About-Img' src={profile_photo} alt="Logo" /></div>

                <div className='box-container'>
                    <div className='box'>
                        <About_box
                        icon = {img1}
                        main = "Experience"
                        subtitle = "1+ years"
                        />
                        <About_box
                        icon = {img3}
                        main = "Completed"
                        subtitle = "1 Project"
                        />
                    </div>

                    <div className='text-Items'>
                        <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas tenetur enim 
                            alias facilis ipsa deleniti assumenda vitae dignissimos, voluptatibus deserunt.</h3>

                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum, non.</p>
                        {/* <Button button_name = "Know More" /> */}
                    </div>
                </div> 
            </div>
        </div>
    );
}

export default About ;