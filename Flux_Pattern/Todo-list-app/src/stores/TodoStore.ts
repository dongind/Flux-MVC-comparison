import { TodoElement, TodoState } from "../types/todo";
import Store from "./Store";
import { Action, ActionTypes } from "../types/actions";

const todoStore = new Store<TodoElement[]>(
  [],
  ({ type, payload }: Action, state: { data: TodoElement[] }) => {
    switch (type) {
      case ActionTypes.ADD_TODO:
        state.data = [
          ...state.data,
          {
            id: state.data.length,
            content: payload as string,
            state: TodoState.TODO,
          },
        ];
        break;
      case ActionTypes.REMOVE_TODO:
        state.data = state.data.filter(
          (todo: TodoElement) => todo.id !== payload.id
        );
        break;
      case ActionTypes.TOGGLE_TODO:
        const targetTodo = todoStore
          .getState()
          .find((todo) => todo.id === payload.id);
        if (!targetTodo) throw Error("invalid todo id to toggle");
        targetTodo.state =
          targetTodo.state === TodoState.DONE ? TodoState.TODO : TodoState.DONE;
        break;
      default:
        break;
    }
  }
);

export default todoStore;
