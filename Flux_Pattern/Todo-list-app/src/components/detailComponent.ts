import detailStore from "../stores/detailStore";
import { TodoElement } from "../types/todo";
import ViewComponent from "./ViewComponent";

const content = (todo: TodoElement | null) => {
  const detailTodoTitle = document.createElement("h3");
  detailTodoTitle.id = "detailTodoTitle";
  detailTodoTitle.innerText = "| Todo 상세 항목";

  const detailTodoDisplay = document.createElement("div");
  detailTodoDisplay.id = "detailTodoDisplay";

  if (!todo) {
    const noDetailTodoP = document.createElement("p");
    noDetailTodoP.innerText = "todo를 선택해주세요";
    detailTodoDisplay.append(noDetailTodoP);
    return [detailTodoTitle, detailTodoDisplay];
  }

  const todoDeleteButton = document.createElement("button");
  todoDeleteButton.innerText = "delete";

  const todoStateToggleButton = document.createElement("button");
  const { id, content, state } = todo;

  const detailTodoIDP = document.createElement("p");
  detailTodoIDP.classList.add("detailTodoP");
  detailTodoIDP.innerText = `Todo ID : ${id}`;

  const detailTodoContentP = document.createElement("p");
  detailTodoContentP.classList.add("detailTodoP");
  detailTodoContentP.innerText = `Todo 내용 : ${content}`;

  const detailTodoStateP = document.createElement("p");
  detailTodoStateP.classList.add("detailTodoP");
  detailTodoStateP.innerText = `Todo 상태 : ${state}`;
  todoStateToggleButton.innerText = state;

  detailTodoDisplay.append(
    detailTodoIDP,
    detailTodoContentP,
    detailTodoStateP,
    todoStateToggleButton,
    todoDeleteButton
  );

  return [detailTodoTitle, detailTodoDisplay];
};

const createDetailComponent = (detailDiv: HTMLDivElement | null) => {
  return new ViewComponent(detailDiv, detailStore, content);
};

export default createDetailComponent;
