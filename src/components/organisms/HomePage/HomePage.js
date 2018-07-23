import DefaultLayout from '../../layouts/DefaultLayout';
import PropTypes from 'prop-types';
import React from 'react';
import { Label, Menu, Segment, Button, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

/*


<Segment attached>
          <Button
            as={Link}
            fluid
            to='/caja'
          >
            <Icon name="calculator" />
            { 'Caja' }
          </Button>
        </Segment>
        <Segment attached>
          <Button
            as={Link}
            fluid
            to='/'
          >
            <Icon name="food" />
            {'Cocina'}
          </Button>
        </Segment>
        <Segment attached>
          <Button
            as={Link}
            fluid
            to='/'
          >
            <Icon name="table" />
            {'Mesas'}
          </Button>
        </Segment>
        <Segment attached>
          <Button
            fluid
            onClick={this.handleClick}
            to='/'
          >
            <Icon name="window close" />
            {'Logout'}
          </Button>
        </Segment>
 */

class HomePage extends React.PureComponent {
  handleClick = e => {
    e.preventDefault();
    this.props.logout();
  };

  render() {
    return (
      <DefaultLayout pathname={this.props.location.pathname}>
        <Segment>
          <Menu fluid vertical>
            <Menu.Item active name="inbox">
              <Button as={Link} fluid to="/caja">
                <Icon name="calculator" />
                {'Caja'}
                <Label>{'1'}</Label>
              </Button>
            </Menu.Item>

            <Menu.Item active name="inbox">
              <Button as={Link} fluid to="/">
                <Icon name="table" />
                {'Mesas'}
                <Label>{'1'}</Label>
              </Button>
            </Menu.Item>

            <Menu.Item onClick={this.handleClick} widths={13}>
              <Button fluid onClick={this.handleClick} to="/">
                <Icon name="window close" />
                {'Logout'}
              </Button>
            </Menu.Item>
          </Menu>
        </Segment>
      </DefaultLayout>
    );
  }
}

HomePage.propTypes = {
  location: PropTypes.shape({ pathname: PropTypes.string }).isRequired,
  logout: PropTypes.func.isRequired
};

HomePage.defaultProps = {};

export default HomePage;
