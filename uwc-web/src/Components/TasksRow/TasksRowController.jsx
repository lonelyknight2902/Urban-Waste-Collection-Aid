import React from 'react'
import './TasksRow.css'
import { FaUserCircle } from 'react-icons/fa';
import { IconContext } from "react-icons";

function TasksRowController({id, name, type, assigned, mcps, status}) {
  return (
    <div className='task' id={id}>
        <div key='name' className='task-item'>{name}</div>
        <div key='type' className='task-item'>{type}</div>
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

export default Controller