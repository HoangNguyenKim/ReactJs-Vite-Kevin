import './components/todo/todo.css'
import TodoData from './components/todo/todoData'
import TodoNew from './components/todo/todoNew'
import reactLogo from './assets/react.svg'
import { useState } from 'react'
const App = () => {
  const randomIntFromInterval = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
  const [toDoLists, setToDoList] = useState([])
  const addNewTodo = (Name) => {
    const newTodo = {
      id: randomIntFromInterval(1, 100000),
      name: Name
    }
    setToDoList([...toDoLists, newTodo]);
  }

  return (
    <div className="todo_container">
      <div className="todo_title">ToDo List</div>
      <TodoNew
        addNewTodo={addNewTodo}
      />
      <TodoData
        toDoList={toDoLists}
      />
      <img src={reactLogo} className='logo' alt="" />
    </div>
  )
}

export default App
