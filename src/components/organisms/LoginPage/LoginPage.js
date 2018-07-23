import DefaultLayout from '../../layouts/DefaultLayout';
import PropTypes from 'prop-types';
import React from 'react';
import { Divider } from 'semantic-ui-react';
import ValidatedInput from '../../atoms/ValidatedInput';
import ValidatedForm from '../../atoms/ValidatedForm';
import Submit from '../../atoms/Submit';

class LoginPage extends React.PureComponent {
  onHandleSubmit = e => {
    e.preventDefault();
    this.props.handleSubmit();
  };

  handleClick = e => {
    e.preventDefault();
    this.props.deleteTenant();
  };

  render() {
    return (
      <DefaultLayout pathname={this.props.location.pathname}>
        <ValidatedForm
          form='Login'
          handleSubmit={this.onHandleSubmit}
          initialData={{ password: null, email: null }}
          loading={this.props.isLoading}
          validate={this.props.validateForm}
        >
          <ValidatedInput
            error={this.props.errors.get('email')}
            name='email'
            placeholder='Dirección de Correo'
          />

          <ValidatedInput
            error={this.props.errors.get('password')}
            name='password'
            placeholder='Contraseña'
            type='password'
          />

          <Submit
            disabled={!this.props.isValid}
            fluid
            loading={this.props.isLoading}
          />

          <Divider />

          <a onClick={this.handleClick}>
            {'Cambiar Empresa'}
          </a>
        </ValidatedForm>
      </DefaultLayout>
    );
  }
}

LoginPage.propTypes = {
  deleteTenant: PropTypes.func.isRequired,
  errors: PropTypes.shape({ get: PropTypes.func, }).isRequired,
  handleSubmit: PropTypes.func.isRequired,
  isLoading: PropTypes.bool,
  isValid: PropTypes.bool,
  location: PropTypes.shape({ pathname: PropTypes.string, }).isRequired,
  validateForm: PropTypes.func.isRequired,
};

LoginPage.defaultProps = {
  isLoading: false,
  isValid: false
};

export default LoginPage;
