import { TodoState } from "./todo";

// export const ACTION_TYPES = {
//   ADD_TODO: "ADD_TODO",
//   REMOVE_TODO: "REMOVE_TODO",
// };

// export type ActionTypes = (typeof ACTION_TYPES)[keyof typeof ACTION_TYPES];

export enum ActionTypes {
  ADD_TODO = "ADD_TODO",
  REMOVE_TODO = "REMOVE_TODO",
}

export interface AddTodoAction {
  type: "ADD_TODO";
  payload: string;
}

export interface RemoveTodoAction {
  type: "REMOVE_TODO";
  payload: {
    id: number;
    state: TodoState;
  };
}

export type Action = AddTodoAction | RemoveTodoAction;
