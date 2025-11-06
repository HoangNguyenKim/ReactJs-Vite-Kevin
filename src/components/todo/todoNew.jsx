const TodoNew = (props) => {
    console.log(props);
    const { callMe } = props;
    callMe("Hoang");
    return (
        <div className="todo_New">
            <input type="text" />
            <button>Add</button>
        </div>
    );
}
export default TodoNew;