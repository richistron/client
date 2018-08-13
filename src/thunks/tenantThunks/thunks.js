import Api from '../../helpers/Api';
import Crypto from '../../helpers/Crypto';
import { actions } from './index';
import {getFormValues} from 'redux-form/immutable';
import ls from 'local-storage';

const thunks = {
  getTenant: () => (dispatch, getState) => new Promise((resolve, reject) => {
    dispatch(actions.loading(true));
    Api({
      method: 'GET',
      token: false,
      url: `/v1/tenants/${getFormValues('TenantSelect')(getState()).get('tenant')}`
    })
      .then(({body}) => {
        dispatch(actions.loading(false));
        const name = Crypto.encrypt( body.name );
        const id = Crypto.encrypt( body.id );
        const application = Crypto.encrypt( body.application );
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
  }),

  deleteTenant: () => (dispatch) => new Promise((resolve) => {
    ls('tenant_name', null);
    ls('tenant_id', null);
    ls('tenant_application', null);
    dispatch(actions.saveName({id: null, name: null, application: null}))
    resolve();
  }),
};

export default thunks;
