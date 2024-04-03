import TodoModel from "../model/TodoModel";
import TodoView from "../view/TodoView";

class TodoController {
  private todoModel: TodoModel;
  private todoView: TodoView;

  constructor(todoModel: TodoModel, todoView: TodoView) {
    this.todoModel = todoModel;
    this.todoView = todoView;

    this.todoView.bindAddTodo(this.handleAddTodo.bind(this));
    this.render();

    document.addEventListener("deleteTodo", (({ detail: todoId }: CustomEvent) => {
      this.handleDeleteTodo(todoId);
    }) as EventListener);

    document.addEventListener("toggleTodoState", (({ detail: todoId }: CustomEvent) => {
      this.handleToggleTodoState(todoId);
    }) as EventListener);
  }

  render() {
    const todos = this.todoModel.getAllTodos();
    this.todoView.displayTodos(todos);
  }

  handleAddTodo() {
    const newTodo = this.todoView.getNewTodo();
    if (newTodo.trim() === "") return;
    this.todoModel.addTodo(newTodo);
    this.render();
    this.todoView.todoInput.value = "";
  }

  handleDeleteTodo(todoId: number) {
    this.todoModel.deleteTodo(todoId);
    this.render();
  }

  handleToggleTodoState(todoId: number) {
    this.todoModel.toggleTodoState(todoId);
    this.render();
  }
}

export default TodoController;
