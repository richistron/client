export const tenantActionsTypes = {
  TENANT_SAVE: 'TENANT_SAVE',
  TENANT_SET_ERROR: 'TENANT_SET_ERROR',
  TENANT_LOADING: 'TENANT_LOADING',
};

const tenantActions = {
  loading: (isLoading) => ({
    type: tenantActionsTypes.TENANT_LOADING,
    isLoading,
  }),

  saveName: ({id, name, application}) => ({
    application,
    id,
    name,
    type: tenantActionsTypes.TENANT_SAVE,
  }),

  setErrors: (errors) => ({
    type: tenantActionsTypes.TENANT_SET_ERROR,
    errors,
  }),
};

export default tenantActions;
