import React from 'react'
import './CreateTask.css';

function CreateTask() {
  return (
    <div className='create-task'>
      <h1>Create janitor's task</h1>
      <div className='left-panel'>
        <form>
          <div className="auth_input">
            <label htmlFor="task-name">Name</label>
            <input
              type="text"
              placeholder="Enter task name"
            ></input>
          </div>
          <div className="auth_input">
            <label htmlFor="assigned-to">Assigned to</label>
            <input
              type="text"
              placeholder="+ Add assigned janitor"
            ></input>
          </div>
          <div className="auth_input">
            <label htmlFor="assigned-mcp">Assigned MCP</label>
            <input
              type="text"
              placeholder="+ Add assigned MCP"
            ></input>
          </div>
          <div className="submit">
            <button>+ Add task</button>
          </div>
        </form>
      </div>
      {/* <div className='right-picture'>
      </div> */}
      <img src="https://otonari.tokyo/media/wp-content/uploads/2021/04/messageImage_1617255133080-min-768x514.jpg" alt="CreateTask" className='image'></img>
    </div>
  )
}

export default CreateTask