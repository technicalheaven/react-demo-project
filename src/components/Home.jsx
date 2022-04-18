import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Home.css';
import logo from '../images/trello-home-logo.png';
const Home = () => {
  return (
    <>
    <div className="homePage page">
        <div className="box">
            <div className="logo"><img src={logo} className="w-100" alt="logo" /></div>
            <h3 className="text-center">Trello helps teams move work forward.</h3>
            <div className="actionBtns">
            <Link to="./login"><button className="btn btn-login">Login</button></Link>
            <Link to="./register"><button className="btn btn-register">Register</button></Link>
            </div>
        </div>
    </div>
    </>
  )
}

export default Home