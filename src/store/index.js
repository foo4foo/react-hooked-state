import { BehaviorSubject } from 'rxjs';

export default function createStore(initialState = {}, middlewares = []) {
  return {
    store: new BehaviorSubject(initialState),
    middlewares,
  };
}
