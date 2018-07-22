import React from 'react';
import { Form, Input, Label } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import lodash from 'lodash';

class FormField extends React.PureComponent {
  render() {
    const { error, label, meta, placeholder, type } = this.props;
    const { pristine } = meta;
    return (
      <Form.Field>
        <Label
          pointing="below"
          color={error || (meta.error && !pristine) ? 'red' : null}
        >
          {error ? error : meta.error && !pristine ? meta.error : label}
        </Label>
        <Input
          meta={meta}
          {...this.props.input}
          placeholder={placeholder}
          type={type}
        />
      </Form.Field>
    );
  }
}

FormField.propTypes = {
  error: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string
};

FormField.defaultProps = {
  error: null,
  label: null,
  placeholder: null,
  type: null
};

export default FormField;
