import {connect} from 'react-redux';
import sessionThunks from '../../../thunks/sessionThunks';
import {getFormValues} from 'redux-form/immutable';

export default (Component) => connect(
  (state) => ({
    formValues: getFormValues(state)('Login'),
  }),

  (dispatch) => ({
    handleSubmit: () => {
      dispatch(sessionThunks.doLoding());
    }
  })
)(Component);
