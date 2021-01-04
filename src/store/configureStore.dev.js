import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from './reducers';

const configureStore = preloadedState => {
  const store = createStore(
    rootReducer(),
    preloadedState,
    window.__REDUX_DEVTOOLS_EXTENSION__
      ? compose(
          applyMiddleware(
            thunk,
            createLogger(),
          ),
          window.__REDUX_DEVTOOLS_EXTENSION__()
        )
      : applyMiddleware(
          thunk,
          createLogger(),
        )
  );

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./reducers', () => {
      store.replaceReducer(rootReducer);
    });
  }

  store.asyncReducers = {};
  window.injectAsyncReducer = function(name, asyncReducer) {
    store.asyncReducers[name] = asyncReducer;
    store.replaceReducer(rootReducer(store.asyncReducers));
  };
  window.reduxDispatch = store.dispatch;
  return store;
};

export default configureStore;
