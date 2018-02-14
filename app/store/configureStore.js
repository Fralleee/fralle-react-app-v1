import { createStore } from 'redux'
// import { applyMiddleware, compose, createStore } from 'redux'
// import createSagaMiddleware from 'redux-saga'

import rootReducer from './rootReducer'
// import rootSaga from './rootSaga'

// const composeEnhancers = typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose

// const sagaMiddleware = createSagaMiddleware()
// const middleWare = [sagaMiddleware]
// const finalCreateStore = composeEnhancers(applyMiddleware(...middleWare))(createStore)

export default function configureStore(initialState) {
  // const store = finalCreateStore(rootReducer, initialState)
  const store = createStore(rootReducer, initialState)
  // sagaMiddleware.run(rootSaga)
  return store
}
