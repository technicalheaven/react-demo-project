import React from 'react';
import '../css/Projects.css';
import data from '../data/projects.json';
import { FaStickyNote} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Projects = () => {
  const navigate = useNavigate();
  const gotoProject = (id,name) =>{
  navigate('/dashboard', { state: { id: id, name: name } });
  }
  return (
    <div className="page projects">
        <div className="box">
        <h3 className="title">Projects</h3>
        <ul className="list">{
            data.projects.map((item)=><li onClick={()=>{gotoProject(item.id,item.name)}} key={item.id}><div>{item.name}</div><div><FaStickyNote/></div></li>)
            }
          </ul>
        </div>
    </div>
  )
}

export default Projects