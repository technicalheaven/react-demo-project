import React from 'react'
import {FaPlus,FaEllipsisH } from 'react-icons/fa';
import '../css/ProjectStage.css';
import Task from './Task.jsx';
import Task1Image from '../images/project1.png';
import Task2Image from '../images/project2.jpg';
import Task3Image from '../images/project3.jpg';

const ProjectStage = (props) => {
  return (
    <div className="projectStage">
        <div className="header-section">
            <div className="title">{props.stage}</div>
            <div className="actions">
                <span className="item"><FaPlus/></span>
                <span className="item"><FaEllipsisH/></span>
            </div>
        </div>
        <div className="tasks">
         <Task title="Performance improvements" image={Task1Image} category="Engineering" categorycolor="#8f81ce"/>
         <Task title="Performance improvements" image={Task2Image} category="Design" categorycolor="#ce5d5d"/>
         <Task title="Performance improvements" image={Task3Image} category="Research" categorycolor="#8BC34A"/>
        </div>
    </div>
  )
}

export default ProjectStage