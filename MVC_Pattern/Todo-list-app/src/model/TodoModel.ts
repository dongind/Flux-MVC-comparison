import { TodoElement } from "../types/todo";

class TodoModel {
  todos: TodoElement[];
  todoId: number;

  constructor() {
    this.todos = [];
    this.todoId = 0;
  }

  getAllTodos(): TodoElement[] {
    return this.todos;
  }

  addTodo(todoText: string): void {
    this.todos = [...this.todos, { id: this.todoId, content: todoText, state: "TODO" }];
    this.todoId += 1;
  }

  deleteTodo(deleteId: number): void {
    this.todos = this.todos.filter(({ id }: TodoElement) => id !== deleteId);
  }

  toggleTodoState(todoId: number): void {
    // this.todos[todoId].state = this.todos[todoId].state === "DONE" ? "TODO" : "DONE";
    const targetTodo = this.todos.find((todo: TodoElement) => todo.id === todoId);
    if (!targetTodo) throw Error("Invalid todo Id");
    targetTodo.state = targetTodo.state === "DONE" ? "TODO" : "DONE";
  }
}

export default TodoModel;
