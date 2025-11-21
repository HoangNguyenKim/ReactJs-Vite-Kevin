import TodoData from './todoData';
import TodoNew from './todoNew';
import reactLogo from '../../assets/react.svg'
import './todo.css';
import { useState } from 'react';


const TodoApp = () => {
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
    );
}
export default TodoApp;