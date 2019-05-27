import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import { withRouter } from 'react-router'
import { store, persistor, history } from 'store/configureStore'
import { PersistGate } from 'redux-persist/integration/react'
import App from './App'
import * as serviceWorker from './serviceWorker'

const NonBlockApp = withRouter(App)

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ConnectedRouter history={history}>
        <NonBlockApp />
      </ConnectedRouter>
    </PersistGate>
  </Provider>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
