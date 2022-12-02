import React from 'react'
import TasksList from '../../Components/TasksList/TasksList'
import './Dashboard.css'

function Dashboard() {
  return (
    <div className='dashboard'>
      <h1>Dashboard</h1>
      <TasksList/>
    </div>
  )
}

export default Dashboard