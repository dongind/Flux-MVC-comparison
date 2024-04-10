import {
  ActionTypes,
  AddTodoAction,
  RemoveTodoAction,
  SelectTodoAction,
  ToggleTodoAction,
} from "../types/actions";
import { TodoElement, TodoState } from "../types/todo";

const addTodo = (todoContent: string): AddTodoAction => {
  return {
    type: ActionTypes.ADD_TODO,
    payload: todoContent,
  };
};

const toggleTodo = (id: number, state: TodoState): ToggleTodoAction => {
  return {
    type: ActionTypes.TOGGLE_TODO,
    payload: { id, state },
  };
};

const removeTodo = (id: number, state: TodoState): RemoveTodoAction => {
  return {
    type: ActionTypes.REMOVE_TODO,
    payload: { id, state },
  };
};

const selectTodo = (todo: TodoElement): SelectTodoAction => {
  return {
    type: ActionTypes.SELECT_TODO,
    payload: todo,
  };
};

export const ACTIONS = {
  addTodo,
  toggleTodo,
  removeTodo,
  selectTodo,
};
