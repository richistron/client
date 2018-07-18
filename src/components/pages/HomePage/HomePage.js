import DefaultLayout from '../../layouts/DefaultLayout';
import PropTypes from 'prop-types';
import React from 'react';
import { Header, Segment, Button, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class HomePage extends React.PureComponent {
  render() {
    return (
      <DefaultLayout pathname={this.props.location.pathname}>
        <Header as="h4" attached="top" block>
          Bienvenido {this.props.nickname}
        </Header>
        <Segment attached>
          <Button as={Link} fluid to={'/caja'}>
            <Icon name="calculator" />
            Caja
          </Button>
        </Segment>
        <Segment attached>Modulo</Segment>
        <Segment attached>Modulo</Segment>
      </DefaultLayout>
    );
  }
}

HomePage.propTypes = {
  location: PropTypes.object.isRequired
};

HomePage.defaultProps = {};

export default HomePage;
