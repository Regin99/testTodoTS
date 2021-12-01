import { TodoItem } from "./TodoItem/TodoItem";
import { useAppSelector } from "../../redux/store";
import "./style.scss";
import { ToDo } from "../../redux/types";

export const TodoList = () => {
  const todos = useAppSelector((state) => state);

  return (
    <div className="todo-list">
      {todos.map((todo: ToDo) => (
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
