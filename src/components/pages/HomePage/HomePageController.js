import isUserLogged from '../../../selectors/isUserLogged';
import tenantSelector from '../../../selectors/tenantSelector';
import {connect} from 'react-redux';

export default (Component) => connect(
  // state
  (state) => ({
    isUserLogged: isUserLogged(state),
    tenant: tenantSelector(state).get('name'),
  }),
  // dispatch
  () => ({})
)(Component);
