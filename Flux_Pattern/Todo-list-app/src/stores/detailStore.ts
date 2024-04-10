import { TodoElement } from "../types/todo";
import { Action, ActionTypes } from "../types/actions";
import Store from "./Store";

const detailStore = new Store<TodoElement | null>(
  null,
  ({ type, payload }: Action, { data }: { data: TodoElement | null }) => {
    switch (type) {
      case ActionTypes.SELECT_TODO:
        data = payload;
        break;
      case ActionTypes.REMOVE_TODO:
        if (!data || data.id !== payload.id) break;
        data = null;
        break;
      default:
        break;
    }
  }
);

export default detailStore;
