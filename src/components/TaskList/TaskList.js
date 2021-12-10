import React from 'react'
import classNames from 'classnames'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import  './TaskList.css'

const TaskList = ({tasks, removeTask, completeTask}) => {
  const emptyList = (
      <p className="emptyList">
        <FontAwesomeIcon
          icon="exclamation-triangle"
          className="emptyListIcon"
        />
        You don't have any task
      </p>
  )

  const filledList = (
    <ul className="list">
      {tasks.map(task => {
        const taskClass = classNames("task", { "done": task.done })

        return (
          <li className={taskClass} key={task.id}>
            <div className="taskInfo">
              <button
                className="completeButton"
                onClick={() => completeTask(task)}
                type="button"
              >
                <FontAwesomeIcon
                  icon={task.done ? 'check-circle' : ['far', 'circle']}
                />
              </button>

              <p className="taskName">
                {task.name}
              </p>
            </div>


            <button
              className="deleteButton"
              onClick={() => removeTask(task.id)}
              type='button'
            >
              <FontAwesomeIcon icon="trash-alt" />
            </button>
          </li>
        )
      })}
    </ul>
  )

  if (tasks.length === 0) {
    return emptyList
  } else {
    return filledList
  }
}

export default TaskList
