import { useAppDispatch } from "../../../redux/store";
import { SELECT_ALL } from "../../../redux/actions";

export const SelectAllButton = () => {
  const dispatch = useAppDispatch();
  const onClick = () => {
    dispatch({ type: SELECT_ALL });
  };

  return <button onClick={onClick}>Select All</button>;
};
