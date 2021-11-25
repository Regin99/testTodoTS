import { createStore } from "redux";

interface ToDo {
  id: number;
  text: string;
  checked: boolean;
}

const initialState: ToDo[] = [
  {
    id: 0,
    text: "buy car",
    checked: false,
  },
  {
    id: 1,
    text: "buy huy",
    checked: false,
  },
  {
    id: 2,
    text: "buy milk ",
    checked: false,
  },
];

const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";
const TOGGLE_TODO = "TOGGLE_TODO";
const SELECT_ALL = "SELECT_ALL";

interface AddTodo {
  type: "ADD_TODO";
  id: number;
  text: string;
}
interface DeleteTodo {
  type: "DELETE_TODO";
  id: number;
}
interface ToggleTodo {
  type: "TOGGLE_TODO";
  id: number;
}

interface SelectAll {
  type: "SELECT_ALL";
}

type ActionType = AddTodo | DeleteTodo | ToggleTodo | SelectAll;

const reducer = (state: ToDo[] = initialState, action: ActionType) => {
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

export const store = createStore(reducer);
