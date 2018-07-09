import { createStore, combineReducers} from 'redux';
import tenant_reducer from './tenant_reducer';

const reducer = combineReducers({
  tenant: tenant_reducer,
});

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;
