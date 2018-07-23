import React from 'react';
import { Form, Input, Label } from 'semantic-ui-react';
import PropTypes from 'prop-types';

class FormField extends React.PureComponent {
  showError = () => (this.props.error) ||
    (this.props.meta.error && !this.props.meta.pristine && !this.props.meta.active);

  showErrorMessage = () => this.props.meta.error ? this.props.meta.error : this.props.error ? this.props.error : null;

  render() {
    return (
      <Form.Field>
        <Input
          meta={this.props.meta}
          placeholder={this.props.placeholder}
          type={this.props.type}
          {...this.props.input}
        />
        {this.showError() &&
        <Label
          color='red'
          pointing='above'
        >
          {this.showErrorMessage()}
        </Label>
        }
      </Form.Field>
    );
  }
}

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
