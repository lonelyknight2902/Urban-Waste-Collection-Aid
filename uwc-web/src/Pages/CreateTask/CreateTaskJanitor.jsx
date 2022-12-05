import React, { useState, useEffect } from 'react'
import Select from 'react-select';
import './CreateTask.css';

function CreateTaskJanitor({janitorsList, MCPsList, handleSubmit, onChangeName, onChangeAssigned, onChangeMCPs}) {

  return (
    <div className='create-task'>
      <div className='left-panel'>
      <h1>Create janitor's task</h1>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="auth_input" >
            <label htmlFor="task-name">Name</label>
            <input
              type="text"
              placeholder="Enter task name"
              onChange={onChangeName}
            ></input>
          </div>
          <div className="auth_input">
            <label htmlFor="assigned-to">Assigned to</label>
            <Select id='assigned-to' onChange={onChangeAssigned} options={janitorsList.map((janitor) => {
              return {
                value: janitor.name,
                label: janitor.name
              }
            })}/>
          </div>
          <div className="auth_input">
            <label htmlFor="assigned-mcp">Assigned MCP</label>
            <Select id='assigned-mcp' onChange={onChangeMCPs} options={MCPsList.map((mcp) => {
                return {
                    value: mcp.number,
                    label: mcp.number
                }
            })}/>
          </div>
          <div className="submit">
            <button type='submit'>+ Add task</button>
          </div>
        </form>
      </div>
      <img src="https://otonari.tokyo/media/wp-content/uploads/2021/04/messageImage_1617255133080-min-768x514.jpg" alt="CreateTask" className='image'></img>
    </div>
  )
}

export default CreateTaskJanitor