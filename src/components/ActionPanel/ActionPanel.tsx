import { SelectAllButton } from "./SelectAllButton/SelectAllButton";
import { DeleteButton } from "./DeleteButton/DeleteButton";
import "./style.scss";

export const ActionPanel = () => {
  return (
    <div className="action-panel">
      <SelectAllButton />
      <DeleteButton />
    </div>
  );
};
