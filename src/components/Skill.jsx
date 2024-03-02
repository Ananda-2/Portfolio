import React from 'react'
import "./Skill.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCircleCheck} from '@fortawesome/free-regular-svg-icons'
// import { faHouse } from '@awesome.me/kit-KIT_CODE/icons/classic/solid'

const Skill = (props) => {

  const items = props.skill_items;
  const listItems = items.map((item,i) =>
  
  <div className="each__skill" key={i}>

      <div className="image__div">
        <FontAwesomeIcon icon= {faCircleCheck} />
        <div className='each__skill__name'>{item[0]}</div>
      </div>

      <div className='each__skill__level'>{item[1]}</div>
    </div>
  );


  return (
    <div className='skill'>
      <h3 className="skill__title">{props.name}</h3>
      {/* <FontAwesomeIcon icon="fa-regular fa-circle-check" /> */}
      <div className="all__skill__items">
        {listItems}
      </div>
    </div>
  )
}

export default Skill