import {connect} from 'react-redux';
import sessionThunks from '../../../thunks/sessionThunks';
import sessionSelector from '../../../selectors/sessionSelector';
import {getFormSyncErrors} from 'redux-form/immutable';

export default (Component) => connect(
  (state) => ({
    errors: sessionSelector(state).get('errors'),
    syncErrors: getFormSyncErrors(state)('Login'),
  }),

  (dispatch) => ({
    handleSubmit: () => {
      dispatch( sessionThunks.doLoding() );
    },
  })
)(Component);
