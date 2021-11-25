import { useDispatch } from "react-redux";

export const DeleteButton = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch({ type: "DELETE_TODO" });
  };

  return <button onClick={handleClick}>Delete</button>;
};
