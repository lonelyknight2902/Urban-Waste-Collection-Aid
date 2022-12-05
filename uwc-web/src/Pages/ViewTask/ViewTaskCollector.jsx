import React from 'react'
import { FaUserCircle } from 'react-icons/fa';
import { IconContext } from "react-icons";

function ViewTaskCollector({task}) {
  return (
    <div className='view'>
      <div className='view-info'>
      <h1>{task.name}</h1>
      <div className="content">
         <div className='assigned-to'>
         <IconContext.Provider value={{ size: "32px" }}>
            <span className='icon'>
                <FaUserCircle/>
            </span>
            </IconContext.Provider>
            <span>{task.assigned}</span>
         </div>
         <div></div>
         <div></div>
      </div>
    </div>
    </div>
  )
}

export default ViewTaskCollector;