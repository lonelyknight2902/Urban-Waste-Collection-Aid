import React from 'react'
import TasksRow from '../TasksRow/TasksRow'
import './TasksList.css';

function TasksList({tasksList, viewDetail}) {

  return (
    <div>
      <div className='label'>
        <div>Name</div>
        <div>Type</div>
        <div>Assigned to</div>
        <div>Assigned MCPs</div>
        <div>Status</div>
      </div>
        {tasksList?.map(task => (<TasksRow key={task.id} id={task.id} name={task.name} type={task.type} assigned={task.assigned} mcps={task.mcps} status={task.status} onView={viewDetail}/>))}
    </div>
  )
}

export default TasksList