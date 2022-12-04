import React from 'react'
import TasksList from '../../Components/TasksList/TasksList'
import './Dashboard.css'
import { Link, useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className='dashboard'>
      <div className='dashboard-head'>
        <h1>Dashboard</h1>
        <button onClick={(e) => {navigate('/createTask')}}>Create task</button>
      </div>
      <TasksList/>
    </div>
  )
}

export default Dashboard