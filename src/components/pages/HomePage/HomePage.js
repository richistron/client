import React from 'react';
import {Header} from 'semantic-ui-react';
import DefaultLayout from '../../layouts/DefaultLayout';

//TODO add tests
class HomePage extends React.PureComponent {
  componentDidMount(){
    this.props.validateSession();
  }

  render() {
    return (
      <DefaultLayout>
        <Header as='h2'>Home Page</Header>

        <Header as='h4' attached='top' block>
          Top Block Header
        </Header>
      </DefaultLayout>
    );
  }
}

export default HomePage;
