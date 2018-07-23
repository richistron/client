import DefaultLayout from '../../layouts/DefaultLayout';
import PropTypes from 'prop-types';
import React from 'react';
// import { Header, Grid } from 'semantic-ui-react';
import ValidatedInput from '../../atoms/ValidatedInput';
import ValidatedForm from '../../atoms/ValidatedForm';
import Submit from '../../atoms/Submit';

class LoginPage extends React.PureComponent {
  onHandleSubmit = e => {
    e.preventDefault();
    this.props.handleSubmit();
  };

  render() {
    return (
      <DefaultLayout pathname={this.props.location.pathname}>
        <ValidatedForm
          form="Login"
          handleSubmit={this.onHandleSubmit}
          initialData={{ password: null, email: null }}
          loading={this.props.isLoading}
          validate={this.props.validateForm}
        >
          <ValidatedInput
            error={this.props.errors.get('email')}
            label="Dirección de Correo"
            name="email"
            placeholder="juan@example.com"
          />

          <ValidatedInput
            error={this.props.errors.get('password')}
            label="Contraseña"
            name="password"
            placeholder="*****"
            type="password"
          />

          <Submit
            disabled={!this.props.isValid}
            fluid
            loading={this.props.isLoading}
          />
        </ValidatedForm>
      </DefaultLayout>
    );
  }
}

LoginPage.propTypes = {
  errors: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  isLoading: PropTypes.bool,
  isValid: PropTypes.bool,
  location: PropTypes.object.isRequired,
  validateForm: PropTypes.func.isRequired
};

LoginPage.defaultProps = {
  isLoading: false,
  isValid: false
};

export default LoginPage;
