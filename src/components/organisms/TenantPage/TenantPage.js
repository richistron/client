import DefaultLayout from '../../layouts/DefaultLayout';
import PropTypes from 'prop-types';
import React from 'react';
// import { Header } from 'semantic-ui-react';
import ValidatedForm from '../../atoms/ValidatedForm';
import ValidatedInput from '../../atoms/ValidatedInput';
import Submit from '../../atoms/Submit';

class TenantPage extends React.PureComponent {
  handleSubmit = e => {
    e.preventDefault();
    this.props.handleSubmit();
  };

  render() {
    return (
      <DefaultLayout pathname={this.props.location.pathname}>
        <ValidatedForm
          form={'TenantSelect'}
          handleSubmit={this.handleSubmit}
          initialData={{ tenant: null }}
          validate={this.props.validateForm}
          loading={this.props.isLoading}
          size={'large'}
        >
          <ValidatedInput
            name={'tenant'}
            label={'Empresa'}
            placeholder={'Empresa'}
            error={this.props.errors.get('tenant')}
          />

          <Submit
            fluid
            disabled={!this.props.isValid}
            loading={this.props.isLoading}
            size={'large'}
          />
        </ValidatedForm>
      </DefaultLayout>
    );
  }
}

TenantPage.propTypes = {
  location: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  isValid: PropTypes.bool
};

TenantPage.defaultProps = {
  isValid: false
};

export default TenantPage;
