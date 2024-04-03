// import { TodoElement } from "../types/todo";

import { TodoElement } from "../types/todo";

class TodoView {
  todoDiv: HTMLDivElement | null;
  todoDisplay: HTMLUListElement;
  todoInput: HTMLInputElement;
  todoAddButton: HTMLButtonElement;

  constructor() {
    this.todoDiv = document.querySelector<HTMLDivElement>("#todo");
    if (!this.todoDiv) throw Error("Not Proper Div id");

    this.todoDisplay = document.createElement("ul");
    this.todoDisplay.id = "todoDisplay";

    this.todoInput = document.createElement("input");
    this.todoInput.id = "todoInput";

    this.todoAddButton = document.createElement("button");
    this.todoAddButton.id = "todoAddButton";
    this.todoAddButton.innerText = "add todo";

    this.todoDiv.append(this.todoInput, this.todoAddButton, this.todoDisplay);
  }

  displayTodos(todos: TodoElement[]) {
    this.todoDisplay.innerHTML = "";
    todos.forEach((todo: TodoElement) => {
      const todoElement = document.createElement("div");
      todoElement.classList.add("todoElement");

      const todoLi = document.createElement("li");
      todoLi.id = todo.id.toString();
      todoLi.classList.add("todoLi");
      todoLi.innerText = todo.content;

      const todoDeleteButton = document.createElement("button");
      todoDeleteButton.id = todo.id.toString();
      todoDeleteButton.innerText = "delete";
      todoDeleteButton.addEventListener("click", () => {
        this.handleDeleteButton(todo.id);
      });

      todoElement.append(todoLi, todoDeleteButton);
      this.todoDisplay.appendChild(todoElement);
    });
  }

  getNewTodo() {
    return this.todoInput.value;
  }

  bindAddTodo(handler: (this: HTMLButtonElement, event: MouseEvent) => any) {
    this.todoAddButton.addEventListener("click", handler);
  }

  handleDeleteButton(todoId: number) {
    const event = new CustomEvent("deleteTodo", { detail: todoId });
    document.dispatchEvent(event);
  }
}

export default TodoView;
