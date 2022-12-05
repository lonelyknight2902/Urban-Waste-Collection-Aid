import React from 'react'
import './CreateTask.css';
import Select from 'react-select';

function CreateTaskCollector({collectorsList, MCPsList, handleSubmit, onChangeName, onChangeAssigned, onChangeMCPs}) {

  return (
    <div className='create-task'>
      <div className='left-panel'>
      <h1>Create collector's task</h1>
        <form onSubmit={handleSubmit}>
          <div className="auth_input" >
            <label htmlFor="task-name">Name</label>
            <input
              id='task-name'
              type="text"
              placeholder="Enter task name"
              onChange={onChangeName}
            ></input>
          </div>
          <div className="auth_input">
            <label htmlFor="assigned-to">Assigned to</label>
            <Select id='assigned-to' onChange={onChangeAssigned} options={collectorsList.map((collector) => {
                return {
                  value: collector.name,
                  label: collector.name
                }
              })}/>
          </div>
          <div className="auth_input">
            <label htmlFor="assigned-mcp">Assigned MCP</label>
            <Select id='assigned-mcp' onChange={onChangeMCPs} isMulti={true} options={MCPsList.map((mcp) => {
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

export default CreateTaskCollector