import React from 'react';
import DefaultLayout from '../../layouts/DefaultLayout';
import { Segment } from 'semantic-ui-react';
// import PropTypes from 'prop-types';

class CajaPage extends React.PureComponent {
  render() {
    return (
      <DefaultLayout pathname={this.props.location.pathname}>
        <Segment stacked>adflkjadfklj</Segment>
      </DefaultLayout>
    );
  }
}

CajaPage.defaultProps = {};

CajaPage.propTypes = {};

export default CajaPage;
