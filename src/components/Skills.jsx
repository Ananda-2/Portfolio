import React from 'react'
import './Skills.css'
import Skill from './Skill';

const frontEnd = [
    [ "HTML" , "Advance"  ] ,
    [  "CSS"  , "Intermediate"  ],
    [  "Bootstrap"  , "Intermediate"  ],
    [  "JavaScript"  , "Intermediate"  ],
    [  "React"  , "Intermediate"  ],
    [  "Git"  , "Intermediate"  ]
];
const backEnd = [
    [ "NodeJs" , "Intermediate"  ] ,
    [  "ExpressJs"  , "Basic"  ],
    [  "MySql"  , "Intermediate"  ],
    [  "Sql"  , "Basic"  ]
];
const blockchain = [
    [ "HTML" , "Advance"  ] ,
    [  "CSS"  , "Intermediate"  ],
    [  "Bootstrap"  , "Intermediate"  ],
    [  "JavaScript"  , "Intermediate"  ],
    [  "React"  , "Intermediate"  ],
    [  "Git"  , "Intermediate"  ]
];

const Skills = ()=>{
    return (
        <div className="skills" id='Skill__page'>
            <h1>Skills</h1>
            <div className="skill__items">
                <Skill className= 'skill__item' name  = "Frontend Developer" skill_items = {frontEnd} /> 
                <Skill className= 'skill__item' name  = "Backend Developer" skill_items = {backEnd} />
                <Skill className= 'skill__item' name  = "Blockchain Developer" skill_items = {blockchain} />
            </div>
        </div>

    )
}

export default Skills ;