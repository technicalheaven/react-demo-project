import '../css/Task.css';
import {FaPlus,FaRegCheckCircle} from 'react-icons/fa';
const Task = (props) => {
  return (
    <div className="task">
    <div className="task-image">
        <img src={props.image} alt="" className="w-100"/>
    </div>
    <div className="bars">
        <span></span>
        <span></span>
    </div>
    <div className="task-title">
        <span><FaRegCheckCircle/></span>
        <span>{props.title}</span>
    </div>
    <div className="task-category">
        <span style={{backgroundColor:props.categorycolor}}>{props.category}</span>
    </div>
    <div className="task-footer"></div>
  </div>
  )
}
export default Task