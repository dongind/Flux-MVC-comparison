enum ActionTypes {
  ADD_TODO = "ADD_TODO",
  REMOVE_TODO = "REMOVE_TODO",
}

interface Action {
  action: ActionTypes;
  payload: Object;
}

interface Dispatcher {
  register: (callback: Function) => void;
  dispatch: (action: Action) => void;
}
