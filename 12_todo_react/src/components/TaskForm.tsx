import React, {useState, useEffect} from 'react'

// CSS
import styles from './TaskForm.module.css'

// Interface
import { ITask } from '../interfaces/Task'

interface Props {
    btnText: string,
    taskList: ITask[]
    setTaskList?: React.Dispatch<React.SetStateAction<ITask[]>>
    task?: ITask | null;
    handleUpdate?(id: number, title: string, difficulty: number) : void
}

const TaskForm = ({btnText, taskList, setTaskList, task, handleUpdate}: Props) => {

  const [id, setId] = useState<number>(0)
  const [title, setTitle] = useState<string>('')
  const [difficulty, setDifficulty] = useState<number>(0)
  
  useEffect(() => {
    if(task) {
      setId(task.id)
      setTitle(task.title)
      setDifficulty(task.difficulty)
    }
  }, [task])

  const addTaskHandler: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()

    if(handleUpdate) {
      handleUpdate(id, title, difficulty)
    }else {
      const id = Math.floor(Math.random() * 1000) + 1
      const newTask: ITask = {id, title, difficulty}

      setTaskList!([...taskList, newTask])
      setTitle("")
      setDifficulty(0)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if(e.target.name === "title") {
      setTitle(e.target.value)
    }else {
      setDifficulty(parseInt(e.target.value))
    }
    
  }



  return (
    <form onSubmit={addTaskHandler} className={styles.form}>
        <div className={styles.input_container}>
            <label htmlFor="title">Título:</label>
            <input
              type="text"
              name='title'
              placeholder='Título da Tarefa'
              onChange={handleChange}
              value={title}
               />
        </div>
        <div className={styles.input_container}>
            <label htmlFor="difficulty">Dificuldade:</label>
            <input
              type="number"
              name='difficulty'
              placeholder='Dificuldade'
              onChange={handleChange}
              value={difficulty}
               />
        </div>
        <button type='submit' >{btnText}</button>
    </form>
  )
}

export default TaskForm