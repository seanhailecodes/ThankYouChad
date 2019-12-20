import React from 'react'
import styled from 'styled-components'

const Styles = styled.div`
    .aboutFont {
        color: white;
    }
`
export const About = () => (
    <Styles>
      <div className='aboutFont'>
          <h2>About Us</h2>
          <br></br>
          <p> 
                We have a team of proven experts at your disposal. Drawing on two decades of experience providing consultative services across twenty-four disciplines of outpatient medicine. Our company founder has worked with several small independent medical practices as well as some of the largest and most prestigious universities in America including NYU School of Medicine, Columbia University, and Weill Cornell. We have helped our clients generate, and save hundreds of thousands of dollars. 
            </p>
            <p>
              We can help you too.
            </p>
        </div>
    </Styles>
)
