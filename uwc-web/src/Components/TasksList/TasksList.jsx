import React from 'react'
import TasksRow from '../TasksRow/TasksRow'

function TasksList() {
  return (
    <div>
        <TasksRow name="Collect garbage" type="Janitor's task" assigned="Nguyen Van A" mcp={[1]} status="completed"/>
    </div>
  )
}

export default TasksList