import tenantSelector from '../../../selectors/tenantSelector';
import tenantThunks from '../../../thunks/tenantThunks';
import { connect } from 'react-redux';
import { isValid } from 'redux-form/immutable';
import Validator from '../../../helpers/Validator';

const required = Validator.get('required');
const min = Validator.get('min');

const mapProps = state => ({
  errors: tenantSelector(state).get('errors'),
  isLoading: tenantSelector(state).get('isLoading'),
  isValid: isValid('TenantSelect')(state)
});

const mapDispatchProps = dispatch => ({
  handleSubmit: () => dispatch(tenantThunks.getTenant()),
  validateForm: values => {
    if (required(values.get('tenant'))) {
      return { tenant: 'Este campo es obligatorio' };
    }

    if (min(4)(values.get('tenant'))) {
      return { tenant: 'La empresa debe tener un nombre mayor a 4 létras' };
    }
  }
});

export default Component =>
  connect(
    mapProps,
    mapDispatchProps
  )(Component);
