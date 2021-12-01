import { useState } from "react";
import { useAppDispatch } from "../../../redux/store";
import { ADD_TODO } from "../../../redux/actions";

export const InputTodo = () => {
  const [input, setInput] = useState("");
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch({
      type: ADD_TODO,
      text: input,
      id: Date.now(),
    });
    setInput("");
  };

  return (
    <form>
      <input
        type="text"
        onChange={(e) => {
          setInput(e.target.value);
        }}
        value={input}
        placeholder="Enter todo"
      />
      <button
        onClick={(e) => {
          e.preventDefault();
          handleClick();
        }}>
        Add
      </button>
    </form>
  );
};
