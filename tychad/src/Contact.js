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
      <h2>Contact Me</h2>

        <p> 
             Phone: 917.438.8920 or 303.827.4301     
        </p>
        <p>  
             Email: seanhaile@pingidenetity.com
        </p>
        <p>
            Slack: Sean Haile    
        </p>
        <p>
          Twitter: @seanhaile1    
          </p>
    </div>
    </Styles>
)
