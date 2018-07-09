import React from 'react'

const Testito = (props) => (
  <div>
    testito
    {console.log('props', props)}
    <p>
      tenant name: {props.tenant_name}
    </p>

  </div>
);

export default Testito;

