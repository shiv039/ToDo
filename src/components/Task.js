import React, { Component } from 'react'
import Header from './Header/Header'
import { v4 as uuidv4 } from 'uuid'
import TaskAdd from './TaskAdd/TaskAdd'
import TaskList from './TaskList/TaskList';
import './Task.css'

class Tasks extends Component {
  state = {
    tasks: [
      this.buildTask('Make coffee'),
      this.buildTask('Code'),
      this.buildTask('Sleep'),
      this.buildTask('Repeat'),
    ],
    taskName: ''
  }

  buildTask(name) {
    return { id: uuidv4(), name, done: false }
  }

  taskNameHandler = (e) => {
    this.setState({taskName: e.currentTarget.value})
  }

  addTaskHandler = (e) => {
    e.preventDefault()

    this.setState(prevState => ({
      tasks: [
        ...prevState.tasks,
        this.buildTask(this.state.taskName)
      ],

      taskName: ''
    }))
  }

  removeTaskHandler = (id) => {
    let filteredTasks = this.state.tasks.filter(task => task.id !== id)

    this.setState({tasks: filteredTasks})
  }

  completeTaskHandler = (task) => {
    task.done = !task.done

    this.setState(prevState => ({
      tasks: prevState.tasks.filter(prevTask => prevTask.id !== task.id)
        .concat([task])
    }))
  }

  clearTasksHandler = () => {
    this.setState({tasks: []})
  }

  render() {
    return (
      <div className="tasks">
        <Header
          tasks={this.state.tasks}
          clearTasks={this.clearTasksHandler}
        />

        <TaskAdd
          addTask={this.addTaskHandler}
          addTaskName={this.taskNameHandler}
          taskName={this.state.taskName}
        />

        <TaskList
          tasks={this.state.tasks}
          removeTask={this.removeTaskHandler}
          completeTask={this.completeTaskHandler}
        />
      </div>
    )
  }
}

export default Tasks
