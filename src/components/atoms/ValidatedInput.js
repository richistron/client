import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form/immutable';
import FormField from './FormField';

const ValidatedInput = props => (
  <Field
    component={FormField}
    error={props.error}
    label={props.label}
    name={props.name}
    placeholder={props.placeholder}
    type={props.type}
    validate={props.validate}
  />
);

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
