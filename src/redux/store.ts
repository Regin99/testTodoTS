import { createStore } from "redux";
import { reducer } from "./reducer";

export const store = createStore(reducer);

store.subscribe(() => {
  localStorage.setItem("todos", JSON.stringify(store.getState()));
});
