import {createStore, applyMiddleware, compose} from 'redux'
import createSagaMiddleware, {END} from 'redux-saga';
import { createLogger } from 'redux-logger';
import rootReducer from '../reducers'

export default function configureStore(initialState) {
  const sagaMiddleware = createSagaMiddleware();

  let composeEnhancers;
  let middleware;

  if (process.env.NODE_ENV === 'development') {
      /* eslint-disable no-underscore-dangle */
      composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
      middleware = applyMiddleware(sagaMiddleware, createLogger());
  } else {
      composeEnhancers = compose;
      middleware = applyMiddleware(sagaMiddleware);
  }

  const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(middleware),
  );

  store.runSaga = sagaMiddleware.run;
  store.close = () => { return store.dispatch(END); };

  return store;
}