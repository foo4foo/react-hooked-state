import { useContext } from 'react';
import StoreContext from '../store/storeContext';
import executeMiddlewares from '../utils/middlewares';

function useUpdateStore() {
  const { store, middlewares } = useContext(StoreContext);

  return newValue => {
    if (!newValue) {
      throw new Error('New value must be provided');
    }

    executeMiddlewares(middlewares)(store.value, newValue);

    store.next({
      ...store.value,
      ...newValue,
    });
  };
}

export default useUpdateStore;
