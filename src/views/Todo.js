const Todo = (props) => {
  // const todos = props.todos;
  //props: property
  // parent => child , top =>bottom

  const { todos, title, deleteDataTodos } = props;

  const handleDelete = (id) => {
    console.log(">>check id:", id);
    deleteDataTodos(id);
  };

  return (
    <div className="todo-Container">
      <div className="title">{title}</div>

      {/* <li className="todo-child">doing homework 1 </li>
          <li className="todo-child">doing homework 1 </li> */}
      {todos.map((todo) => {
        return (
          <div key={todo.id}>
            <li className="todo-child">
              {todo.title} &nbsp; &nbsp;{" "}
              <span onClick={() => handleDelete(todo.id)}>x</span>
            </li>
          </div>
        );
      })}

      <hr />
    </div>
  );
};
export default Todo;
