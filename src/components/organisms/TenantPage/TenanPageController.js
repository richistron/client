import tenantSelector from '../../../selectors/tenantSelector';
import { thunks } from '../../../thunks/tenantThunks';
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
  handleSubmit: () => dispatch(thunks.getTenant()),
  validateForm: values => {
    if (required(values.get('tenant'))) {
      return { tenant: 'Este campo es obligatorio' };
    }

    if (min(4)(values.get('tenant'))) {
      return { tenant: 'Nombre debe ser mayor a 4 létras' };
    }
  }
});

export default Component =>
  connect(
    mapProps,
    mapDispatchProps
  )(Component);
