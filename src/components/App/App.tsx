import { InputTodo } from "../InputTodo/InputTodo";
import { TodoList } from "../TodoList/TodoList";
import "./style.scss";
export const App = () => {
  return (
    <div className="app">
      <h1>Todo</h1>
      <InputTodo />
      <TodoList />
    </div>
  );
};
