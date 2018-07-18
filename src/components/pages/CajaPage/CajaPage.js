import React from 'react';
import DefaultLayout from '../../layouts/DefaultLayout';
// import PropTypes from 'prop-types';

class CajaPage extends React.PureComponent {
  render() {
    return (
      <DefaultLayout pathname={this.props.location.pathname}>
        Caja
      </DefaultLayout>
    );
  }
}

CajaPage.defaultProps = {};

CajaPage.propTypes = {};

export default CajaPage;
