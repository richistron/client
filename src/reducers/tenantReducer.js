
const INITIAL_STATE = {
  name: 'yolo',
};

const tenantReducer = (state, action) => {
  if (!state) {
    return INITIAL_STATE;
  }

  return state;
};

export default tenantReducer;

