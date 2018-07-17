import React from 'react';
import PropTypes from 'prop-types';
import {Field} from 'redux-form/immutable';
import FormField from './FormField';

class ValidatedInput extends React.PureComponent {
  render() {
    return (
      <Field
        component={FormField}
        name={this.props.name}
        placeholder={this.props.placeholder}
        type={this.props.type}
        validate={this.props.validate}
        error={this.props.error}
        label={this.props.label}
      />
    );
  }
}

ValidatedInput.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  validate: PropTypes.array,
  error: PropTypes.string,
};

ValidatedInput.defaultProps = {
  placeholder: null,
  type: 'text',
  validate: null,
  error: null,
};

export default ValidatedInput;
