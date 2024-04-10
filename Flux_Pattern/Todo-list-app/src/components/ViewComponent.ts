import Store from "../stores/Store";

class ViewComponent<S> {
  private viewDiv: HTMLDivElement;
  private store: Store<S>;
  private content: (data: S) => HTMLElement[];

  constructor(
    viewDiv: HTMLDivElement | null,
    store: Store<S>,
    content: (data: S) => HTMLElement[]
  ) {
    if (!viewDiv) throw Error("invalid viewDiv");

    this.viewDiv = viewDiv;
    this.store = store;
    this.content = content;
    this.store.subscribe(this.render.bind(this));

    this.render();
  }

  render() {
    this.viewDiv.innerHTML = "";
    this.viewDiv.append(...this.content(this.store.getState()));
  }
}

export default ViewComponent;
