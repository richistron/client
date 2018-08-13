import Api from '../../../helpers/Api';
import ls from 'local-storage';
import {actions} from '../index';
import {getFormValues} from 'redux-form/immutable';
import { encode } from '../../../helpers/Crypto';

const getTenantThunk = () => (dispatch, getState) => new Promise((resolve, reject) => {
  dispatch(actions.loading(true));
  Api({
    method: 'GET',
    token: false,
    url: `/v1/tenants/${getFormValues('TenantSelect')(getState()).get('tenant')}`
  })
    .then(({body}) => {
      dispatch(actions.loading(false));
      const name = encode( body.name );
      const id = encode( body.id );
      const application = encode( body.application );
      ls('tenant_name', name);
      ls('tenant_id', id);
      ls('tenant_application', application);
      dispatch(actions.saveName({name, id, application}));
      resolve();
    })
    .catch(({statusCode}) => {
      dispatch(actions.loading(false));
      if (statusCode === 404) {
        dispatch(actions.setErrors({tenant: 'Empresa no encontrada'}));
        setTimeout(() => dispatch(actions.setErrors({})), 3000);
      }
      reject();
    })
});

export default getTenantThunk;
