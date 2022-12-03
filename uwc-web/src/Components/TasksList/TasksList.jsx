import React from 'react'
import TasksRow from '../TasksRow/TasksRow'
import './TasksList.css'

function TasksList() {
  return (
    <div>
      <div className='label'>
        <div>Name</div>
        <div>Type</div>
        <div>Assigned to</div>
        <div>Assigned MCPs</div>
        <div>Status</div>
      </div>
        <TasksRow name="Collect garbage" type="Janitor's task" assigned="Nguyen Van A" mcps={[1,2,3]} status="Completed"/>
        <TasksRow name="Pickup garbage" type="Janitor's task" assigned="Nguyen Van B" mcps={[1]} status="In-progress"/>
    </div>
  )
}

export default TasksList