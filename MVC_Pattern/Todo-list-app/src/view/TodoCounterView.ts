import { TodoCounterData } from "../types/todo";

class TodoCounterView {
  todoCounterDisplay: HTMLDivElement;

  constructor() {
    const todoCounterDiv = document.querySelector<HTMLDivElement>("#todoCounter");
    if (!todoCounterDiv) throw Error("Not Proper todoCounterDiv id");

    this.todoCounterDisplay = document.createElement("div");
    this.todoCounterDisplay.id = "todoCounterDisplay";

    todoCounterDiv.appendChild(this.todoCounterDisplay);
  }

  displayTodoCounter({ total, todoState, doneState }: TodoCounterData) {
    const countTitleH3 = document.createElement("h3");
    countTitleH3.id = "countTitleH3";
    countTitleH3.innerText = "| Todo 리스트 정보";

    const totalCountP = document.createElement("p");
    totalCountP.innerText = `총 Todo 개수 : ${total}개`;

    const todoStateCountP = document.createElement("p");
    todoStateCountP.innerText = `미완료 Todo 개수 : ${todoState}개`;

    const doneStateCountP = document.createElement("p");
    doneStateCountP.innerText = `완료 Todo 개수 : ${doneState}개`;

    this.todoCounterDisplay.append(countTitleH3, totalCountP, todoStateCountP, doneStateCountP);
  }
}

export default TodoCounterView;
