import DefaultLayout from '../../layouts/DefaultLayout';
import PropTypes from 'prop-types';
import React from 'react';
import { Header, Segment } from 'semantic-ui-react';

class HomePage extends React.PureComponent {
  render() {
    return (
      <DefaultLayout pathname={this.props.location.pathname}>
        <Header as="h4" attached="top" block>
          Top Block Header
        </Header>
        <Segment attached>Segment</Segment>
      </DefaultLayout>
    );
  }
}

HomePage.propTypes = {
  location: PropTypes.object.isRequired
};

HomePage.defaultProps = {};

export default HomePage;
