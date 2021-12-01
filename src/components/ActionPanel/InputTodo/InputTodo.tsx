import { useAppDispatch } from "../../../redux/store";
import { ADD_TODO } from "../../../redux/actions";
import { useInputText } from "../../../hooks/useInputText";

export const InputTodo = () => {
  const dispatch = useAppDispatch();
  const input = useInputText();
  const handleClick = () => {
    dispatch({
      type: ADD_TODO,
      text: input.value,
      id: Date.now(),
    });
  };

  return (
    <form>
      <input
        type="text"
        onChange={(e) => {
          input.onChange(e);
        }}
        value={input.value}
        placeholder="Enter todo"
      />
      <button
        onClick={(e) => {
          input.clear();
          e.preventDefault();
          handleClick();
        }}>
        Add
      </button>
    </form>
  );
};
