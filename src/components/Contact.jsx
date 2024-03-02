import React from 'react'
import './Contact.css'
import Button from './Button'
import Contact_icon from './Contact_icon'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import {faCirclePlay} from '@fortawesome/free-regular-svg-icons'
import {faWhatsapp , faLinkedinIn} from '@fortawesome/free-brands-svg-icons'
import {faEnvelope , faPaperPlane} from '@fortawesome/free-solid-svg-icons'

// for email js connection
import  { useRef } from 'react';
import emailjs from '@emailjs/browser';


const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        // console.log(e);

        emailjs
        .sendForm('service_z5ts121', 'template_qz8no4o', form.current, {
            publicKey: 'dpTNq5om_Xh-XTGS0',
        })
        // this.form.reset() ;
        
        // console.log(e.target.form)  
        form.current.reset();                           // reset the form 
        
    };

  return (
    <div className ="contact__page" id='Contact__page'>
        <h1>Contact Me</h1>
        <p>Get In Touch</p>

        <div className="contact__div">

            <div className="contact__icon__section">
                <h2>Talk To Me</h2>

                <div className="icon__container">
                    <Contact_icon icon = {faEnvelope} name = 'email' details = 'anandasau73@gmial.com' link__to = 'mailto:anandasau73@gmail.com' />
                    <Contact_icon icon = {faWhatsapp} name = 'whatsapp' details = '9876543210' link__to = 'https://wa.me/9876543210' />
                    <Contact_icon icon = {faLinkedinIn} name = 'linkedIn' details = '/ananda-sau' link__to = 'https://www.linkedin.com/in/ananda-sau/'/>
                </div>


            </div>

            <div className="contact__write__section">
                <h2>Write me your project</h2>

                <form ref={form} onSubmit={sendEmail}>

                    <div className="contact__input__div">
                        <label htmlFor="">Name</label>
                        <input type="text" name="name" required id="" placeholder='write your name' />
                    </div>

                    <div className="contact__input__div">
                        <label htmlFor="">Email</label>
                        <input type="email" name="email"required id="" placeholder='write your mail' />
                    </div>

                    <div className="contact__input__div">
                        <label htmlFor="">Project</label>
                        <textarea name="project" id="" cols="30" rows="10" required placeholder='write your projet'></textarea>
                    </div>
                    

                    <div className= "send__message__button" onClick = {sendEmail} >
                        <Button name = 'Send Message' icon ={faPaperPlane} />
                    </div>

                </form>



            </div>
        </div>

    </div>
  )
}

export default Contact