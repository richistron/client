import tenantSelector from '../../../selectors/tenantSelector';
import tenantThunks from '../../../thunks/tenantThunks';
import {connect} from 'react-redux';

const mapProps = (state) => ({
  errors: tenantSelector(state).get('errors'),
});

const mapDispatchProps = (dispatch) => ({
  handleSubmit: () => dispatch(tenantThunks.getTenant()),
});

export default (Component) => connect(mapProps, mapDispatchProps)(Component);
