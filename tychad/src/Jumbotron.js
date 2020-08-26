import React from 'react'
import { Jumbotron as Jumbo, Container } from 'react-bootstrap'
import styled from 'styled-components'

const Styles = styled.div`
    .jumbotron {
        background-color: #0000FF;
        background: url no-repeat fixed bottom;
        background-size: cover;
        color: #0000ff;
        height: 200px;
        position: relative;
        z-index: -2;
    }

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
export const Jumbotron = () => (

    <div className="container">
      <div className="row">
          <div className="col-sm-12">
            <div id="my-slider" className="carousel slide" data-ride="carousel">
                {/* indicators dot nav */}
                    {/* <ol className="carousel-indicators">
                        <li data-target="#my-slider" data-slide-to="0" className="active"></li>
                        <li data-target="#my-slider" data-slide-to="1"></li>
                    </ol> */}
                {/* wrappers for slides */}
                <div className="carousel-inner" role="listbox">

                    <div className="item active">
                     
                        {/* lola */}
                            {/* <img src="https://i.imgur.com/7LgUlA2.jpg" alt="dog walker" title="source: imgur.com" /> */}
                        <div className="carousel-caption">
                            {/* <h3>Harrison Walkers</h3>  */}
                        </div>

                    </div>

                    <div className="item">

                        {/* Mac */}
                        {/* <img src="https://i.imgur.com/ahj3zPr.jpg" alt="walk dog" title="source: imgur.com" /> */}
                        <div className="carousel-caption">
                            {/* <h3>Harrison Walkers 2</h3>  */}
                        </div>

                    </div>
                </div>


                 {/* controls or next and prev buttons */}
                        {/* <a className="left carousel-control" href="#my-slider" role="button" data-slide="prev">
                            <span className='glyphicon glyphicon-chevron-left' aria-hidden='true'></span>
                            <span className='sr-only'>Previous</span>
                        </a>

                        <a className="right carousel-control" href="#my-slider" role="button" data-slide="next">
                            <span className='glyphicon glyphicon-chevron-right' aria-hidden='true'></span>
                            <span className='sr-only'>Next</span>
                        </a> */}
            </div>
          

   <Styles>
        <Jumbo fluid className='Jumbotron'>
        <div className='overlay'></div>
        <Container>
            
        </Container>
        </Jumbo>
    </Styles>
    
    </div>
    
      </div>
    </div>
)
