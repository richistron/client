import { actionTypes } from './index';

const actions = {
  loading: (isLoading) => ({
    type: actionTypes.TENANT_LOADING,
    isLoading,
  }),

  saveName: ({id, name, application}) => ({
    application,
    id,
    name,
    type: actionTypes.TENANT_SAVE,
  }),

  setErrors: (errors) => ({
    type: actionTypes.TENANT_SET_ERROR,
    errors,
  }),
};

export default actions;
