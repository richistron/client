import DefaultLayout from '../../layouts/DefaultLayout';
import PropTypes from 'prop-types';
import React from 'react';
import {Header} from 'semantic-ui-react';
import ValidatedForm from '../../atoms/ValidatedForm';
import ValidatedInput from '../../atoms/ValidatedInput';
import Submit from '../../atoms/Submit';

class TenantPage extends React.PureComponent {
  handleSubmit(e) {
    e.preventDefault();
    this.props.handleSubmit();
  }

  render() {
    return (
      <DefaultLayout
        pathname={this.props.location.pathname}
      >
        <Header as='h2'>Seleciona Empresa</Header>

        <ValidatedForm
          form={'TenantSelect'}
          handleSubmit={this.handleSubmit.bind(this)}
        >

          <ValidatedInput
            name={'tenant'}
            label={'Empresa'}
            placeholder={'Empresa'}
            error={this.props.errors.get('tenant')}
          />

          <Submit fluid />
        </ValidatedForm>
      </DefaultLayout>
    );
  }
}

TenantPage.propTypes = {
  location: PropTypes.object.isRequired,
};

TenantPage.defaultProps = {
};


export default TenantPage;
