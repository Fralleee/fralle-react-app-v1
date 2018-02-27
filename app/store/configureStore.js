import { applyMiddleware, compose, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'

import rootReducer from 'store/rootReducer'
import rootSaga from 'store/rootSaga'

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose

const sagaMiddleware = createSagaMiddleware()
const middleWare = [sagaMiddleware]
const finalCreateStore = composeEnhancers(applyMiddleware(...middleWare))(createStore)

export default function configureStore(initialState) {
  const store = finalCreateStore(rootReducer, initialState)
  sagaMiddleware.run(rootSaga)
  return store
}
