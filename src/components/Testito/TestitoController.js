import {connect} from 'react-redux';

export default (Component) => connect(
  (state) => ({
    foo: 'adlfkjadklsfj',
    tenant_name: state.tenant.name,
  }),
  () => ({
    bar: () => console.log('bar')
  })
)(Component);
