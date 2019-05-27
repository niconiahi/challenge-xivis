import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

// Reductors
import cart from 'store/cart'

export default (history) =>
  combineReducers({
    router: connectRouter(history),
    cart,
  })
