import React from 'react'
import Container from 'react-bootstrap/Container' //importing just container from Bootstrap makes app faster

export const Layout = (props) => (
    <Container>
        {props.children}
    </Container>
)