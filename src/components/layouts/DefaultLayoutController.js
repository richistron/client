import { connect } from 'react-redux';
import isUserLogged from '../../selectors/isUserLogged';
import tenantSelector from '../../selectors/tenantSelector';
import { sessionThunks } from '../../reducers/session';
import sessionSelector from '../../selectors/sessionSelector';

const props = state => ({
  isUserLogged: isUserLogged(state),
  tenant: tenantSelector(state).get('name'),
  isSessionLoading: sessionSelector(state).get('loading'),
  email: sessionSelector(state).get('email')
});

const methods = dispatch => ({
  validateToken: () => dispatch(sessionThunks.validateToken())
});

export default Component =>
  connect(
    props,
    methods
  )(Component);
