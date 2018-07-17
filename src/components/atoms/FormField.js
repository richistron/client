import React from 'react';
import {Form, Input, Label} from 'semantic-ui-react';
import PropTypes from 'prop-types';

class FormField extends React.PureComponent {
  render() {
    const {meta} = this.props;
    return (
      <Form.Field>
        <Label
          pointing='below'
          color={this.props.error || (meta.error && !meta.pristine && !meta.active) ? 'red' : null}
        >
          {this.props.error ? this.props.error : (meta.error && !meta.pristine && !meta.active) ? this.props.meta.error : this.props.label}
        </Label>
        <Input
          meta={this.props.meta}
          {...this.props.input}
          placeholder={this.props.placeholder}
          type={this.props.type}
        />
      </Form.Field>
    );
  }
}

FormField.propTypes = {
  error: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
};

FormField.defaultProps = {
  error: null,
  label: null,
  placeholder: null,
  type: null,
};

export default FormField;


