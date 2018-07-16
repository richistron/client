import React from 'react';
import Submit from '../../atoms/Submit';
import ValidatedForm from '../../atoms/ValidatedForm';
import ValidatedInput from '../../atoms/ValidatedInput';

class LoginForm extends React.PureComponent {
  handleSubmit(e) {
    e.preventDefault();
    this.props.handleSubmit();
  }

  render() {
    return (
      <ValidatedForm
        form={'Login'}
        handleSubmit={this.handleSubmit.bind(this)}
      >

        <ValidatedInput
          label={'Dirección de Correo'}
          name={'email'}
          placeholder={'juan@example.com'}
        />

        <ValidatedInput
          label={'Contraseña'}
          name={'password'}
          placeholder={'*****'}
          type={'password'}
        />

        <Submit />

      </ValidatedForm>
    );
  }
}

export default LoginForm;
