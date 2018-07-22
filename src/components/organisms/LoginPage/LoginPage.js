import DefaultLayout from '../../layouts/DefaultLayout';
import PropTypes from 'prop-types';
import React from 'react';
// import { Header, Grid } from 'semantic-ui-react';
import ValidatedInput from '../../atoms/ValidatedInput';
import ValidatedForm from '../../atoms/ValidatedForm';
import Submit from '../../atoms/Submit';

class LoginPage extends React.PureComponent {
  handleSubmit = e => {
    e.preventDefault();
    this.props.handleSubmit();
  };

  render() {
    return (
      <DefaultLayout pathname={this.props.location.pathname}>
        <ValidatedForm
          form={'Login'}
          handleSubmit={this.handleSubmit}
          validate={this.props.validateForm}
          loading={this.props.isLoading}
          initialData={{
            password: null,
            email: null
          }}
        >
          <ValidatedInput
            label={'Dirección de Correo'}
            name={'email'}
            placeholder={'juan@example.com'}
            error={this.props.errors.get('email')}
          />

          <ValidatedInput
            label={'Contraseña'}
            name={'password'}
            placeholder={'*****'}
            type={'password'}
            error={this.props.errors.get('password')}
          />

          <Submit
            fluid
            disabled={!this.props.isValid}
            loading={this.props.isLoading}
          />
        </ValidatedForm>
      </DefaultLayout>
    );
  }
}

LoginPage.propTypes = {
  errors: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired
};

LoginPage.defaultProps = {};

export default LoginPage;
