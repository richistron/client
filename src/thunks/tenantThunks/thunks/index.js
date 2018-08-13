import getTenantThunk from './getTenantThunk';
import deleteTenantThunk from './deleteTenantThunk';

const thunks = {
  getTenant: getTenantThunk,
  deleteTenant: deleteTenantThunk,
};

export default thunks;
