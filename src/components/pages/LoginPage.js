import React from 'react';
import {Header} from 'semantic-ui-react';
import DefaultLayout from '../layouts/DefaultLayout';

// TODO add tests
class LoginPage extends React.PureComponent {
  render() {
    return (
      <DefaultLayout>
        <Header as='h2'>Login</Header>

        <Header as='h4' attached='top' block>
          login page
        </Header>
      </DefaultLayout>
    );
  }
}

export default LoginPage;
