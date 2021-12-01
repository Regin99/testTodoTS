import { ChangeEvent, useState } from "react";

export const useInputText = () => {
  const [value, setValue] = useState("");
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };
  const clearInput = () => {
    setValue("");
  };
  return {
    value,
    onChange: handleChange,
    clear: clearInput,
  };
};
