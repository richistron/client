import {connect} from 'react-redux';
import isUserLogged from '../../../selectors/isUserLogged';
import tenantSelector from '../../../selectors/tenantSelector';
import sessionThunks from '../../../thunks/sessionThunks';
import sessionSelector from '../../../selectors/sessionSelector';
import {getFormSyncErrors} from 'redux-form/immutable';

export default (Component) => connect(
  (state) => ({
    isUserLogged: isUserLogged(state),
    tenant: tenantSelector(state).get('name'),
    errors: sessionSelector(state).get('errors'),
    syncErrors: getFormSyncErrors(state)('Login'),
  }),

  (dispatch) => ({
    handleSubmit: () => {
      dispatch( sessionThunks.doLoding() );
    },
  })
)(Component);
