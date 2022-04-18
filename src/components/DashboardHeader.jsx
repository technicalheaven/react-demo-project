import React from 'react'
import logo from '../images/dashboard-logo.png';
import user1 from '../images/user1.jpg';
import user2 from '../images/user2.jpg';
import user3 from '../images/user3.jpg';
import { FaSistrix,FaPlusCircle,FaRegCheckCircle,FaFilter,FaSort,FaSlidersH,FaPager,FaEllipsisH } from 'react-icons/fa';

import '../css/DashboardHeader.css';
const DashboardHeader = (props) => {
  return (
    <header className="dashboardHeader">
      <div className="container">
          <div className="d-flex">
          <div className="logo">
              <img src={logo} alt="logo" className="w-100"/>
          </div>
          <div className="navigation">
              <div className="title">{props.projectTitle}</div>
              <nav>
                  <div className="menu-items">Overview</div>
                  <div className="menu-items">List</div>
                  <div className="menu-items active">Board</div>
                  <div className="menu-items">Timeline</div>
                  <div className="menu-items">Calandar</div>
                  <div className="menu-items">Dashboard</div>
                  <div className="menu-items">Message</div>
                  <div className="menu-items">More...</div>
              </nav>
          </div>
          </div>
          <div className="others">
              <div className="collabrators">
                    <div class="user"><img src={user1} alt="user" /></div>
                    <div class="user"><img src={user2} alt="user" /></div>
                    <div class="user"><img src={user3} alt="user" /></div>
              </div>
              <div className="searchbox">
                  <i class="search-icon"><FaSistrix color="#897b7b"/></i>
                  <input type="text" id="searchInput"/>
              </div>
              <div className="addicon"><FaPlusCircle size={25} color={"#3f9943"}/></div>
          </div>
      </div>
      <div className="actionBar">
          <div className="info">Last Task completed on Sep 30</div>
          <div className="actions">
              <div className="item"><FaRegCheckCircle color='#717171' size={16}/> All Tasks</div>
              <div className="item"><FaFilter color='#717171' size={16}/> Filter</div>
              <div className="item"><FaSort color='#717171' size={16}/> Sort</div>
              <div className="item"><FaSlidersH color='#717171' size={16}/> Rules</div>
              <div className="item"><FaPager color='#717171' size={16}/> Fields</div>
              <div className="item"><FaEllipsisH color='#717171' size={16}/></div>
          </div>
      </div>
    </header>
  )
}

export default DashboardHeader