import React from "react";
import PropTypes from "prop-types";
import { Card, Button } from "react-bootstrap";
import { propTypes } from "react-bootstrap/esm/Image";

export const Cards = props => {
	return (
		<Card style={{ width: "18rem" }} className="col-2 m-3">
			<Card.Img variant="top" src="holder.js/400px200" />
			<Card.Body>
				<Card.Title>{props.title}</Card.Title>
				<Card.Text>{props.body}</Card.Text>
				<Button variant="outline-primary">Learn More!</Button>
				<Button variant="outline-warning" className="float-right">
					<i className="far fa-heart" />
				</Button>
			</Card.Body>
		</Card>
	);
};

Cards.propTypes = {
	title: PropTypes.string,
	body: PropTypes.string
};
