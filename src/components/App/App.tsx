import { ActionPanel } from "../ActionPanel/ActionPanel";
import { TodoList } from "../TodoList/TodoList";
import "./style.scss";
export const App = () => {
  return (
    <div className="app">
      <ActionPanel />
      <TodoList />
    </div>
  );
};
