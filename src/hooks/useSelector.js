import { useState, useRef, useEffect, useContext } from 'react';
import StoreContext from '../store/storeContext';

const refEquality = (a, b) => a === b;

// performs shallow comparison if custom equalityFunction is not provided
function useSelector(selectorFunction, equalityFunction = refEquality) {
  const { store } = useContext(StoreContext);

  const latestSelectedState = useRef();

  const selectedState = selectorFunction(store.value);

  const [state, setState] = useState(selectedState);

  useEffect(() => {
    const subscription = store.subscribe(globalState => {
      const newSelectedState = selectorFunction(globalState);

      if (!equalityFunction(newSelectedState, latestSelectedState.current)) {
        setState(newSelectedState);
      }

      latestSelectedState.current = newSelectedState;
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [store, selectorFunction, selectedState, equalityFunction]);

  return state;
}

export default useSelector;
