import { useAppDispatch } from "../../../redux/store";
import { DELETE_TODO } from "../../../redux/actions";

export const DeleteButton = () => {
  const dispatch = useAppDispatch();
  const handleClick = () => {
    dispatch({ type: DELETE_TODO });
  };

  return <button onClick={handleClick}>Delete</button>;
};
