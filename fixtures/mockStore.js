import { createStore } from "../src";

export const initialState = {
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

export default createStore(initialState);
