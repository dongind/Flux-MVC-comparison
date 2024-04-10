import dispatcher from "../dispatchers/dispatcher";

class Store {
  private state: Object;
  private subscribers: Function[];
  private actionHandler: (action: Action) => void;

  constructor(state: Object, actionHandler: (action: Action) => void) {
    this.state = state;
    this.subscribers = [];
    this.actionHandler = actionHandler;
    dispatcher.register(this.dispatchRegister.bind(this));
  }

  getState() {
    return this.state;
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
    this.actionHandler(action);
    this.notify();
  }
}

export default Store;
