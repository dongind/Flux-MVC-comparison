import counterStore from "../stores/counterStore";
import { TodoCounter } from "../types/todo";
import ViewComponent from "./ViewComponent";

const content = ({ total, todoState, doneState }: TodoCounter) => {
  const todoCounterDisplay = document.createElement("div");
  todoCounterDisplay.id = "todoCounterDisplay";

  const countTitleH3 = document.createElement("h3");
  countTitleH3.id = "countTitleH3";
  countTitleH3.innerText = "| Todo 리스트 정보";

  const totalCountP = document.createElement("p");
  totalCountP.innerText = `총 Todo 개수 : ${total}개`;

  const todoStateCountP = document.createElement("p");
  todoStateCountP.innerText = `미완료 Todo 개수 : ${todoState}개`;

  const doneStateCountP = document.createElement("p");
  doneStateCountP.innerText = `완료 Todo 개수 : ${doneState}개`;

  todoCounterDisplay.append(
    countTitleH3,
    totalCountP,
    todoStateCountP,
    doneStateCountP
  );

  return [todoCounterDisplay];
};

const createCounterComponent = (counterDiv: HTMLDivElement | null) => {
  return new ViewComponent(counterDiv, counterStore, content);
};

export default createCounterComponent;
