import React from 'react'
import './TaskAdd.css'

const TaskAdd = ({addTaskName, taskName, addTask}) => (
  <form className="taskAdd" onSubmit={addTask}>
    <input
      className="input"
      onChange={addTaskName}
      placeholder="Type your task"
      type="text"
      value={taskName}
    />

    <button className="button">
      Add
    </button>
  </form>
)

export default TaskAdd
