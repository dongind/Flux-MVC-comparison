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
    const targetTodo = this.todos.find((todo: TodoElement) => todo.id === todoId);
    if (!targetTodo) throw Error("Invalid todo Id");
    targetTodo.state = targetTodo.state === "DONE" ? "TODO" : "DONE";
  }

  getTodoByID(todoId: number): TodoElement {
    const todo = this.todos.find((todo: TodoElement) => todo.id === todoId);
    if (!todo) throw Error("Invalid todo Id to find todo");
    return todo;
  }
}

export default TodoModel;
