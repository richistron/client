import { createStore, applyMiddleware} from 'redux';
import { combineReducers } from 'redux-immutable';
import thunk from 'redux-thunk';
import tenantReducer from './tenantReducer';
import sessionReducer from './sessionReducer';

const reducer = combineReducers({
  session: sessionReducer,
  tenant: tenantReducer,
});

const {NODE_ENV} = process.env;

let store = null;

if (NODE_ENV === 'development') {
  store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunk)
  );
}
else {
  store = createStore(
    reducer,
    applyMiddleware(thunk)
  );

}

export default store;
