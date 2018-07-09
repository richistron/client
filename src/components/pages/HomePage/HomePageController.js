import {connect} from 'react-redux';
import sessionThunks from '../../../thunks/sessionThunks';

const mapProps = () => ({});

const mapDispatch = (dispatch) => ({
  validateSession: () => dispatch(sessionThunks.validateSession()),
});

export default (Component) => connect(mapProps, mapDispatch)(Component);
