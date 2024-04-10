import dispatcher from "../dispatchers/dispatcher";
import { Action } from "../types/actions";

class Store<S> {
  private state: { data: S };
  private subscribers: Function[];
  private actionHandler: (action: Action, state: { data: S }) => void;

  constructor(
    state: S,
    actionHandler: (action: Action, state: { data: S }) => void
  ) {
    this.state = { data: state };
    this.subscribers = [];
    this.actionHandler = actionHandler;
    dispatcher.register(this.dispatchRegister.bind(this));
  }

  getState() {
    return this.state.data;
  }

  subscribe(callback: Function) {
    this.subscribers.push(callback);
    const id = this.subscribers.length - 1;
    return () => {
      this.subscribers = this.subscribers.filter((_, index) => index !== id);
    };
  }

  notify() {
    this.subscribers.forEach((subscriber) => {
      subscriber();
    });
  }

  dispatchRegister(action: Action) {
    this.actionHandler(action, this.state);
    this.notify();
  }
}

export default Store;
