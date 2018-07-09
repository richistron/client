import React from 'react'
import { Container } from 'semantic-ui-react'

const DefaultLayout = (props) => (
  <Container style={{ paddingTop: '20px' }} text>
    {props.children}
  </Container>
)

export default DefaultLayout;

