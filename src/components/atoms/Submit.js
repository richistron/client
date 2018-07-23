import PropTypes from 'prop-types';
import React from 'react';
import { Button } from 'semantic-ui-react';

const Submit = props => (
  <Button
    content={props.content}
    disabled={props.disabled}
    fluid={props.fluid}
    loading={props.loading}
    primary
    size={props.size}
    type={props.type}
  />
);

Submit.propTypes = {
  content: PropTypes.string,
  disabled: PropTypes.bool,
  fluid: PropTypes.bool,
  loading: PropTypes.bool,
  size: PropTypes.string,
  type: PropTypes.string,
};

Submit.defaultProps = {
  content: 'Enviar',
  disabled: false,
  fluid: false,
  loading: false,
  size: null,
  type: 'text',
};

export default Submit;
