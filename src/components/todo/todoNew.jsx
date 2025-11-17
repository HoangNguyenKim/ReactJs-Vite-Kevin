const TodoNew = (props) => {
    console.log(props);
    const { callMe } = props;
    const handelClick = () => {
        console.log("click me ");
    }
    const handleOnchange = (name) => {
        console.log("New value", name)
    }
    return (
        <div className="todo_New">
            <input type="text"
                onChange={(event) => { handleOnchange(event.target.value) }}
            />
            <button
                style={{ cursor: 'pointer' }}
                onClick={handelClick}
            >Add</button>
        </div >
    );
}
export default TodoNew;