import { ACTIONS } from "../actions/\bactions";
import dispatcher from "../dispatchers/dispatcher";
import todoStore from "../stores/todoStore";

import { TodoElement } from "../types/todo";
import ViewComponent from "./ViewComponent";

const content = (todos: TodoElement[]) => {
  const todoDisplay = document.createElement("ul");
  todoDisplay.id = "todoDisplay";

  const todoInput = document.createElement("input");
  todoInput.id = "todoInput";

  const todoAddButton = document.createElement("button");
  todoAddButton.id = "todoAddButton";
  todoAddButton.innerText = "add todo";

  todoAddButton.addEventListener("click", () => {
    if (!todoInput.value.trim()) return;
    dispatcher.dispatch(ACTIONS.addTodo(todoInput.value.trim()));
    todoInput.value = "";
  });

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
    todoStateToggleButton.addEventListener("click", (event: MouseEvent) => {
      const currentTarget = event.currentTarget as HTMLButtonElement;
      dispatcher.dispatch(
        ACTIONS.toggleTodo(Number(currentTarget.id), todo.state)
      );
    });

    const todoDeleteButton = document.createElement("button");
    todoDeleteButton.id = todo.id.toString();
    todoDeleteButton.innerText = "delete";
    todoDeleteButton.addEventListener("click", (event: MouseEvent) => {
      const currentTarget = event.currentTarget as HTMLButtonElement;
      dispatcher.dispatch(
        ACTIONS.removeTodo(Number(currentTarget.id), todo.state)
      );
    });

    const todoButtonWrapper = document.createElement("div");
    todoButtonWrapper.classList.add("todoButtonWrapper");
    todoButtonWrapper.append(todoStateToggleButton, todoDeleteButton);

    todoElement.append(todoLi, todoButtonWrapper);
    todoElement.addEventListener("click", (event: MouseEvent) => {
      if (event.target instanceof HTMLButtonElement) return;
      dispatcher.dispatch(ACTIONS.selectTodo(todo));
    });
    todoDisplay.appendChild(todoElement);
  });

  return [todoInput, todoAddButton, todoDisplay];
};

const createTodoComponents = (todoDiv: HTMLDivElement | null) => {
  return new ViewComponent<TodoElement[]>(todoDiv, todoStore, content);
};

export default createTodoComponents;
