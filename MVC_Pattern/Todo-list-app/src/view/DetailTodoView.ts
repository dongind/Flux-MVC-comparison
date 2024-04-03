import { TodoElement } from "../types/todo";

class DetailTodoView {
  detailTodoDisplay: HTMLDivElement;
  todoDeleteButton: HTMLButtonElement;
  todoStateToggleButton: HTMLButtonElement;

  constructor() {
    const detailTodoDiv = document.querySelector<HTMLDivElement>("#detailTodo");
    if (!detailTodoDiv) throw Error("Not proper DetailTodoDiv Id");

    const detailTodoTitle = document.createElement("h3");
    detailTodoTitle.id = "detailTodoTitle";
    detailTodoTitle.innerText = "| Todo 상세 항목";

    this.detailTodoDisplay = document.createElement("div");
    this.detailTodoDisplay.id = "detailTodoDisplay";

    this.todoDeleteButton = document.createElement("button");
    this.todoDeleteButton.innerText = "delete";
    this.todoStateToggleButton = document.createElement("button");

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
    this.todoStateToggleButton.innerText = state;

    this.detailTodoDisplay.append(
      detailTodoIDP,
      detailTodoContentP,
      detailTodoStateP,
      this.todoDeleteButton,
      this.todoStateToggleButton
    );
  }

  bindTodoDeleteButton(handler: (this: HTMLButtonElement, event: MouseEvent) => any) {
    this.todoDeleteButton.addEventListener("click", handler);
  }

  bindTodoStateToggleButton(handler: (this: HTMLButtonElement, event: MouseEvent) => any) {
    this.todoStateToggleButton.addEventListener("click", handler);
  }
}

export default DetailTodoView;
