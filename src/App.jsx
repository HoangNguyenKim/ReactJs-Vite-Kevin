import './components/todo/todo.css'
import TodoData from './components/todo/todoData'
import TodoNew from './components/todo/todoNew'
import reactLogo from './assets/react.svg'
const App = () => {
  const name = "Kevin";
  const age = 19;
  const data = {
    car: "BMW",
    car2: "RR"
  }
  return (
    <div className="todo_container">
      <div className="todo_title">ToDo List</div>
      <TodoNew />
      <TodoData
        name={name}
        age={age}
        data={data}
      />
      <img src={reactLogo} className='logo' alt="" />
    </div>
  )
}

export default App
