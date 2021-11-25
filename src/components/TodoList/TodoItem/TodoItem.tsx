import { useDispatch } from "react-redux";

interface TodoItemProps {
  todoText?: string;
  checked?: boolean;
  id?: number;
}

export const TodoItem = ({ todoText, checked, id }: TodoItemProps) => {
  const dispatch = useDispatch();
  return (
    <div>
      <input
        type="checkbox"
        checked={checked}
        onChange={() => {
          dispatch({ type: "TOGGLE_TODO", id: id });
        }}
      />

      <span>{todoText}</span>
    </div>
  );
};
