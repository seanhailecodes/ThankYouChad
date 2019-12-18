import React from 'react'
import styled from 'styled-components'

const Styles = styled.div`
    .blueStyle {
        background-color: #0000FF;
        background-size: cover;
        color: #0000ff;
    }
    `

export const About = () => (

  <div className='blueStyle'>
    <h2>About Us</h2>
    <p> 
          We have a team of of proven experts, at your disposal. Drawing on decades of experience across twenty-four multi-disciplinary specialties, we will provide your practice with hands on support - improving your bottom line. 
      </p>
  </div>
 
)
