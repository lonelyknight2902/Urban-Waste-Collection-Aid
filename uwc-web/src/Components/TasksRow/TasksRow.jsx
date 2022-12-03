import React from 'react'
import './TasksRow.css'
import { FaUserCircle } from 'react-icons/fa';
import { IconContext } from "react-icons";

function TasksRow({name, type, assigned, mcps, status}) {
  return (
    <div className='task'>
        <div className='task-item'>{name}</div>
        <div className='task-item'>{type}</div>
        <div className='task-item assigned'>
            <IconContext.Provider value={{ size: "32px" }}>
            <span className='icon'>
                <FaUserCircle/>
            </span>
            </IconContext.Provider>
            <span>{assigned}</span>
            </div>
        <div className='task-item mcp'>
          {mcps.map(element => (<div className='circle'>{element}</div>))}
        </div>
        <div className='task-item'>
            <div className={status + ' status'}>{status}</div>
        </div>
    </div>
  )
}

export default TasksRow