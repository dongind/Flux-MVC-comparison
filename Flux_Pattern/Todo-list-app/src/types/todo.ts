// export type TodoState = "TODO" | "DONE";

export enum TodoState {
  TODO = "TODO",
  DONE = "DONE",
}

export interface TodoElement {
  id: number;
  content: string;
  state: TodoState;
}

export interface TodoCounter {
  total: number;
  todoState: number;
  doneState: number;
}
