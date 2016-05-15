import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import { app } from './modules'
import * as reducers from './reducers';

const middleware = applyMiddleware(thunk);

export default (data = {}) => {
  const rootReducer = combineReducers({
    ...reducers,
    [app.NAME]: app.reducer
  }
  )

  return createStore(rootReducer, data, middleware)
}
