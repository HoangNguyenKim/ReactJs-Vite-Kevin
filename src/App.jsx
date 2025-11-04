import './components/todo/todo.css'
import TodoData from './components/todo/todoData'
import TodoNew from './components/todo/todoNew'
import reactLogo from './assets/react.svg'
const App = () => {


  return (
    <div className="todo_container">
      <div className="todo_title">ToDo List</div>
      <TodoNew />
      <TodoData />
      <img src={reactLogo} className='logo' alt="" />
    </div>
  )
}

export default App
