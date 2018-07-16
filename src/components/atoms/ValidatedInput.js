import React from 'react';
import PropTypes from 'prop-types';
import {Form, Input, Label} from 'semantic-ui-react';
import {Field} from 'redux-form/immutable';

const _ValidatedInput = (props) => {
  console.log('props', props);
  return (
    <Input
      meta={props.meta}
      {...props.input}
      placeholder={props.placeholder}
      type={props.type}
    />
  );
}

class ValidatedInput extends React.PureComponent {
  render() {
    console.log('other', this.props);
    return (
      <Form.Field>
        <Label
          pointing='below'
          color={this.props.error ? 'red' : null}
        >
          {this.props.error ? this.props.error : this.props.label}
        </Label>
        <Field
          component={_ValidatedInput}
          name={this.props.name}
          placeholder={this.props.placeholder}
          type={this.props.type}
          validate={this.props.validate}
        />
      </Form.Field>
    );
  }
}

ValidatedInput.defaultProps = {
  label: null,
  placeholder: null,
  type: 'text',
  error: null,
  validate: null,
};

ValidatedInput.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  error: PropTypes.string,
  validate: PropTypes.array,
};

export default ValidatedInput;
