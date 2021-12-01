import { ADD_TODO, DELETE_TODO, TOGGLE_TODO, SELECT_ALL } from "./actions";

export interface ToDo {
  id: number;
  text: string;
  checked: boolean;
}

interface AddTodo {
  type: typeof ADD_TODO;
  id: number;
  text: string;
}
interface DeleteTodo {
  type: typeof DELETE_TODO;
}
interface ToggleTodo {
  type: typeof TOGGLE_TODO;
  id: number;
}

interface SelectAll {
  type: typeof SELECT_ALL;
}

export type ActionType = AddTodo | DeleteTodo | ToggleTodo | SelectAll;
