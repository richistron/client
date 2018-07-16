import DefaultLayout from '../../layouts/DefaultLayout';
import PropTypes from 'prop-types';
import React from 'react';
import {Header} from 'semantic-ui-react';
import ValidatedInput from '../../atoms/ValidatedInput';
import ValidatedForm from '../../atoms/ValidatedForm';
import Submit from '../../atoms/Submit';

class LoginPage extends React.PureComponent {
  handleSubmit(e) {
    e.preventDefault();
    this.props.handleSubmit();
  }

  render() {
    const required = (val) => {
      // console.log(val);
      return 'adfadf';
    };
    return (
      <DefaultLayout
        tenant={this.props.tenant}
        isUserLogged={this.props.isUserLogged}
        pathname={this.props.location.pathname}
        key={'login'}
      >
        <Header content={'Iniciar Sesión'}/>

        <ValidatedForm
          form={'Login'}
          handleSubmit={this.handleSubmit.bind(this)}
        >

          <ValidatedInput
            label={'Dirección de Correo'}
            name={'email'}
            placeholder={'juan@example.com'}
            error={this.props.errors.get('email')}
            validate={[required]}
          />

          <ValidatedInput
            label={'Contraseña'}
            name={'password'}
            placeholder={'*****'}
            type={'password'}
            error={this.props.errors.get('password')}
          />

          <Submit />

        </ValidatedForm>

      </DefaultLayout>
    );
  }
}

LoginPage.propTypes = {
  isUserLogged: PropTypes.bool.isRequired,
  tenant: PropTypes.string.isRequired,
  location: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};

LoginPage.defaultProps = {

};

export default LoginPage;
