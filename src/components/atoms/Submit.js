import PropTypes from 'prop-types';
import React from 'react';
import {Button} from 'semantic-ui-react';

class Submit extends React.PureComponent {
  render () {
    return <Button
      primary
      content={this.props.content}
      type={this.props.type}
      fluid={this.props.fluid}
    />
  }
}

Submit.propTypes = {
  content: PropTypes.string,
  type: PropTypes.string,
  fluid: PropTypes.bool,
};

Submit.defaultProps = {
  content: 'Enviar',
  type: 'text',
  fluid: false,
};

export default Submit;
