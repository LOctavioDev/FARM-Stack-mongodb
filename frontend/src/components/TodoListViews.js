import TodoItem from "./Todo";

function TodoView(props) {
  return (
    <div>
      <ul>
        {props.todoList.map((todo) => (
          <TodoItem key={todo.id} todo={todo} loadTodos={props.loadTodos} />
        ))}
      </ul>
    </div>
  );
}

export default TodoView;