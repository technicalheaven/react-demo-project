import React from 'react';
import { Link,useLocation } from 'react-router-dom';
import logo from '../images/logo.png';
import '../css/Header.css';

const Header = () => {
  let location = useLocation();
  if(location.pathname !== '/dashboard'){
  return (
    <header className="mainHeader">
        <div className="logo"><Link to="./"><img className="w-100" src={logo} alt=""/></Link></div>
        <nav>
            <Link to='./'>Home</Link> 
            <Link to='./login'>Login</Link> 
            <Link to='./register'>Register</Link>
            <Link to='./projects'>Projects</Link>
        </nav>
    </header>
  )
  }
}

export default Header