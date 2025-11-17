const TodoData = (props) => {
    const { name, age, data, toDoList } = props;
    console.log(toDoList);
    return (
        <div className="todo_data">
            <div>My name is {name}</div>
            <div>Iam {age} Years old</div>
            <div > Watch  {data.car} on youtube  </div>

            <div>
                {JSON.stringify(toDoList)}
            </div>
        </div>
    );
}
export default TodoData