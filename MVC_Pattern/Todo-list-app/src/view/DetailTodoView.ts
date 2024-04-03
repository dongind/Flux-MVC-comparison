import { TodoElement } from "../types/todo";

class DetailTodoView {
  detailTodoDisplay: HTMLDivElement;

  constructor() {
    const detailTodoDiv = document.querySelector<HTMLDivElement>("#detailTodo");
    if (!detailTodoDiv) throw Error("Not proper DetailTodoDiv Id");

    const detailTodoTitle = document.createElement("h3");
    detailTodoTitle.id = "detailTodoTitle";
    detailTodoTitle.innerText = "| Todo 상세 항목";

    this.detailTodoDisplay = document.createElement("div");
    this.detailTodoDisplay.id = "detailTodoDisplay";

    detailTodoDiv.append(detailTodoTitle, this.detailTodoDisplay);
  }

  displayDetailTodo(detailTodo: TodoElement | null) {
    this.detailTodoDisplay.innerHTML = "";

    if (!detailTodo) {
      const noDetailTodoP = document.createElement("p");
      noDetailTodoP.innerText = "todo를 선택해주세요";
      this.detailTodoDisplay.append(noDetailTodoP);
      return;
    }
    const { id, content, state } = detailTodo;

    const detailTodoIDP = document.createElement("p");
    detailTodoIDP.classList.add("detailTodoP");
    detailTodoIDP.innerText = `Todo ID : ${id}`;

    const detailTodoContentP = document.createElement("p");
    detailTodoContentP.classList.add("detailTodoP");
    detailTodoContentP.innerText = `Todo 내용 : ${content}`;

    const detailTodoStateP = document.createElement("p");
    detailTodoStateP.classList.add("detailTodoP");
    detailTodoStateP.innerText = `Todo 상태 : ${state}`;

    const todoDeleteButton = document.createElement("button");
    todoDeleteButton.innerText = "delete";
    todoDeleteButton.addEventListener("click", () => {
      this.handleDeleteButton(detailTodo);
    });

    const todoStateToggleButton = document.createElement("button");
    todoStateToggleButton.innerText = state;
    todoStateToggleButton.addEventListener("click", () => {
      this.handleToggleStateButton(detailTodo);
    });

    this.detailTodoDisplay.append(
      detailTodoIDP,
      detailTodoContentP,
      detailTodoStateP,
      todoDeleteButton,
      todoStateToggleButton
    );
  }

  handleDeleteButton(detailTodo: TodoElement) {
    const deleteEvent = new CustomEvent("deleteTodo", { detail: detailTodo });
    document.dispatchEvent(deleteEvent);
  }

  handleToggleStateButton(todo: TodoElement) {
    const toggleEvent = new CustomEvent("toggleTodoState", { detail: todo });
    document.dispatchEvent(toggleEvent);
  }
}

export default DetailTodoView;
