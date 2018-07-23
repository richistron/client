import React from 'react';
import { Input, Menu, Icon, Segment } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class Navigation extends React.PureComponent {
  shouldShowMenu = () => {
    const { pathname } = this.props;
    switch (pathname) {
      case '/tenant':
        return false;

      case '/login':
        return false;

      case '/':
        return false;

      default:
        return true;
    }
  };

  shouldShowBackBtn = () => this.props.pathname !== '/';

  render() {
    return this.shouldShowMenu() ? (
      <Segment>
        <Menu attached="top">
          {this.shouldShowBackBtn() && (
            <Menu.Item>
              <Link to="/">
                <Icon name="angle left" />
              </Link>
            </Menu.Item>
          )}
          <Menu.Menu>
            <Menu.Item>
              <Input
                icon='search'
                placeholder='Search...'
              />
            </Menu.Item>
          </Menu.Menu>
        </Menu>
      </Segment>
    ) : null;
  }
}

Navigation.defaultProps = {};

Navigation.propTypes = {
  pathname: PropTypes.string.isRequired
};

export default Navigation;
