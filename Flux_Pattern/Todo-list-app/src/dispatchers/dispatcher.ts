class Dispatcher {
  private callbacks: Function[];

  constructor() {
    this.callbacks = [];
  }

  register(callback: Function) {
    this.callbacks.push(callback);
    return this.callbacks.length - 1;
  }

  dispatch(payload: any) {
    let resolves: ((value: any) => void)[] = [];
    let rejects: ((reason?: any) => void)[] = [];

    let promises = this.callbacks.map((_, index) => {
      return new Promise((resolve, reject) => {
        resolves[index] = resolve;
        rejects[index] = reject;
      });
    });

    this.callbacks.forEach((callback, index) => {
      Promise.resolve(callback(payload)).then(
        () => {
          resolves[index](payload);
        },
        () => {
          rejects[index](new Error("Dispatcher callback unsuccessful"));
        }
      );
    });
    promises = [];
  }
}

export default Dispatcher;
