import React from 'react'
import './TasksRow.css'
import { FaUserCircle } from 'react-icons/fa';
import { IconContext } from "react-icons";

function TasksRow({name, type, assigned, mcp, status}) {
  return (
    <div className='task'>
        <div className='task-item'>{name}</div>
        <div className='task-item'>{type}</div>
        <div className='task-item'>
            <IconContext.Provider value={{ size: "32px" }}>
            <span>
                <FaUserCircle/>
            </span>
            </IconContext.Provider>
            <span>{assigned}</span>
            </div>
        <div className='task-item'>{mcp}</div>
        <div className='task-item'>
            <div className={status}>{status}</div>
        </div>
    </div>
  )
}

export default TasksRow