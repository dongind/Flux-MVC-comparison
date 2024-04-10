export const addTodo = (text: string) => ({
  type: ActionTypes.ADD_TODO,
  payload: { text },
});

export const removeTodo = (id: number) => ({
  type: ActionTypes.REMOVE_TODO,
  payload: { id },
});
