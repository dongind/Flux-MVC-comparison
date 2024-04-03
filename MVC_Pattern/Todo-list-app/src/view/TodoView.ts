// import { TodoElement } from "../types/todo";

import {
  TodoDeleteButtonObject,
  TodoElement,
  TodoElementObject,
  TodoToggleStateButtonObject,
} from "../types/todo";

class TodoView {
  todoDiv: HTMLDivElement | null;
  todoDisplay: HTMLUListElement;
  todoInput: HTMLInputElement;
  todoAddButton: HTMLButtonElement;
  todoDeleteButtonList: TodoDeleteButtonObject[] = [];
  todoToggleStateButtonList: TodoToggleStateButtonObject[] = [];
  todoElementList: TodoElementObject[] = [];

  constructor() {
    this.todoDiv = document.querySelector<HTMLDivElement>("#todo");
    if (!this.todoDiv) throw Error("Not Proper todoDiv id");

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
      todoElement.id = todo.id.toString();

      const todoLi = document.createElement("li");
      todoLi.id = todo.id.toString();
      todoLi.classList.add("todoLi");
      todoLi.innerText = todo.content;

      const todoStateToggleButton = document.createElement("button");
      todoStateToggleButton.id = todo.id.toString();
      todoStateToggleButton.innerText = todo.state;
      this.todoToggleStateButtonList = [
        ...this.todoToggleStateButtonList,
        { id: todo.id, toggleButton: todoStateToggleButton },
      ];

      const todoDeleteButton = document.createElement("button");
      todoDeleteButton.id = todo.id.toString();
      todoDeleteButton.innerText = "delete";
      this.todoDeleteButtonList = [
        ...this.todoDeleteButtonList,
        { id: todo.id, deleteButton: todoDeleteButton },
      ];

      const todoButtonWrapper = document.createElement("div");
      todoButtonWrapper.classList.add("todoButtonWrapper");
      todoButtonWrapper.append(todoStateToggleButton, todoDeleteButton);

      todoElement.append(todoLi, todoButtonWrapper);

      this.todoElementList = [...this.todoElementList, { id: todo.id, todoElement: todoElement }];

      this.todoDisplay.appendChild(todoElement);
    });
  }

  getNewTodo() {
    return this.todoInput.value;
  }

  bindAddTodo(handler: (this: HTMLButtonElement, event: MouseEvent) => any) {
    this.todoAddButton.addEventListener("click", handler);
  }

  bindDeleteTodo(handler: (this: HTMLButtonElement, event: MouseEvent) => any) {
    this.todoDeleteButtonList.forEach(({ deleteButton }: TodoDeleteButtonObject) => {
      deleteButton.addEventListener("click", handler);
    });
  }

  bindToggleTodoState(handler: (this: HTMLButtonElement, event: MouseEvent) => any) {
    this.todoToggleStateButtonList.forEach(({ toggleButton }: TodoToggleStateButtonObject) => {
      toggleButton.addEventListener("click", handler);
    });
  }

  bindClickTodoElement(handler: (this: HTMLDivElement, event: MouseEvent) => any) {
    this.todoElementList.forEach(({ todoElement }: TodoElementObject) => {
      todoElement.addEventListener("click", handler);
    });
  }
}

export default TodoView;
