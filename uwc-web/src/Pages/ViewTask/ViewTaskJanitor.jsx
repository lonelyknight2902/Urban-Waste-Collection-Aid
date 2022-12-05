import React from 'react'
import { FaUserCircle } from 'react-icons/fa';
import { IconContext } from "react-icons";
import TasksList from '../../Components/TasksList/TasksList';
import './ViewTask.css'


function ViewTaskJanitor({task, onDelete}) {
  return (
    <div className='view'>
      <div className='view-info'>
      <h1>{task.name}</h1>
      <div className="content">
         <div className='assigned-to block'>
          <div className="title">Assigned to</div>
          <div className="profile">
          <IconContext.Provider value={{ size: "32px" }}>
            <span className='icon'>
                <FaUserCircle/>
            </span>
            </IconContext.Provider>
            <span>{task.assigned}</span>
          </div>
         </div>
         <div className='mcps block'>
          <div className="title">Assigned MCPs</div>
          <div className="mcp">
          {task.mcps.map(element => (<div className='circle'>{element}</div>))}
          </div>
         </div>
         <div className="stat block">
          <div className="title">Status</div>
          <div className={task.status + ' status'}>{task.status}</div>
         </div>
      </div>
      <button onClick={onDelete} className='delete'>Delete</button>
    </div>
    </div>
  )
}

export default ViewTaskJanitor;