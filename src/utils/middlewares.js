const executeMiddlewares = middlewares => (prevState, newState) => {
  if (Array.isArray(middlewares) && middlewares.length > 0) {
    let computedNewState = {
      ...newState
    };

    middlewares.forEach(middleware => {
      computedNewState = middleware(prevState, computedNewState) || {
        ...computedNewState
      };
    });
  }
};

export { executeMiddlewares };
