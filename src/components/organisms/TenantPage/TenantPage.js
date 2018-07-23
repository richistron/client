import DefaultLayout from '../../layouts/DefaultLayout';
import PropTypes from 'prop-types';
import React from 'react';
import ValidatedForm from '../../atoms/ValidatedForm';
import ValidatedInput from '../../atoms/ValidatedInput';
import Submit from '../../atoms/Submit';

class TenantPage extends React.PureComponent {
  onSubmit = e => {
    e.preventDefault();
    this.props.handleSubmit();
  };

  render() {
    return (
      <DefaultLayout pathname={this.props.location.pathname}>
        <ValidatedForm
          form="TenantSelect"
          handleSubmit={this.onSubmit}
          initialData={{ tenant: null }}
          loading={this.props.isLoading}
          size="large"
          validate={this.props.validateForm}
        >
          <ValidatedInput
            error={this.props.errors.get('tenant')}
            label="Empresa"
            name="tenant"
            placeholder="Empresa"
          />

          <Submit
            disabled={!this.props.isValid}
            fluid
            loading={this.props.isLoading}
            size="large"
          />
        </ValidatedForm>
      </DefaultLayout>
    );
  }
}

TenantPage.propTypes = {
  errors: PropTypes.shape({ get: PropTypes.func }).isRequired,
  handleSubmit: PropTypes.func.isRequired,
  isLoading: PropTypes.bool,
  isValid: PropTypes.bool,
  location: PropTypes.shape({ pathname: PropTypes.string }).isRequired,
  validateForm: PropTypes.func.isRequired
};

TenantPage.defaultProps = {
  isLoading: false,
  isValid: false
};

export default TenantPage;
