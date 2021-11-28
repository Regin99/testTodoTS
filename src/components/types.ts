export interface ToDo {
  id: number;
  text: string;
  checked: boolean;
}

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

export type ActionType = AddTodo | DeleteTodo | ToggleTodo | SelectAll;
