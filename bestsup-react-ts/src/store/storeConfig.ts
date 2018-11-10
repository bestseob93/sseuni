import { createStore, applyMiddleware, compose, StoreEnhancer } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { fork, all } from 'redux-saga/effects';
import * as Immutable from 'immutable';
import installDevTools from 'immutable-devtools';

import ducks from 'ducks';
import sagas from 'sagas';

function* rootSaga (allSagas: any) {
  yield all([
    fork(allSagas),
  ]);
}

const isDev = process.env.NODE_ENV === 'development';
// Make our store print nicely in the console
if (isDev) {
  installDevTools(Immutable);
}

const enhancers: any[] = [];

export default function configureStore(preloadedState: any) {
  const windowIfDefined = typeof window === 'undefined' ? null : window as any
  const devToolsExtension = windowIfDefined && windowIfDefined.devToolsExtension as () => StoreEnhancer

  if(typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension());
  }

  const sagaMiddleware = createSagaMiddleware();

  const enhancer = compose(
    applyMiddleware(sagaMiddleware),
    ...enhancers,
  );

  const store = createStore(
    ducks,
    preloadedState,
    enhancer,
  );

  sagaMiddleware.run(rootSaga, sagas);

  return store;
}
