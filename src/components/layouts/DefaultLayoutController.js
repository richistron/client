import {connect} from 'react-redux';
import isUserLogged from '../../selectors/isUserLogged';
import tenantSelector from '../../selectors/tenantSelector';

const props = (state) => ({
  isUserLogged: isUserLogged(state),
  tenant: tenantSelector(state).get('name'),
});

const methods = () => ({});

export default (Component) => connect(props, methods)(Component);
