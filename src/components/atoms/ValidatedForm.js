import React from 'react';
import PropTypes from 'prop-types';
import {Form} from 'semantic-ui-react';
import {reduxForm} from 'redux-form/immutable';

class ValidatedForm extends React.PureComponent {
  render() {
    return (
      <Form
        size={this.props.size}
        onSubmit={this.props.handleSubmit}
        loading={this.props.loading}
      >
        {this.props.children}
      </Form>
    );
  }
}

ValidatedForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  size: PropTypes.string,
  loading: PropTypes.bool,
};

ValidatedForm.defaultProps = {
  size: 'tiny',
  loading: false,
};

export default reduxForm({})(ValidatedForm);
