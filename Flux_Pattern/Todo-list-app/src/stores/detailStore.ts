import { TodoElement } from "../types/todo";
import { Action, ActionTypes } from "../types/actions";
import Store from "./Store";

const detailStore = new Store<TodoElement | null>(
  null,
  ({ type, payload }: Action, state: { data: TodoElement | null }) => {
    switch (type) {
      case ActionTypes.SELECT_TODO:
        console.log(payload);
        state.data = payload;
        console.log(state.data);
        break;
      case ActionTypes.REMOVE_TODO:
        // if (!data || data.id !== payload.id) break;
        console.log(state.data);
        state.data = null;
        console.log(state.data);
        break;
      default:
        break;
    }
  }
);

export default detailStore;
