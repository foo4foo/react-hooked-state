import { BehaviorSubject } from "rxjs";

function createStore(initialState = {}, middlewares = []) {
  return {
    store: new BehaviorSubject(initialState),
    middlewares
  };
}

export { createStore };
