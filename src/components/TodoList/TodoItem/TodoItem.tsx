import { TOGGLE_TODO } from "../../../redux/actions";
import { useAppDispatch } from "../../../redux/store";
import "./style.scss";

interface TodoItemProps {
  todoText: string;
  checked: boolean;
  id: number;
}

export const TodoItem: React.FC<TodoItemProps> = ({
  todoText,
  checked,
  id,
}) => {
  const dispatch = useAppDispatch();
  return (
    <div className="todo-item">
      <input
        type="checkbox"
        checked={checked}
        onChange={() => {
          dispatch({ type: TOGGLE_TODO, id: id });
        }}
      />

      <span>{todoText}</span>
    </div>
  );
};
