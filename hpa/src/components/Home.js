import React from 'react'
import styled from 'styled-components'

const Styles = styled.div`
    .homeFont {
        color: white;
    }
`

export const Home = () => (
        <Styles>
           <div className ='homeFont' >
            <h2 >When is the last time your practice had a check up?</h2>
            <br></br>
            <p> Here at HPA we provide comprhensive outpatint optimization to the areas of your practice that need it most. </p>
            <p>
                Revenue Cycles
            </p>
            <p>
                Accessability/Online Presence
            </p>
            <p>
                Reimbursement Levels
            </p>
            <p>
                Transparent Reporting
            </p>
            </div>
        </Styles>
)
