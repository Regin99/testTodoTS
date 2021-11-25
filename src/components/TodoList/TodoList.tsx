import { TodoItem } from "./TodoItem/TodoItem";
import { useSelector } from "react-redux";

export const TodoList = () => {
  const todos = useSelector((state: any) => state);

  return (
    <div>
      {todos.map((todo: any) => (
        <TodoItem
          key={todo.id}
          todoText={todo.text}
          checked={todo.checked}
          id={todo.id}
        />
      ))}
    </div>
  );
};
