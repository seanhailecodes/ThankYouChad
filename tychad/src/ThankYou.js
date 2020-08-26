import React from 'react'
import styled from 'styled-components'

const Styles = styled.div`
    .serviceFont {
        color: white;
    }
`
export const ThankYou = () => (
    <Styles>
      <div className = 'serviceFont'>
        <h2>Thank You</h2>
          <br></br>
            <h4>To You</h4>
            <p>
              Thank you again for this amazing opportunity. I appreciate the tips, input, feedback, and guidance you provided very much.
            </p>
            <h4> To Ping </h4>
            <p>
              My gosh, what an amazing company Andre started. I am just so grateful to be a part of it. 
            </p>
            <h4>My Team</h4>
            <p>
              Eddy, Mindy, Eric, and my whole GS Oleadership team for fostering the environment in which I thrive.
            </p>
            <h4>HR</h4>
            <p>
              Thank you Brett and Brittany for facilitating this wonderfull opportunity for me. 
            </p>
      </div>
    </Styles>
)
