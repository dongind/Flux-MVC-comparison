interface Store {
  dispatcher: Dispatcher;
  actionHandler: () => void;
}
