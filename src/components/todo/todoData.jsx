const TodoData = (props) => {
    const { toDoList } = props;
    console.log(toDoList);
    return (
        <div className="todo_data">
            {toDoList.map((item, index, array) => {
                return (
                    <div className="todo-item" key={item.id}>
                        <div>{item.name}</div>
                        <button>delete</button>
                    </div>
                );
            })}
        </div>
    );
}
export default TodoData