import { ACTION_TYPES, Action } from "../types/actions";
import { TodoCounter } from "../types/todo";
import Store from "./Store";

const counterStore = new Store<TodoCounter>(
  { total: 0, todoState: 0, doneState: 0 },
  ({ type, payload }: Action, { data }: { data: TodoCounter }) => {
    switch (type) {
      case ACTION_TYPES.ADD_TODO:
        data.total += 1;
        data.todoState += 1;
        break;
      case ACTION_TYPES.REMOVE_TODO:
        data.total -= 1;
        if (payload === TODO_STATE.DONE) {
          data.todoState -= 1;
        } else {
          data.doneState -= 1;
        }
        break;
    }
  }
);

export default counterStore;
