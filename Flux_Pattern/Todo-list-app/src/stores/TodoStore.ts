import { TodoElement } from "../types/todo";
import Store from "./Store";

const todoStore = new Store<TodoElement[]>(
  [],
  ({ type, payload }: Action, state: { data: TodoElement[] }) => {
    switch (type) {
      case ActionTypes.ADD_TODO:
        state.data = [
          ...state.data,
          { id: state.data.length, content: payload as string, state: "TODO" },
        ];
        break;
      case ActionTypes.REMOVE_TODO:
        state.data = state.data.filter(
          (todo: TodoElement) => todo.id !== (payload as number)
        );
    }
  }
);

export default todoStore;
