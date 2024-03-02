import React from 'react'
import './Contact__icon.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowRight} from '@fortawesome/free-solid-svg-icons'

const Contact_icon = (props) => {
  return (
    <div className=  'contact__icon__div'>

        <a href={props.link__to} target="_blank" >
            <FontAwesomeIcon className='icon' icon = {props.icon} />
            <h4>{props.name}</h4>
            <p>{props.details}</p>
            <p>
                write me <span><FontAwesomeIcon className='arrow__icon' icon = {faArrowRight} /> </span>
            </p>
        </a>
        
    </div>
  )
}

export default Contact_icon