import { createStore, applyMiddleware, compose } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import thunk from 'redux-thunk'
import storageSession from 'redux-persist/lib/storage/session'
import promiseMiddleware from 'redux-promise-middleware'
import { createLogger } from 'redux-logger'
import { routerMiddleware } from 'connected-react-router'
import { createBrowserHistory } from 'history'

// Reducers
import rootReducer from 'store/rootReducer'

// Initializations
const initialState = {}
const history = createBrowserHistory()
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const logger = createLogger({
  collapsed: true,
})

// Persist
const persistConfig = {
  key: 'root',
  storage: storageSession,
}

const persistedReducer = persistReducer(persistConfig, rootReducer(history))

// Middlewares
const middlewares = [routerMiddleware(history), promiseMiddleware, thunk]

if (process.env.NODE_ENV === `development`) {
  middlewares.push(logger)
}

// Store Initialization
const store = createStore(
  persistedReducer,
  initialState,
  composeEnhancer(applyMiddleware(...middlewares))
)

const persistor = persistStore(store)

export { store, persistor, history }
