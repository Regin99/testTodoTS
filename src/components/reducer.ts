import { ToDo, ActionType } from "./types";
import { ADD_TODO, DELETE_TODO, TOGGLE_TODO, SELECT_ALL } from "./actions";

const initialState: ToDo[] = [
  {
    id: 0,
    text: "buy car",
    checked: false,
  },
  {
    id: 1,
    text: "buy pen",
    checked: false,
  },
  {
    id: 2,
    text: "buy milk ",
    checked: false,
  },
];

const localStorageTodos = localStorage.getItem("todos");
const persistedState = localStorageTodos
  ? JSON.parse(localStorageTodos)
  : initialState;

export const reducer = (state: ToDo[] = persistedState, action: ActionType) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, { id: action.id, text: action.text, checked: false }];
    case DELETE_TODO:
      return state.filter((todo) => !todo.checked);
    case TOGGLE_TODO:
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, checked: !todo.checked } : todo
      );
    case SELECT_ALL:
      return state.map((todo) => ({ ...todo, checked: true }));
    default:
      return state;
  }
};
