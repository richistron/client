import React from 'react'
import DefaultLayout from '../../layouts/DefaultLayout';

const Testito = (props) => (
  <DefaultLayout>
    <div>
      {props.tenant_name !== 'richistron' &&
          <a onClick={props.handleClick}>
            testito
          </a>
      }
      <p>
        tenant name: {props.tenant_name}
      </p>

    </div>
  </DefaultLayout>
);

export default Testito;

