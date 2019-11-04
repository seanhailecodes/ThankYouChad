import React from 'react'
import { Jumbotron as Jumbo, Container } from 'react-bootstrap'
import styled from 'styled-components'
import hc1 from '../assets/hc1.jpg'

const Styles = styled.div`
    .jumbotron {
        background: url(${hc1}) no-repeat fixed bottom;
        background-size: cover;
        color: #ccc;
        height: 200px;
        position: relative;
        z-index: -2;
    }

`

export const Jumbotron = () => (
    <Styles>
        <Jumbo fluid className='Jumbo'>
        <div className='overlay'></div>
        <Container>
            <h1>Welcome</h1>
            <p> When is the last time your practice had a checkup?</p>
        </Container>
        </Jumbo>
    </Styles>
)