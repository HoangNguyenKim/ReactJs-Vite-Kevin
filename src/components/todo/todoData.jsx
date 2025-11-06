const TodoData = (props) => {
    const { name, age, data } = props;
    return (
        <div className="todo_data">
            <div>My name is {name}</div>
            <div>Iam {age} Years old</div>
            <div > Watch  {data.car} on youtube  </div>
        </div>
    );
}
export default TodoData