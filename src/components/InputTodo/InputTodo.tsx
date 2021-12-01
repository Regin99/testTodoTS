import { useAppDispatch } from "../../redux/store";
import { ADD_TODO } from "../../redux/actions";
import { useInputText } from "../../hooks/useInputText";
import "./style.scss";

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
    <form
      className="input-todo"
      onSubmit={(e) => {
        e.preventDefault();
        handleClick();
        input.clear();
      }}>
      <input
        type="text"
        onChange={(e) => {
          input.onChange(e);
        }}
        value={input.value}
        placeholder="What needs to be done?"
      />
    </form>
  );
};
