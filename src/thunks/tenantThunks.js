import Api from '../helpers/Api';
import Crypto from '../helpers/Crypto';
import tenantActions from "./tenantActions";
import {getFormValues} from 'redux-form/immutable';
import ls from 'local-storage';

const tenantThunks = {
  getTenant: () => (dispatch, getState) => new Promise((resolve, reject) => {
    dispatch(tenantActions.loading(true));
    Api({
      method: 'GET',
      token: false,
      url: `/v1/tenants/${getFormValues('TenantSelect')(getState()).get('tenant')}`
    })
      .then(({body}) => {
        dispatch(tenantActions.loading(false));
        const name = Crypto.encrypt( body.name );
        const id = Crypto.encrypt( body.id );
        const application = Crypto.encrypt( body.application );
        ls('tenant_name', name);
        ls('tenant_id', id);
        ls('tenant_application', application);
        dispatch(tenantActions.saveName({name, id, application}));
        resolve();
      })
      .catch(({statusCode}) => {
        dispatch(tenantActions.loading(false));
        if (statusCode === 404) {
          dispatch(tenantActions.setErrors({tenant: 'Empresa no encontrada'}));
        }
        setTimeout(() => dispatch(tenantActions.setErrors({})), 3000);
        reject();
      })
  }),
};

export default tenantThunks;
