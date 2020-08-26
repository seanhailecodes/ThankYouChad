import React from 'react';
import { Jumbotron as Jumbo, Container } from 'react-bootstrap';
import styled from 'styled-components';

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
`;
export const Jumbotron = () => (
	<div className="container">
		<div className="row">
			<div className="col-sm-12">

				<Styles>
					<Jumbo fluid className="Jumbotron">
						<div className="overlay" />
						<Container />
					</Jumbo>
				</Styles>
			</div>
		</div>
	</div>
);
