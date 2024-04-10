import { TodoElement, TodoState } from "./todo";

export enum ActionTypes {
  ADD_TODO = "ADD_TODO",
  REMOVE_TODO = "REMOVE_TODO",
  TOGGLE_TODO = "TOGGLE_TODO",
  SELECT_TODO = "SELECT_TODO",
}

export type Action =
  | AddTodoAction
  | RemoveTodoAction
  | ToggleTodoAction
  | SelectTodoAction;

export interface AddTodoAction {
  type: ActionTypes.ADD_TODO;
  payload: string;
}

export interface RemoveTodoAction {
  type: ActionTypes.REMOVE_TODO;
  payload: {
    id: number;
    state: TodoState;
  };
}

export interface ToggleTodoAction {
  type: ActionTypes.TOGGLE_TODO;
  payload: {
    id: number;
    state: TodoState;
  };
}

export interface SelectTodoAction {
  type: ActionTypes.SELECT_TODO;
  payload: TodoElement;
}
