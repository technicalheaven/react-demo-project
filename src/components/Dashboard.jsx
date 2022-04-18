import React from 'react'
import { useLocation } from 'react-router-dom';
import Header from './DashboardHeader.jsx';
import ProjectStage from './ProjectStage.jsx';
import '../css/Dashboard.css';

const Dashboard = () => {
  const {state} = useLocation();
  const { id, name } = state;
  const stages  = ['Backlog','Ready','In Progress','Done'];
  return (
    <>
    <Header projectTitle={name}/>
    <div className="dashboard page">
      <div className="stages">
        {
          stages.map((item,index)=><ProjectStage stage={item} key={index}/>)
        }
        
      </div>
    </div>
    </>
  )
}

export default Dashboard