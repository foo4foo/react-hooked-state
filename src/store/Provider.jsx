import React from 'react';
import PropTypes from 'prop-types';
import StoreContext from './storeContext';

export default function Provider({ store, children }) {
  return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>;
}

Provider.propTypes = {
  store: PropTypes.shape({
    store: PropTypes.object,
    middlewares: PropTypes.arrayOf(PropTypes.func)
  }).isRequired,
  children: PropTypes.node.isRequired
};
