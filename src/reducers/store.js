import sessionReducer from './session/sessionReducer';
import tenantReducer from './tenantReducer';
import thunk from 'redux-thunk';
import { combineReducers } from 'redux-immutable';
import { createStore, applyMiddleware} from 'redux';
import { reducer as formReducer } from 'redux-form/immutable';

const reducer = combineReducers({
  form: formReducer,
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
