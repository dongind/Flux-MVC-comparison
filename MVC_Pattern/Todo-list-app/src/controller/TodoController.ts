import TodoCounterModel from "../model/TodoCounterModel";
import TodoModel from "../model/TodoModel";
import { TodoElement } from "../types/todo";
import TodoCounterView from "../view/TodoCounterView";
import TodoView from "../view/TodoView";

class TodoController {
  private todoModel: TodoModel;
  private todoView: TodoView;
  private todoCounterModel: TodoCounterModel;
  private todoCounterView: TodoCounterView;

  constructor(
    todoModel: TodoModel,
    todoView: TodoView,
    todoCounterModel: TodoCounterModel,
    todoCounterView: TodoCounterView
  ) {
    this.todoModel = todoModel;
    this.todoView = todoView;
    this.todoCounterModel = todoCounterModel;
    this.todoCounterView = todoCounterView;

    this.todoView.bindAddTodo(this.handleAddTodo.bind(this));
    this.render();

    document.addEventListener("deleteTodo", (({ detail: todo }: CustomEvent) => {
      this.handleDeleteTodo(todo);
    }) as EventListener);

    document.addEventListener("toggleTodoState", (({ detail: todo }: CustomEvent) => {
      this.handleToggleTodoState(todo);
    }) as EventListener);
  }

  render() {
    const todos = this.todoModel.getAllTodos();
    this.todoView.displayTodos(todos);
  }

  renderCounter() {
    const todoCounterData = this.todoCounterModel.getCounterData();
    this.todoCounterView.displayTodoCounter(todoCounterData);
  }

  handleAddTodo() {
    const newTodo = this.todoView.getNewTodo();
    if (newTodo.trim() === "") return;
    this.todoModel.addTodo(newTodo);
    this.todoView.todoInput.value = "";
    this.render();

    this.todoCounterModel.countNewTodo();
    this.renderCounter();
  }

  handleDeleteTodo(todo: TodoElement) {
    this.todoModel.deleteTodo(todo.id);
    this.render();

    this.todoCounterModel.countDeletedTodo(todo.state);
    this.renderCounter();
  }

  handleToggleTodoState(todo: TodoElement) {
    this.todoModel.toggleTodoState(todo.id);
    this.render();

    this.todoCounterModel.countToggledTodoState(todo.state);
    this.renderCounter();
  }
}

export default TodoController;
