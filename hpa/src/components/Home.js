import React from 'react'
import { Container } from 'react-bootstrap'
import styled from 'styled-components'

const Styles = styled.div`
    .overlay {
        background-color: #0000FF;
        opacitiy: 0.6;
        position: absolute;
        top: 0;
        left: 0;
        bottom; 0:
        right: 0;
        z-index: -1;
    }

`
export const Home = () => (
    <Styles>
       <Container>
            <div>
            <h2>When is the last time your practice had a check up?</h2>
            <br></br>
            <p> Here at HPA we provide comprhensive outpatint optimization to the areas of your practice that need it most. </p>
            <p>
                Revenue
            </p>
            </div>
        </Container>
    </Styles>
)
