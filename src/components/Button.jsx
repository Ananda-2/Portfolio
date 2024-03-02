import React from 'react'
import './Button.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const  Button = (props) => {
  return (
    <div className='button'>
        <button type="button">{props.name} <FontAwesomeIcon className='button__icon' icon={props.icon} /> </button>
    </div>
  )
}

export default Button ;