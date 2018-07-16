import Api from '../helpers/Api';
import Crypto from '../helpers/Crypto';
import tenantActions from "./tenantActions";
import {getFormValues} from 'redux-form/immutable';
import ls from 'local-storage';

const tenantThunks = {
  getTenant: () => (dispatch, getState) => Api({
    method: 'GET',
    token: false,
    url: `/v1/tenants/${getFormValues('TenantSelect')(getState()).get('tenant')}`
  })
    .then(({body}) => {
      const name = Crypto.encrypt( body.name );
      const id = Crypto.encrypt( body.id );
      const application = Crypto.encrypt( body.application );
      ls('tenant_name', name);
      ls('tenant_id', id);
      ls('tenant_application', application);
      dispatch(tenantActions.saveName({name, id, application}));
    })
    .catch(({statusCode}) => {
      if (statusCode === 404) {
        dispatch(tenantActions.setErrors({tenant: 'Empresa no encontrada'}))
      }
    }),
};

export default tenantThunks;
