import { SelectAllButton } from "./SelectAllButton/SelectAllButton";
import { InputTodo } from "./InputTodo/InputTodo";
import { DeleteButton } from "./DeleteButton/DeleteButton";
import "./style.scss";

export const ActionPanel = () => {
  return (
    <div className="action-panel">
      <SelectAllButton />
      <InputTodo />
      <DeleteButton />
    </div>
  );
};
