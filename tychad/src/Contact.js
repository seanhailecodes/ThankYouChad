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
      <h2>Contact</h2>

      <p> Phone: 917.438.8920 or 303.824.4301

          </p>      
          
          Email: seanhaile@pingidenetity.com
             <p>
          Slack: SeanTwitter @seanhaile1    
          <p>
          Twitter: @seanhaile1    
          </p>
          </p>
    </div>
    </Styles>
)
