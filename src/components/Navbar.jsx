// rafce 
import React from 'react'
import "./Navbar.css"

const Navbar = () => {
  return (
    <div className='Navbar'>
        <div className="leftPart"> <a href="#root">Portfolio</a></div>
        <div className="rightPart">
            <ul className="items">
              <a href="#Home__page"><li className="item">Home</li></a>
              <a href="#About__page"><li className="item">About</li></a>
              <a href="#Skill__page"><li className="item">Skills</li></a>
              <a href="#Project__page"><li className="item">Projects</li></a>
              <a href="#Contact__page"><li className="item">Conatct</li></a>

            </ul>

        </div>
    </div>
  )
}

export default Navbar
