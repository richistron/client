import React from 'react';
import { Form, Input, Label } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const FormField = props => {
  const { error, input, label, meta, placeholder, type } = props;
  const { pristine, error: meta_error } = meta;
  return (
    <Form.Field>
      <Label
        color={error || (meta_error && !pristine) ? 'red' : null}
        pointing="below"
      >
        {error ? error : meta_error && !pristine ? meta.error : label}
      </Label>
      <Input meta={meta} {...input} placeholder={placeholder} type={type} />
    </Form.Field>
  );
};

FormField.propTypes = {
  error: PropTypes.string,
  input: PropTypes.shape({
    name: PropTypes.string,
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
    onDragStart: PropTypes.func,
    onDrop: PropTypes.func,
    onFocus: PropTypes.func,
    value: PropTypes.string
  }),
  label: PropTypes.string,
  meta: PropTypes.shape({
    active: PropTypes.bool,
    asyncValidating: PropTypes.bool,
    autofilled: PropTypes.bool,
    dirty: PropTypes.bool,
    dispatch: PropTypes.func,
    error: PropTypes.string,
    form: PropTypes.string,
    initial: PropTypes.bool,
    invalid: PropTypes.bool,
    pristine: PropTypes.bool,
    submitFailed: PropTypes.bool,
    submitting: PropTypes.bool,
    touched: PropTypes.bool,
    valid: PropTypes.bool,
    visited: PropTypes.bool,
    warning: PropTypes.bool
  }),
  placeholder: PropTypes.string,
  type: PropTypes.string
};

FormField.defaultProps = {
  error: null,
  input: null,
  label: null,
  meta: null,
  placeholder: null,
  type: null
};

export default FormField;
