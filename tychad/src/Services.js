import React from 'react'
import styled from 'styled-components'

const Styles = styled.div`
    .serviceFont {
        color: white;
    }
`
export const Services = () => (
    <Styles>
      <div className = 'serviceFont'>
        <h2>Our Services</h2>
        <br></br>
          <h4>Revenue </h4>
            <p>
              We provide revenue optimization of your practice through transparent and deatiled custom auditing of your billing cycles. We can then diagnose areas of weakness, as well as reccommend and implement treatment options bolstering your practices bottom line.
            </p>
          <h4>Online Presence</h4>
            <p>
              Now more than ever, new patients turn to Google for help in finding your practice. We can provide SEO support as well as content management of your web presence. 
            </p>
            <h4>Reimbursement Levels</h4>
            <p>
              We find often there are state and federal government incentive programs underutilized by private practices. Managed Care insurers also provide incitives, including higher levels of reimbursement, for high performing practices. We can identify which programs will benefit yur practice the most, then get your practice enrolled. 
            </p>
            <h4>Transparent Reporting</h4>
            <p>
              We help detangle convoluted reporting of your company finances to provide you with clarity on your costs, overhead, and revenue. 
            </p>
      </div>
      </Styles>
)
