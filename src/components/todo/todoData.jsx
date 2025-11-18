const TodoData = (props) => {
    const { name, age, data, toDoList } = props;
    console.log(toDoList);
    return (
        <div className="todo_data">
            {toDoList.map((item, index, array) => {
                return (
                    <div className="todo-item">
                        <div>{item.name}</div>
                        <button>delete</button>
                    </div>
                );
            })}

            <div>
                {JSON.stringify(toDoList)}
            </div>
        </div>
    );
}
export default TodoData