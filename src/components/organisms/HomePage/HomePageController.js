import { connect } from 'react-redux';
import sessionThunks from '../../../thunks/sessionThunks';

export default Component =>
  connect(
    // state
    () => ({}),
    // dispatch
    dispatch => ({
      logout: () => dispatch(sessionThunks.logout())
    })
  )(Component);
