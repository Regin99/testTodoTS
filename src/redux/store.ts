import { createStore } from "redux";
import { reducer } from "./reducer";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

export const store = createStore(reducer);
store.subscribe(() => {
  localStorage.setItem("todos", JSON.stringify(store.getState()));
});

type AppDispatch = typeof store.dispatch;
type RootState = ReturnType<typeof store.getState>;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
