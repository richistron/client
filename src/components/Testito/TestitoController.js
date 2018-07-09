import {connect} from 'react-redux';

export default (Component) => connect(
  (state) => ({
    tenant_name: state.getIn(['tenant', 'name']),
  }),
  (dispatch) => ({
    handleClick: () => {
      dispatch({
        type: 'CHANGE_TENANT_NAME',
        name: 'richistron'
      });
    }
  })
)(Component);
