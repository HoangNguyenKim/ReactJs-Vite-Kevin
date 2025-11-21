import './components/todo/todo.css'
import TodoData from './components/todo/todoData'
import TodoNew from './components/todo/todoNew'
import reactLogo from './assets/react.svg'
import { useState } from 'react'
import Header from './components/layout/header'
import Footer from './components/layout/footer'
import { Outlet } from 'react-router-dom'
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
  const deleteTodo = (idDelete) => {
    const newTodo = toDoLists.filter((item) => item.id != idDelete);
    setToDoList(newTodo);
  }

  return (
    <>
      <Header />
      <div className="todo_container">
        <div className="todo_title">ToDo List</div>
        <TodoNew
          addNewTodo={addNewTodo}
        />
        {toDoLists.length > 0 ?
          <TodoData
            toDoList={toDoLists}
            deleteTodo={deleteTodo}
          />
          :
          <div>
            <img src={reactLogo} className='logo' alt="" />
          </div>
        }
      </div>
      <Outlet />
      <Footer />
    </>
  )
}

export default App
