import {connect} from 'react-redux';
import sessionThunks from '../../../thunks/sessionThunks';
import sessionSelector from '../../../selectors/sessionSelector';
import {getFormSyncErrors} from 'redux-form/immutable';
import {isValid} from 'redux-form/immutable';
import Validator from "../../../helpers/Validator";

const required = Validator.get('required');
const min = Validator.get('min');
const email = Validator.get('email');

export default (Component) => connect(
  (state) => ({
    errors: sessionSelector(state).get('errors'),
    isLoading: sessionSelector(state).get('isLoading'),
    syncErrors: getFormSyncErrors(state)('Login'),
    isValid: isValid('Login')(state),
  }),

  (dispatch) => ({
    handleSubmit: () => {
      dispatch( sessionThunks.doLoding() );
    },

    validateForm: (values) => {
      if (required(values.get('email'))) {
        return {email: required(values.get('email'))};
      }
      if (email(values.get('email'))) {
        return {email: email(values.get('email'))};
      }
      if (required(values.get('password'))) {
        return {password: required(values.get('password'))};
      }
      if (min(4)(values.get('password'))) {
        return {password: min(4)(values.get('password'))};
      }
      return null;
    }
  })
)(Component);
