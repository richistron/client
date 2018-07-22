import DefaultLayout from '../../layouts/DefaultLayout';
import PropTypes from 'prop-types';
import React from 'react';
import { Segment, Button, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class HomePage extends React.PureComponent {
  logout = e => {
    e.preventDefault();
    this.props.logout();
  };

  render() {
    return (
      <DefaultLayout pathname={this.props.location.pathname}>
        <Segment attached>
          <Button as={Link} fluid to={'/caja'}>
            <Icon name="calculator" />
            Caja
          </Button>
        </Segment>
        <Segment attached>
          <Button as={Link} fluid to={'/'}>
            <Icon name="food" />
            Cocina
          </Button>
        </Segment>
        <Segment attached>
          <Button as={Link} fluid to={'/'}>
            <Icon name="table" />
            Mesas
          </Button>
        </Segment>
        <Segment attached>
          <Button onClick={this.logout} fluid to={'/'}>
            <Icon name="window close" />
            Logout
          </Button>
        </Segment>
      </DefaultLayout>
    );
  }
}

HomePage.propTypes = {
  location: PropTypes.object.isRequired
};

HomePage.defaultProps = {};

export default HomePage;
