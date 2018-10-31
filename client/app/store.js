import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import mainReducer from './mainReducer';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import createHistory from 'history/createBrowserHistory'
import rootReducer from './mainReducer'

export const history = createHistory();

const initialState = {};
const enhancers = [];
const middleware = [
    thunk,
    routerMiddleware(history)
]

const composedEnhancers = compose(
    applyMiddleware(...middleware),
    ...enhancers
  )

  const store = createStore(
    connectRouter(history)(rootReducer),
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    composedEnhancers
  )
export default store;
