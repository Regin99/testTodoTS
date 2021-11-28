import { useDispatch } from "react-redux";

export const SelectAllButton = () => {
  const dispatch = useDispatch();
  const onClick = () => {
    dispatch({ type: "SELECT_ALL" });
  };

  return <button onClick={onClick}>Select All</button>;
};
