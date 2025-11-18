import { useState } from "react";

const TodoNew = (props) => {
    console.log(props);
    const { addNewTodo } = props;

    const handelClick = () => {
        if (value == "") {
            alert("Input is empty");
        }
        else {
            addNewTodo(value);
            setValue("");
        }
    }
    const handleOnchange = (name) => {
        setValue(name);
    }
    // useState hook
    const [value, setValue] = useState("");

    return (
        <div className="todo_New">
            <input type="text"
                onChange={(event) => { handleOnchange(event.target.value) }}
                value={value}
            />
            <button
                style={{ cursor: 'pointer' }}
                onClick={handelClick}
            >Add</button>
            <div>My Name is = {value}</div>
        </div >
    );
}
export default TodoNew;