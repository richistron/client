import { connect } from 'react-redux';
import { sessionThunks } from '../../../reducers/session';

export default Component =>
  connect(
    // state
    () => ({}),
    // dispatch
    dispatch => ({
      logout: () => dispatch(sessionThunks.logout())
    })
  )(Component);
