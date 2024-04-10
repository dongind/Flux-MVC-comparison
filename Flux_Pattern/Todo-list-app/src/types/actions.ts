enum ActionTypes {
  ADD_TODO = "ADD_TODO",
  REMOVE_TODO = "REMOVE_TODO",
}

interface Action {
  type: ActionTypes;
  payload: Object;
}
