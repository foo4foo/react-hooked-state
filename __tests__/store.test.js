import { initialState } from '../fixtures/mockStore';
import { createStore } from '../src';

let store = null;

describe('Store test', () => {
  beforeAll(() => {
    store = createStore(initialState);
  });

  it('creates store instance', () => {
    expect(store).not.toBe(undefined);
    expect(store.store.getValue()).toEqual(initialState);
  });

  it('contains persons list', () => {
    expect(store.store.getValue().persons).toEqual(initialState.persons);
  });
});
