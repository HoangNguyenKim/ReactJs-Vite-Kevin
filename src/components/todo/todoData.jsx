const TodoData = (props) => {
    const { toDoList, deleteTodo } = props;
    const handleDelete = (idTodo) => {
        deleteTodo(idTodo)
    }
    return (
        <div className="todo_data">
            {toDoList.map((item, index, array) => {
                return (
                    <div className="todo-item" key={item.id}>
                        <div>{item.name}</div>

                        <button
                            style={{ cursor: "pointer" }}
                            onClick={() => handleDelete(item.id)}
                        >delete
                        </button>
                    </div>
                );
            })}
        </div >
    );
}
export default TodoData

