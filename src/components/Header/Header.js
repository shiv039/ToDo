import React from 'react'
import TaskCounter from './TaskCounter/TaskCounter'
import "./Header.css"


const Header = ({tasks, clearTasks}) => {
  const completedTasks = tasks.filter(task => task.done === true)
  const remainingTasks = tasks.filter(task => task.done === false)

  return (
    <header className="header">
      <h1 className="title">To Do</h1>

      <div className="taskInfo">
        <TaskCounter
          className="remaining"
          tasks={remainingTasks}
          text="remaining"
        />
        <TaskCounter
          tasks={completedTasks}
          text="completed"
        />
      </div>

    </header>
  )
}

export default Header
