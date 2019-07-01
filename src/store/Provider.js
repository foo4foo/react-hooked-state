import React from "react";
import { StoreContext } from "./storeContext";

function Provider({ store, children }) {
  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
}

export { Provider };
