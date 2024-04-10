import { Action } from "../types/actions";

const actionHandlers: Function[] = [];

const dispatcher: Dispatcher = Object.create({
  register: function (callback: Function): void {
    actionHandlers.push(callback);
  },
  dispatch: function (action: Action): void {
    actionHandlers.forEach((actionHandler: Function) => {
      actionHandler(action);
    });
  },
});

export default dispatcher;
