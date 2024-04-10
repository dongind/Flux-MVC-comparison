import { TODO_STATE } from "../constants/todo";
import { ActionTypes, Action } from "../types/actions";
import { TodoCounter } from "../types/todo";
import Store from "./Store";

const counterStore = new Store<TodoCounter>(
  { total: 0, todoState: 0, doneState: 0 },
  ({ type, payload }: Action, { data }: { data: TodoCounter }) => {
    switch (type) {
      case ActionTypes.ADD_TODO:
        data.total += 1;
        data.todoState += 1;
        break;
      case ActionTypes.REMOVE_TODO:
        data.total -= 1;
        if (payload.state === TODO_STATE.DONE) {
          data.doneState -= 1;
        } else {
          data.todoState -= 1;
        }
        break;
    }
  }
);

export default counterStore;
