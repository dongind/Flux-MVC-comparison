import { TodoElement } from "../types/todo";
import Store from "./Store";
import { ACTION_TYPES, Action } from "../types/actions";

const todoStore = new Store<TodoElement[]>(
  [],
  ({ type, payload }: Action, state: { data: TodoElement[] }) => {
    switch (type) {
      case ACTION_TYPES.ADD_TODO:
        state.data = [
          ...state.data,
          { id: state.data.length, content: payload as string, state: "TODO" },
        ];
        break;
      case ACTION_TYPES.REMOVE_TODO:
        state.data = state.data.filter(
          (todo: TodoElement) => todo.id !== (payload as number)
        );
    }
  }
);

export default todoStore;
