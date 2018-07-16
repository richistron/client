import PropTypes from 'prop-types';
import React from 'react';
import {Button} from 'semantic-ui-react';

class Submit extends React.PureComponent {
  render () {
    return <Button content={this.props.content} primary type={this.props.type} />
  }
}

Submit.propTypes = {
  content: PropTypes.string,
  type: PropTypes.string,
};

Submit.defaultProps = {
  content: 'Enviar',
  type: 'text',
};

export default Submit;
