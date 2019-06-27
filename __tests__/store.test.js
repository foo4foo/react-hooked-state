import { createStore } from "../src/store";

const initialState = {
  randomValue: "something",
  persons: [
    {
      id: 1,
      name: "John",
      lastName: "Doe"
    },
    {
      id: 2,
      name: "Jon",
      lastName: "Doe"
    }
  ]
};

let store = null;

describe("Store test", () => {
  beforeAll(() => {
    store = createStore(initialState).store;
  });

  it("creates store instance", () => {
    expect(store).not.toBe(undefined);
    expect(store.getValue()).toEqual(initialState);
  });
});
