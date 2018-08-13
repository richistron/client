import ls from 'local-storage';
import {actions} from '../index';

const deleteTenantThunk = () => (dispatch) => new Promise((resolve) => {
  ls('tenant_name', null);
  ls('tenant_id', null);
  ls('tenant_application', null);
  dispatch(actions.saveName({id: null, name: null, application: null}));
  resolve();
});

export default deleteTenantThunk;
