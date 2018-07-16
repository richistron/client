import React from 'react';
import PropTypes from 'prop-types';
import {Form, Input, Label} from 'semantic-ui-react';
import {Field} from 'redux-form/immutable';

const _ValidatedInput = (props) => <Input
  {...props.input}
  placeholder={props.placeholder}
  type={props.type}
/>;

class ValidatedInput extends React.PureComponent {
  render() {
    return (
      <Form.Field>
        <Label
          pointing='below'
          // color={'red'}
        >
          {this.props.label}
        </Label>
        <Field
          component={_ValidatedInput}
          name={this.props.name}
          placeholder={this.props.placeholder}
          type={this.props.type}
        />
      </Form.Field>
    );
  }
}

ValidatedInput.defaultProps = {
  label: '',
  placeholder: '',
  type: 'text'
};

ValidatedInput.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.string,
};

export default ValidatedInput;
