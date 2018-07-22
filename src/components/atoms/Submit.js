import PropTypes from 'prop-types';
import React from 'react';
import { Button } from 'semantic-ui-react';

class Submit extends React.PureComponent {
  render() {
    return (
      <Button
        primary
        content={this.props.content}
        type={this.props.type}
        fluid={this.props.fluid}
        disabled={this.props.disabled}
        loading={this.props.loading}
        size={this.props.size}
      />
    );
  }
}

Submit.propTypes = {
  content: PropTypes.string,
  type: PropTypes.string,
  fluid: PropTypes.bool,
  disabled: PropTypes.bool,
  loading: PropTypes.bool
};

Submit.defaultProps = {
  content: 'Enviar',
  type: 'text',
  fluid: false,
  disable: false,
  loading: false
};

export default Submit;
