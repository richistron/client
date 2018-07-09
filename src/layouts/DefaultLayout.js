import React from 'react'
import { Container, Divider, Header, Segment } from 'semantic-ui-react'
import Testito from '../components/Testito';

const DefaultLayout = (props) => (
  <Container style={{ paddingTop: '20px' }} text>

    {console.log(props)}
    <Header as='h2'>Header Groups</Header>

    <Segment attached>Segment</Segment>

    <Divider section />

    <Testito />

  </Container>
)

export default DefaultLayout;

