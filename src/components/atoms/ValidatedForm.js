import React from 'react';
import PropTypes from 'prop-types';
import { Form, Segment } from 'semantic-ui-react';
import { reduxForm } from 'redux-form/immutable';

const ValidatedForm = props => {
  return (
    <Form
      loading={props.loading}
      onSubmit={props.handleSubmit}
      size={props.size}
    >
      <Segment stacked>{props.children}</Segment>
    </Form>
  );
};

ValidatedForm.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.object)]),
  handleSubmit: PropTypes.func.isRequired,
  loading: PropTypes.bool,
  size: PropTypes.string
};

ValidatedForm.defaultProps = {
  size: 'tiny',
  loading: false,
  children: null
};

export default reduxForm({})(ValidatedForm);
