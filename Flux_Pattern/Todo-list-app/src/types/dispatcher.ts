import { Action } from "./actions";

export interface Dispatcher {
  register: (callback: Function) => void;
  dispatch: (action: Action) => void;
}
