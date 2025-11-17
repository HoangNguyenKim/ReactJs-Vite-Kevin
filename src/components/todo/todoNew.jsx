import { useState } from "react";

const TodoNew = (props) => {
    console.log(props);
    const { callMe } = props;
    const handelClick = () => {
        console.log("click me ");
    }
    const handleOnchange = (name) => {
        setValue(name);
    }
    // useState hook
    const [value, setValue] = useState("Hoang");

    return (
        <div className="todo_New">
            <input type="text"
                onChange={(event) => { handleOnchange(event.target.value) }}
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