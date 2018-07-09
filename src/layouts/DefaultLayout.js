import React from 'react'
import { Container, Divider, Header, Segment } from 'semantic-ui-react'

const DefaultLayout = () => (
    <Container style={{ paddingTop: '20px' }} text>

        <Header as='h2'>Header Groups</Header>

        <Segment attached>Segment</Segment>

        <Divider section />

    </Container>
)

export default DefaultLayout;

