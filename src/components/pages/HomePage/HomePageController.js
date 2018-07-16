import isUserLogged from '../../../selectors/isUserLogged';
import {connect} from 'react-redux';

export default (Component) => connect(
  // state
  (state) => ({
    isUserLogged: isUserLogged(state),
  }),
  // dispatch
  () => ({})
)(Component);
