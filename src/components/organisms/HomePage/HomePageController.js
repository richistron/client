import { connect } from 'react-redux';
import { thunks } from '../../../thunks/sessionThunks';

export default Component =>
  connect(
    // state
    () => ({}),
    // dispatch
    dispatch => ({
      logout: () => dispatch(thunks.logout())
    })
  )(Component);
