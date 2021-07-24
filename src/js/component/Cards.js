import React from "react";
import PropTypes from "prop-types";
import { Card, Button } from "react-bootstrap";
import { propTypes } from "react-bootstrap/esm/Image";

export const Cards = props => {
	return (
		<Card style={{ width: "18rem" }} className="col-2">
			<Card.Img variant="top" src="holder.js/100px180" />
			<Card.Body>
				<Card.Title>{props.item}</Card.Title>
				<Card.Text>
					Some quick example text to build on the card title and make up the bulk of the cards content.
				</Card.Text>
				<Button variant="primary">Go somewhere</Button>
			</Card.Body>
		</Card>
	);
};

Cards.propTypes = {
	item: PropTypes.string
};
