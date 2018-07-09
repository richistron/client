import { createStore, combineReducers, applyMiddleware} from 'redux';
import tenantReducer from './tenantReducer';
import thunk from 'redux-thunk';

const reducer = combineReducers({
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
