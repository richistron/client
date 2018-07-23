import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form/immutable';
import FormField from './FormField';

class ValidatedInput extends React.PureComponent {
  render() {
    return (
      <Field
        component={FormField}
        error={this.props.error}
        label={this.props.label}
        name={this.props.name}
        placeholder={this.props.placeholder}
        type={this.props.type}
        validate={this.props.validate}
      />
    );
  }
}

ValidatedInput.propTypes = {
  error: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  validate: PropTypes.arrayOf(PropTypes.func)
};

ValidatedInput.defaultProps = {
  error: null,
  label: null,
  placeholder: null,
  type: 'text',
  validate: null
};

export default ValidatedInput;
