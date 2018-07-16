import DefaultLayout from '../../layouts/DefaultLayout';
import LoginForm from '../../molecules/LoginForm';
import React from 'react';
import {Header} from 'semantic-ui-react';

class LoginPage extends React.PureComponent {
  render() {
    return (
      <DefaultLayout>
        <Header content={'Iniciar Sesión'}/>
        <LoginForm />
      </DefaultLayout>
    );
  }
}

export default LoginPage;
