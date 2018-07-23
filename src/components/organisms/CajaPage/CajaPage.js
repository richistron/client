import React from 'react';
import DefaultLayout from '../../layouts/DefaultLayout';
import { Segment } from 'semantic-ui-react';
import PropTypes from 'prop-types';

class CajaPage extends React.PureComponent {
  getPathname = () => this.props.location.pathname;

  render() {
    return (
      <DefaultLayout pathname={this.getPathname()}>
        <Segment stacked>
          {'adflkjadfklj'}
        </Segment>
      </DefaultLayout>
    );
  }
}

CajaPage.defaultProps = {};

CajaPage.propTypes = {
  location: PropTypes.shape({pathname: PropTypes.string}).isRequired,
};

export default CajaPage;
