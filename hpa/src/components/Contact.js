import React from 'react'
import styled from 'styled-components'

const Styles = styled.div`
    .contactFont {
        color: white;
    }
`

export const Contact = () => (
    <Styles>
    <div className='contactFont'>
      <h2>Contact Us</h2>

      <p> Phone: +1.9086939431
          
          
          Email: Support@hpa.com

          
          Address: 123 Anywhere Ln. Denver CO 80209
          </p>
    </div>
    </Styles>
)
