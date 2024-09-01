import React, { useState } from 'react'

function TaskList2() {
    const [taskList, setTaskList] = useState([])
    const [task, setTask] = useState('')

    const addNewTask = () => {
        if (task.trim() === '') return

        const addTask = {
            id: Date.now(),
            nombre: task
        }
        setTaskList([...taskList, addTask])
        setTask('')

    }
    const deleteTask = (taskId) => {
        setTaskList(taskList.filter(task => task.id !== taskId))
    }

  return (
    <div>
        <title>Lista de Tareas 2</title>
        <input onChange={(e) => setTask(e.target.value)} value={task} type="text" placeholder='Write your task'/>
        <button onClick={addNewTask}>Agregar</button>
        <ul>
            {taskList.map(task => (
                <li key={task.id}>
                    {task.nombre}
                    <button onClick={() => deleteTask(task.id)}>Eliminar</button>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default TaskList2
