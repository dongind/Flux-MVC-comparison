export const ACTION_TYPES = {
  ADD_TODO: "ADD_TODO",
  REMOVE_TODO: "REMOVE_TODO",
};

export type ActionTypes = (typeof ACTION_TYPES)[keyof typeof ACTION_TYPES];

export interface Action {
  type: ActionTypes;
  payload: Object;
}
