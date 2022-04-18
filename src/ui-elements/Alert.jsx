import '../css/Alert.css';
import {FaTimes} from 'react-icons/fa';
const Alert = (props) => {
  return (
    <>
    <div className="alert" style={{backgroundColor:props.background}}>
    <div className="message">{props.message}</div>
    <div className="close" onClick={()=>{props.close()}}><FaTimes/></div>
    </div>
    </>
  )
}

export default Alert