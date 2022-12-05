import React from 'react'
import TasksList from '../../Components/TasksList/TasksList'
import './Dashboard.css'
import { Link, useNavigate } from "react-router-dom";
import TasksListController from '../../Components/TasksList/TasksListController';

function Dashboard() {
  const navigate = useNavigate();
  return (
    <div className='dashboard'>
      <div className='dashboard-head'>
        <h1>Dashboard</h1>
        <div className="dropdown">
          <button>Create task</button>
          <div className="dropdown-content">
            <a onClick={(e) => navigate('/createtask/janitor')} href="">Janitor's task</a>
            <a onClick={(e) => navigate('/createtask/collector')} href="">Collector's task</a>
          </div>
        </div>
      </div>
      <TasksListController/>
    </div>
  )
}

export default Dashboard